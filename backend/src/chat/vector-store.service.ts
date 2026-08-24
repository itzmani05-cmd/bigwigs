import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as path from "path";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import type { Document } from "@langchain/core/documents";

const VECTORSTORE_DIR = path.join(process.cwd(), "vectorstore");
const EMBEDDING_MODEL = "gemini-embedding-001";
const TOP_K = 5;

@Injectable()
export class VectorStoreService implements OnModuleInit {
  private readonly logger = new Logger(VectorStoreService.name);
  private store: FaissStore | null = null;

  constructor(private readonly config: ConfigService) {}

  async onModuleInit(): Promise<void> {
    const indexFile = path.join(VECTORSTORE_DIR, "faiss.index");
    if (!fs.existsSync(indexFile)) {
      this.logger.warn(
        `FAISS index not found at ${indexFile}. Run "npm run index:site" in backend/ to build it before using /api/chat.`,
      );
      return;
    }

    try {
      const embeddings = new GoogleGenerativeAIEmbeddings({
        apiKey: this.config.getOrThrow<string>("GEMINI_API_KEY"),
        model: EMBEDDING_MODEL,
      });
      this.store = await FaissStore.load(VECTORSTORE_DIR, embeddings);
      this.logger.log("FAISS vector store loaded.");
    } catch (error) {
      this.logger.error(
        "Failed to load FAISS vector store.",
        error instanceof Error ? error.stack : String(error),
      );
    }
  }

  isReady(): boolean {
    return this.store !== null;
  }

  async retrieveRelevantChunks(query: string): Promise<Document[]> {
    if (!this.store) {
      throw new Error("Vector store is not loaded.");
    }
    return this.store.similaritySearch(query, TOP_K);
  }
}
