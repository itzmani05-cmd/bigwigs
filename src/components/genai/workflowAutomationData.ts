import { Mail, Brain, Layers, Workflow, FileStack, Ticket, UserPlus, ClipboardList, Database, BarChart3 } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const automationFlowSteps: ProcessStep[] = [
  { icon: Mail, title: "Email" },
  { icon: Brain, title: "AI" },
  { icon: Layers, title: "Classification" },
  { icon: Workflow, title: "Automation" },
  { icon: FileStack, title: "Reports" },
];

export const automationFeatures: IconGridItem[] = [
  { icon: Mail, title: "Email Classification" },
  { icon: Ticket, title: "Ticket Routing" },
  { icon: UserPlus, title: "Customer Onboarding" },
  { icon: ClipboardList, title: "Meeting Summaries" },
  { icon: Database, title: "Knowledge Retrieval" },
  { icon: BarChart3, title: "Report Generation" },
];
