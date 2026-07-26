import { Award, Brain, Cloud, RefreshCw, Lock, HeartHandshake, type LucideIcon } from "lucide-react";

export interface WhyReason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyReasons: WhyReason[] = [
  {
    icon: Award,
    title: "Experienced Engineers",
    description: "Senior engineers on every project, not junior teams learning on your budget.",
  },
  {
    icon: Brain,
    title: "AI Expertise",
    description: "Generative AI and intelligent automation built in where it earns its place.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Architected for AWS, Azure, or GCP from the first line of infrastructure code.",
  },
  {
    icon: RefreshCw,
    title: "Agile Development",
    description: "Short sprints, visible progress, and room to change direction early.",
  },
  {
    icon: Lock,
    title: "Secure Coding",
    description: "Security reviewed at every stage, not bolted on before launch.",
  },
  {
    icon: HeartHandshake,
    title: "Long Term Support",
    description: "We stay on after launch — monitoring, patching, and iterating with you.",
  },
];
