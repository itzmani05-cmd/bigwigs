// Walks src/pages and src/components, pulling out real user-facing copy
// (JSX text, image alt text, and object-literal fields like title/description/
// question/answer) into one JSON corpus the backend can embed and index.
// Deliberately skips markup noise: hrefs, classNames, icon names, ids, etc.
//
// Arrays of similar content objects (FAQ lists, testimonials, industry cards,
// footer link groups, ...) are split into one corpus entry PER ITEM instead of
// one blob per file — otherwise a 6-item FAQ list becomes a single chunk whose
// embedding is a blurry average of six unrelated questions, which badly hurts
// retrieval precision for any one of them.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, extname } from "node:path";
import ts from "typescript";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, "$1");
const SRC_DIR = join(ROOT, "src");
const OUT_FILE = join(ROOT, "scripts", "site-content.json");

const SKIP_DIRS = new Set(["hero", "assests", "assets"]);
const CONTENT_KEYS = new Set([
  "title",
  "name",
  "label",
  "description",
  "heading",
  "question",
  "answer",
  "text",
  "subtitle",
  "eyebrow",
  "quote",
  "role",
  "department",
  "company",
  "summary",
  "content",
  "shortDescription",
  "longDescription",
  "value",
  "overview",
  "challenge",
  "solution",
  "client",
  "industry",
  "challenges",
  "servicesDelivered",
  "toolsUsed",
  "technologies",
  "roles",
]);

function collectFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith(".")) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (SKIP_DIRS.has(entry)) continue;
      collectFiles(full, out);
    } else if ([".ts", ".tsx"].includes(extname(entry))) {
      out.push(full);
    }
  }
  return out;
}

const HTML_ENTITIES = {
  "&amp;": "&",
  "&apos;": "'",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&rdquo;": "”",
  "&ldquo;": "“",
  "&mdash;": "—",
  "&ndash;": "–",
  "&middot;": "·",
  "&nbsp;": " ",
};

function decodeEntities(str) {
  return str.replace(/&[a-z]+;/g, (m) => HTML_ENTITIES[m] ?? m);
}

function isNoise(str) {
  const s = str.trim();
  if (s.length < 2) return true;
  if (/^[#/.]/.test(s)) return true; // paths, hashes
  if (/^https?:\/\//.test(s)) return true;
  if (/^[a-z0-9_-]+$/i.test(s) && s.length < 4) return true; // short tokens/ids
  if (/^#[0-9a-fA-F]{3,8}$/.test(s)) return true; // hex colors
  if (/[[\]]/.test(s)) return true; // Tailwind arbitrary-value classes, e.g. top-[16%]
  if (/\d\/\d/.test(s)) return true; // Tailwind fraction utilities, e.g. -translate-x-1/4
  // strings that are entirely space-separated lowercase-hyphen tokens (Tailwind class soup)
  const tokens = s.split(/\s+/);
  if (tokens.length > 1 && tokens.every((t) => /^-?[a-z0-9]+(-[a-z0-9]+)*$/.test(t))) return true;
  return false;
}

function contentKeyName(node) {
  return node.name.getText().replace(/["']/g, "");
}

/** Extracts the string(s) a single node directly represents (JSXText, alt="",
 *  or a content-keyed property whose value is a string or array of strings).
 *  Does not recurse — callers walk the tree and call this per-node. */
function stringsFromNode(node) {
  const out = [];
  const push = (raw) => {
    const text = raw.trim();
    if (text && !isNoise(text)) out.push(decodeEntities(text));
  };

  if (ts.isJsxText(node)) {
    push(node.getText().replace(/\s+/g, " "));
  }
  if (ts.isJsxAttribute(node) && node.name.getText() === "alt" && node.initializer && ts.isStringLiteral(node.initializer)) {
    push(node.initializer.text);
  }
  if (ts.isPropertyAssignment(node) && CONTENT_KEYS.has(contentKeyName(node))) {
    const init = node.initializer;
    if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) {
      push(init.text);
    } else if (ts.isArrayLiteralExpression(init) && init.elements.every((el) => ts.isStringLiteral(el) || ts.isNoSubstitutionTemplateLiteral(el))) {
      for (const el of init.elements) push(el.text);
    }
  }
  return out;
}

/** Collects JSXText / alt="" / content-keyed string literals anywhere under `node`. */
function collectStrings(node) {
  const strings = [];
  function inner(n) {
    strings.push(...stringsFromNode(n));
    ts.forEachChild(n, inner);
  }
  inner(node);
  return Array.from(new Set(strings));
}

function isContentObject(objLit) {
  return objLit.properties.some(
    (p) =>
      ts.isPropertyAssignment(p) &&
      CONTENT_KEYS.has(contentKeyName(p)) &&
      (ts.isStringLiteral(p.initializer) || ts.isNoSubstitutionTemplateLiteral(p.initializer))
  );
}

/** Returns { items: [{label, text}], skipNodes: Set } — itemized array chunks
 *  plus the set of array-literal nodes to exclude from the whole-file blob. */
function findItemizedArrays(sourceFile) {
  const items = [];
  const skipNodes = new Set();

  function visit(node) {
    if (ts.isArrayLiteralExpression(node)) {
      const objElements = node.elements.filter((el) => ts.isObjectLiteralExpression(el));
      const contentObjects = objElements.filter(isContentObject);
      // Only itemize arrays that are clearly "a list of similar content cards":
      // at least 2 objects, and most of them carry real content fields.
      if (objElements.length >= 2 && contentObjects.length >= Math.ceil(objElements.length * 0.6)) {
        node.elements.forEach((el, i) => {
          if (!ts.isObjectLiteralExpression(el)) return;
          const strings = collectStrings(el);
          if (strings.length) items.push({ label: `item${i}`, text: strings.join(" ") });
        });
        skipNodes.add(node);
        return; // don't descend further — its contents are already captured per-item
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return { items, skipNodes };
}

function extractFromFile(filePath) {
  const sourceText = readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    filePath.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  );

  const { items, skipNodes } = findItemizedArrays(sourceFile);

  const rest = [];
  function visit(node) {
    if (skipNodes.has(node)) return;
    rest.push(...stringsFromNode(node));
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);

  return { items, restText: Array.from(new Set(rest)).join(" ") };
}

const files = collectFiles(SRC_DIR);
const corpus = [];

for (const file of files) {
  const relPath = relative(ROOT, file).replace(/\\/g, "/");
  const { items, restText } = extractFromFile(file);

  for (const item of items) {
    if (item.text.length < 15) continue;
    corpus.push({ source: `${relPath}#${item.label}`, text: item.text });
  }
  if (restText.length >= 20) {
    corpus.push({ source: relPath, text: restText });
  }
}

writeFileSync(OUT_FILE, JSON.stringify(corpus, null, 2), "utf8");
console.log(`Extracted content from ${new Set(corpus.map((c) => c.source.split("#")[0])).size} files -> ${corpus.length} entries -> ${OUT_FILE}`);
console.log(`Total characters: ${corpus.reduce((sum, c) => sum + c.text.length, 0)}`);
