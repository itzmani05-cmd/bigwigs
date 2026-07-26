import {
  Bot,
  Headset,
  TrendingUp,
  Users2,
  Landmark,
  Layers,
  Search,
  Workflow,
} from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const agentServices: IconGridItem[] = [
  {
    icon: Bot,
    title: "Enterprise AI Assistants",
    description: "Knowledge assistants deployed across every department.",
  },
  {
    icon: Headset,
    title: "Customer Service Agents",
    description: "24×7 support agents that resolve, escalate, and learn.",
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing Agents",
    description: "Lead qualification, outreach, and CRM updates on autopilot.",
  },
  {
    icon: Users2,
    title: "HR & Recruitment Agents",
    description: "Screening, scheduling, and onboarding handled end-to-end.",
  },
  {
    icon: Landmark,
    title: "Finance & Operations Agents",
    description: "Invoices, expenses, and compliance monitored continuously.",
  },
  {
    icon: Layers,
    title: "Multi-Agent Systems",
    description: "Specialized agents coordinated by a shared orchestrator.",
  },
  {
    icon: Search,
    title: "Retrieval-Augmented Generation",
    description: "Agents grounded in your enterprise knowledge, not guesses.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Multi-step business processes automated across systems.",
  },
];
