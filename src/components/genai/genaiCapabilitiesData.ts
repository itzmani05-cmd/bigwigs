import {
  Brain,
  Sparkles,
  MessagesSquare,
  Bot,
  Search,
  FileSearch,
  Workflow,
  Puzzle,
} from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const genaiCapabilities: IconGridItem[] = [
  {
    icon: Brain,
    title: "Large Language Models",
    description: "Enterprise LLMs fine-tuned and deployed on your own data.",
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    description: "Prompts designed, tested, and optimized for reliable output.",
  },
  {
    icon: MessagesSquare,
    title: "AI Chatbots",
    description: "Conversational assistants deployed across every channel.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous agents that execute tasks across your systems.",
  },
  {
    icon: Search,
    title: "Retrieval-Augmented Generation",
    description: "Grounded answers pulled from your own enterprise knowledge.",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    description: "Contracts, invoices, and forms understood, not just scanned.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Repetitive processes automated end-to-end with AI.",
  },
  {
    icon: Puzzle,
    title: "Enterprise Integrations",
    description: "AI connected to the CRMs, ticketing, and tools you run on.",
  },
];
