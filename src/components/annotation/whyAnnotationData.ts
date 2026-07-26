import { Target, ShieldCheck, Clock, TrendingUp, Layers, Tags, CheckCircle2, Award, Lock, Users2, type LucideIcon } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export interface ImpactNode {
  icon: LucideIcon;
  label: string;
  angle: number;
}

export const impactNodes: ImpactNode[] = [
  { icon: Target, label: "High Accuracy", angle: 270 },
  { icon: ShieldCheck, label: "Reliable Models", angle: 342 },
  { icon: Clock, label: "Reduced Development Time", angle: 54 },
  { icon: TrendingUp, label: "Better Predictions", angle: 126 },
  { icon: Layers, label: "Scalable AI", angle: 198 },
];

export const annotationBenefits: IconGridItem[] = [
  { icon: Tags, title: "High-Quality Labels", description: "Every label produced to spec, not just close enough." },
  { icon: CheckCircle2, title: "Consistent Standards", description: "The same guideline applied across every annotator." },
  { icon: Award, title: "Domain Expertise", description: "Annotators trained on your industry, not a generic taskset." },
  { icon: ShieldCheck, title: "Enterprise QA", description: "Multi-level review before any dataset reaches your model." },
  { icon: Lock, title: "Secure Data", description: "Confidential datasets handled under strict access control." },
  { icon: Users2, title: "Scalable Teams", description: "From a pilot batch to thousands of annotators on demand." },
];
