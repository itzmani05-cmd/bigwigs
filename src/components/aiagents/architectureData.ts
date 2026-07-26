import { MonitorSmartphone, Brain, Database, Puzzle, type LucideIcon } from "lucide-react";

export interface ArchitectureLayer {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    icon: MonitorSmartphone,
    title: "User Interface",
    items: ["Web", "Mobile", "Teams", "Slack", "WhatsApp", "Voice"],
  },
  {
    icon: Brain,
    title: "AI Layer",
    items: ["LLMs", "Prompt Engineering", "Reasoning Engine", "Memory", "Tool Orchestration"],
  },
  {
    icon: Database,
    title: "Knowledge Layer",
    items: ["Documents", "Databases", "Vector Database", "Enterprise Search"],
  },
  {
    icon: Puzzle,
    title: "Integration Layer",
    items: ["CRM", "ERP", "HRMS", "Ticketing", "Cloud Services"],
  },
];
