import { Brain, Code2, Plus, Activity, Mic, BrainCircuit, type LucideIcon } from "lucide-react";

export interface ServiceOrbitNode {
  icon: LucideIcon;
  label: string;
  bg: string;
  ring: string;
  angle: number;
}

export const serviceOrbitNodes: ServiceOrbitNode[] = [
  { icon: Brain, label: "AI & Data Solutions", bg: "bg-violet-500", ring: "#8b5cf6", angle: 270 },
  { icon: Code2, label: "Software Development", bg: "bg-blue-500", ring: "#3b82f6", angle: 330 },
  { icon: Plus, label: "Healthcare AI", bg: "bg-emerald-500", ring: "#10b981", angle: 30 },
  { icon: Activity, label: "Language & Content Services", bg: "bg-amber-500", ring: "#f59e0b", angle: 90 },
  { icon: Mic, label: "Transcription Services", bg: "bg-pink-500", ring: "#ec4899", angle: 150 },
  { icon: BrainCircuit, label: "Generative AI & LLM Services", bg: "bg-cyan-500", ring: "#06b6d4", angle: 210 },
];
