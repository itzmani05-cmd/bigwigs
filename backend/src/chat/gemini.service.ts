import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import type { Document } from "@langchain/core/documents";

const LLM_MODEL = "gemini-2.5-flash";

const SYSTEM_PROMPT = `You are the official AI assistant for Bigwigs Technologies.

Answer ONLY using the provided context from the Bigwigs Technologies website.

If the answer is not found in the context, respond exactly:
"Happy to help! I can only answer questions about Bigwigs Technologies — try asking about our services, industries, or how to get in touch."

Never invent facts.
Never use outside knowledge.
Keep answers professional and concise.

Format every answer in Markdown so it is easy to scan:
- Wrap key terms, service names, numbers, and other important facts in **bold**.
- Use "-" bullet points for lists of two or more items.
- Keep paragraphs short.`;

export const FALLBACK_ANSWER =
  "Happy to help! I can only answer questions about Bigwigs Technologies — try asking about our services, industries, or how to get in touch.";

@Injectable()
export class GeminiService {
  private readonly logger = new Logger(GeminiService.name);
  private readonly model: ChatGoogleGenerativeAI;
  private readonly prompt = ChatPromptTemplate.fromMessages([
    ["system", SYSTEM_PROMPT],
    ["human", "Context:\n{context}\n\nQuestion:\n{question}"],
  ]);

  constructor(private readonly config: ConfigService) {
    this.model = new ChatGoogleGenerativeAI({
      apiKey: this.config.getOrThrow<string>("GEMINI_API_KEY"),
      model: LLM_MODEL,
      temperature: 0.2,
    });
  }

  async generateAnswer(question: string, contextDocs: Document[]): Promise<string> {
    if (contextDocs.length === 0) {
      return FALLBACK_ANSWER;
    }

    const context = contextDocs.map((doc) => doc.pageContent).join("\n\n---\n\n");
    const chain = this.prompt.pipe(this.model);
    const result = await chain.invoke({ context, question });
    const answer = typeof result.content === "string" ? result.content : JSON.stringify(result.content);
    return answer.trim() || FALLBACK_ANSWER;
  }
}
