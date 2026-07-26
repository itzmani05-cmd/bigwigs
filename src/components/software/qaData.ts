import { Bot, ShieldCheck, Gauge, RotateCcw, Webhook, ClipboardCheck, type LucideIcon } from "lucide-react";

export interface QaMetric {
  icon: LucideIcon;
  label: string;
  status: string;
}

export const qaMetrics: QaMetric[] = [
  { icon: Bot, label: "Automation", status: "Passing" },
  { icon: ShieldCheck, label: "Security", status: "Audited" },
  { icon: Gauge, label: "Performance", status: "Benchmarked" },
  { icon: RotateCcw, label: "Regression", status: "Passing" },
  { icon: Webhook, label: "API Testing", status: "Verified" },
  { icon: ClipboardCheck, label: "UAT", status: "Signed Off" },
];
