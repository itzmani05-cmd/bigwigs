import { Sparkles, BookOpen, Workflow, MessagesSquare, Target, FlaskConical, Send, Brain, CheckCircle2 } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const promptFlowSteps: ProcessStep[] = [
  { icon: Send, title: "Prompt" },
  { icon: Brain, title: "AI Model" },
  { icon: CheckCircle2, title: "Response" },
  { icon: Target, title: "Evaluation" },
];

export const promptEngineeringFeatures: IconGridItem[] = [
  { icon: Sparkles, title: "Prompt Design" },
  { icon: BookOpen, title: "Prompt Library" },
  { icon: Workflow, title: "Workflow Optimization" },
  { icon: MessagesSquare, title: "Conversation Design" },
  { icon: Target, title: "Domain Prompts" },
  { icon: FlaskConical, title: "Prompt Testing" },
];
