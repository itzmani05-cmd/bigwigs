import { Brain, ShieldCheck, Bot, Search, Sparkles, Puzzle } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const whyGenaiReasons: IconGridItem[] = [
  { icon: Brain, title: "LLM Expertise", description: "Teams who fine-tune and evaluate models, not just call an API." },
  { icon: ShieldCheck, title: "Enterprise Security", description: "Your data stays yours — encrypted, access-controlled, isolated." },
  { icon: Bot, title: "AI Agents", description: "Autonomous workflows that execute, not just recommend." },
  { icon: Search, title: "RAG Specialists", description: "Retrieval pipelines built to minimize hallucination, not just demo well." },
  { icon: Sparkles, title: "Prompt Engineering", description: "Prompts tested and versioned like production code." },
  { icon: Puzzle, title: "Enterprise Integrations", description: "AI wired into the CRMs and tools your teams already use." },
];
