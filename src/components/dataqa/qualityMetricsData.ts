import { Clock, Smile, type LucideIcon } from "lucide-react";

export interface PercentMetric {
  type: "percent";
  label: string;
  value: number;
}

export interface StatMetric {
  type: "stat";
  label: string;
  value: string;
  icon: LucideIcon;
}

export type QualityMetric = PercentMetric | StatMetric;

export const qualityMetrics: QualityMetric[] = [
  { type: "percent", label: "Annotation Accuracy", value: 98 },
  { type: "percent", label: "Precision", value: 97 },
  { type: "percent", label: "Recall", value: 96 },
  { type: "percent", label: "Inter-Annotator Agreement", value: 95 },
  { type: "percent", label: "Acceptance Rate", value: 99 },
  { type: "percent", label: "Error Rate", value: 2 },
  { type: "percent", label: "Rework Rate", value: 4 },
  { type: "stat", label: "Turnaround Time", value: "24h", icon: Clock },
  { type: "stat", label: "Client Satisfaction", value: "4.9/5", icon: Smile },
];
