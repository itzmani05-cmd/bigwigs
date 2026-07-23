import { Search, ClipboardList, Code2, ShieldCheck, Rocket, Headphones, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const industriesProcessSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Discover",
    description: "Understand goals and requirements.",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
  },
  {
    icon: ClipboardList,
    title: "Analyze",
    description: "Assess data and define AI strategy.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Develop AI models and solutions.",
    color: "text-brand-green-600",
    bg: "bg-brand-green-50",
  },
  {
    icon: ShieldCheck,
    title: "Validate",
    description: "Test, evaluate, and ensure accuracy.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Seamless deployment in your environment.",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Continuous support and optimization.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];
