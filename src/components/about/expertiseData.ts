import { BoxSelect, Stethoscope, Code2, Brain, MessagesSquare, ScanEye, type LucideIcon } from "lucide-react";

export interface ExpertiseNode {
  icon: LucideIcon;
  label: string;
  color: string;
  bg: string;
  angle: number;
}

export const expertiseNodes: ExpertiseNode[] = [
  { icon: BoxSelect, label: "AI Data Annotation", color: "text-brand-blue-500", bg: "bg-brand-blue-50", angle: 240 },
  { icon: Brain, label: "Generative AI", color: "text-violet-500", bg: "bg-violet-50", angle: 300 },
  { icon: Stethoscope, label: "Healthcare AI", color: "text-cyan-500", bg: "bg-cyan-50", angle: 180 },
  { icon: MessagesSquare, label: "Language Services", color: "text-orange-500", bg: "bg-orange-50", angle: 0 },
  { icon: Code2, label: "Software Development", color: "text-brand-green-600", bg: "bg-brand-green-50", angle: 120 },
  { icon: ScanEye, label: "Computer Vision", color: "text-pink-500", bg: "bg-pink-50", angle: 60 },
];
