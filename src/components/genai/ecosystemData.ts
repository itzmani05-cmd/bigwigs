import { Brain, Sparkles, MessagesSquare, Bot, Database, Workflow, FileSearch, Search, TrendingUp, type LucideIcon } from "lucide-react";

export interface EcosystemNode {
  icon: LucideIcon;
  label: string;
  angle: number;
}

export const ecosystemNodes: EcosystemNode[] = [
  { icon: Brain, label: "Large Language Models", angle: 270 },
  { icon: Sparkles, label: "Prompt Engineering", angle: 310 },
  { icon: MessagesSquare, label: "AI Chatbots", angle: 350 },
  { icon: Bot, label: "AI Agents", angle: 30 },
  { icon: Database, label: "Knowledge Base", angle: 70 },
  { icon: Workflow, label: "Workflow Automation", angle: 110 },
  { icon: FileSearch, label: "Document Intelligence", angle: 150 },
  { icon: Search, label: "RAG", angle: 190 },
  { icon: TrendingUp, label: "Analytics", angle: 230 },
];
