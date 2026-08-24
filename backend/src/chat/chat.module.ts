import { Module } from "@nestjs/common";
import { ChatController } from "./chat.controller";
import { ChatService } from "./chat.service";
import { VectorStoreService } from "./vector-store.service";
import { GeminiService } from "./gemini.service";

@Module({
  controllers: [ChatController],
  providers: [ChatService, VectorStoreService, GeminiService],
})
export class ChatModule {}
