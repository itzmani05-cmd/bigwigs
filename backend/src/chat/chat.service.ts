import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
  ServiceUnavailableException,
} from "@nestjs/common";
import { VectorStoreService } from "./vector-store.service";
import { GeminiService } from "./gemini.service";

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);

  constructor(
    private readonly vectorStore: VectorStoreService,
    private readonly gemini: GeminiService,
  ) {}

  async answer(message: string): Promise<string> {
    if (!this.vectorStore.isReady()) {
      throw new ServiceUnavailableException(
        'The chatbot knowledge base is not ready yet. Run "npm run index:site" in backend/ to build it.',
      );
    }

    try {
      const relevantChunks = await this.vectorStore.retrieveRelevantChunks(message);
      return await this.gemini.generateAnswer(message, relevantChunks);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(
        "Failed to answer chat message.",
        error instanceof Error ? error.stack : String(error),
      );
      throw new InternalServerErrorException("Failed to generate an answer. Please try again.");
    }
  }
}
