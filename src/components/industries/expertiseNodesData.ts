import {
  BoxSelect,
  ScanEye,
  Brain,
  Stethoscope,
  BarChart3,
  Code2,
  MessagesSquare,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export interface ExpertiseNode {
  icon: LucideIcon;
  label: string;
  color: string;
  bg: string;
  angle: number;
}

export const expertiseWheelNodes: ExpertiseNode[] = [
  { icon: BoxSelect, label: "AI Data Annotation", color: "text-brand-blue-500", bg: "bg-brand-blue-50", angle: 270 },
  { icon: ScanEye, label: "Computer Vision", color: "text-cyan-500", bg: "bg-cyan-50", angle: 315 },
  { icon: Brain, label: "Generative AI", color: "text-violet-500", bg: "bg-violet-50", angle: 0 },
  { icon: Stethoscope, label: "Healthcare AI", color: "text-purple-500", bg: "bg-purple-50", angle: 45 },
  { icon: BarChart3, label: "Analytics & Insights", color: "text-brand-blue-500", bg: "bg-brand-blue-50", angle: 90 },
  { icon: Code2, label: "Software Development", color: "text-brand-green-600", bg: "bg-brand-green-50", angle: 135 },
  { icon: MessagesSquare, label: "Language Services", color: "text-rose-500", bg: "bg-rose-50", angle: 180 },
  { icon: Cloud, label: "Cloud Solutions", color: "text-brand-blue-500", bg: "bg-brand-blue-50", angle: 225 },
];
