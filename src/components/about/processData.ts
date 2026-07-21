import { Search, ClipboardList, Code2, ShieldCheck, Rocket, Headphones, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Discover",
    description: "Understanding your business needs",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    description: "Define strategy and engagement model",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Code2,
    title: "Develop",
    description: "Execute with agility and best practices",
    color: "text-brand-green-600",
    bg: "bg-brand-green-50",
  },
  {
    icon: ShieldCheck,
    title: "Quality Review",
    description: "Multi-level quality assurance",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Seamless delivery and integration",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing support and optimization",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];
