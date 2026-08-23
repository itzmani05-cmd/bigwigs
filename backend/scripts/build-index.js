// Reads the extracted site-content corpus (../../scripts/extract-site-content.mjs
// in the frontend project builds it), chunks it, embeds it with Gemini, and
// writes a FAISS index to backend/vectorstore/ — the same location and format
// vector-store.service.js loads at server startup.
//
// Resumable: embeddings are cached to embed-checkpoint.json as they're computed,
// keyed by a hash of each chunk's content. Re-running after a quota error (Gemini's
// free tier caps at 1000 embed requests/day) only pays for the chunks not yet cached.
"use strict";
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { Document } = require("@langchain/core/documents");
const { FaissStore } = require("@langchain/community/vectorstores/faiss");
const { GoogleGenerativeAIEmbeddings } = require("@langchain/google-genai");

const CORPUS_FILE = path.join(__dirname, "..", "..", "scripts", "site-content.json");
const VECTORSTORE_DIR = path.join(__dirname, "..", "vectorstore");
const CHECKPOINT_FILE = path.join(__dirname, "embed-checkpoint.json");
const EMBEDDING_MODEL = "gemini-embedding-001";
const CHUNK_SIZE = 1200;
const CHUNK_OVERLAP = 150;

function chunkText(text, size, overlap) {
  if (text.length <= size) return [text];
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + size, text.length);
    chunks.push(text.slice(start, end));
    if (end === text.length) break;
    start = end - overlap;
  }
  return chunks;
}

function hashChunk(source, text) {
  return crypto.createHash("sha256").update(`${source}::${text}`).digest("hex");
}

function loadCheckpoint() {
  if (!fs.existsSync(CHECKPOINT_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(CHECKPOINT_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveCheckpoint(cache) {
  const tmp = `${CHECKPOINT_FILE}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(cache));
  fs.renameSync(tmp, CHECKPOINT_FILE);
}

async function main() {
  if (!fs.existsSync(CORPUS_FILE)) {
    console.error(`Corpus not found at ${CORPUS_FILE}. Run "node scripts/extract-site-content.mjs" from the frontend project root first.`);
    process.exit(1);
  }
  const corpus = JSON.parse(fs.readFileSync(CORPUS_FILE, "utf8"));
  console.log(`Loaded ${corpus.length} source files from corpus.`);

  const docs = [];
  for (const { source, text } of corpus) {
    for (const chunk of chunkText(text, CHUNK_SIZE, CHUNK_OVERLAP)) {
      docs.push(new Document({ pageContent: chunk, metadata: { source, hash: hashChunk(source, chunk) } }));
    }
  }
  console.log(`Split into ${docs.length} chunks.`);

  const cache = loadCheckpoint();
  const cachedCount = docs.filter((d) => cache[d.metadata.hash]).length;
  console.log(`${cachedCount}/${docs.length} chunks already embedded from a previous run.`);

  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: EMBEDDING_MODEL,
  });

  // embedDocuments() batches many texts into one Google batchEmbedContents call and,
  // on a transient failure, silently swallows it and returns `[]` per doc instead of
  // throwing (see @langchain/google-genai's Promise.allSettled fallback) — that
  // produced zero-length vectors that broke FaissStore's fixed-dimension index the
  // first time this ran. embedQuery() calls one document at a time through LangChain's
  // AsyncCaller, which retries transient failures for real and throws instead of
  // swallowing, so a genuine failure (e.g. daily quota exhaustion) surfaces clearly.
  let expectedDim = null;
  for (const d of docs) {
    if (d.metadata.hash in cache) continue;
    const idx = docs.indexOf(d) + 1;
    process.stdout.write(`  chunk ${idx}/${docs.length}... `);
    let vector;
    try {
      vector = await embeddings.embedQuery(d.pageContent);
    } catch (err) {
      console.log("FAILED");
      saveCheckpoint(cache);
      const embedded = Object.keys(cache).length;
      if (err?.status === 429 || /quota/i.test(String(err?.message))) {
        console.error(
          `\nHit Gemini's embedding quota. ${embedded}/${docs.length} chunks are cached in ${path.basename(CHECKPOINT_FILE)} — re-run this script once the quota resets and it'll resume from here instead of starting over.`
        );
      } else {
        console.error("\nUnexpected embedding error:", err);
      }
      process.exit(1);
    }
    if (!Array.isArray(vector) || vector.length === 0) {
      throw new Error(`Chunk ${idx} (${d.metadata.source}) returned an empty embedding.`);
    }
    if (expectedDim === null) expectedDim = vector.length;
    else if (vector.length !== expectedDim) {
      throw new Error(`Chunk ${idx} (${d.metadata.source}) returned ${vector.length} dims, expected ${expectedDim}.`);
    }
    cache[d.metadata.hash] = vector;
    console.log("ok");
    if (idx % 20 === 0) saveCheckpoint(cache);
    await new Promise((r) => setTimeout(r, 150));
  }
  saveCheckpoint(cache);

  const vectors = docs.map((d) => cache[d.metadata.hash]);
  const store = new FaissStore(embeddings, {});
  await store.addVectors(vectors, docs);

  fs.mkdirSync(VECTORSTORE_DIR, { recursive: true });
  await store.save(VECTORSTORE_DIR);
  console.log(`Saved FAISS index to ${VECTORSTORE_DIR}`);
  fs.rmSync(CHECKPOINT_FILE, { force: true });
}

main().catch((err) => {
  console.error("Failed to build index:", err);
  process.exit(1);
});
