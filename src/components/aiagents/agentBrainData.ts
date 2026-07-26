import { MessagesSquare, Brain, ClipboardList, Search, Target, Workflow, Repeat, Puzzle, type LucideIcon } from "lucide-react";

export interface AgentBrainNode {
  icon: LucideIcon;
  label: string;
  angle: number;
}

export const agentBrainNodes: AgentBrainNode[] = [
  { icon: MessagesSquare, label: "Natural Language", angle: 270 },
  { icon: Brain, label: "Reasoning", angle: 315 },
  { icon: ClipboardList, label: "Planning", angle: 0 },
  { icon: Search, label: "Knowledge Retrieval", angle: 45 },
  { icon: Target, label: "Decision Making", angle: 90 },
  { icon: Workflow, label: "Workflow Execution", angle: 135 },
  { icon: Repeat, label: "Learning", angle: 180 },
  { icon: Puzzle, label: "Enterprise Integration", angle: 225 },
];

export const chatbotFlow: string[] = ["Answers Questions", "Limited Context", "No Task Execution"];

export const agentFlow: string[] = ["Reasons", "Plans", "Executes Tasks", "Learns", "Automates Workflows"];
