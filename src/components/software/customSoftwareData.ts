import { Zap, TrendingDown, Gauge, Layers, type LucideIcon } from "lucide-react";

export const softwareChips: string[] = [
  "Enterprise Software",
  "ERP",
  "CRM",
  "HRMS",
  "Workflow Automation",
  "Analytics",
  "AI Applications",
];

export interface SoftwareBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const softwareBenefits: SoftwareBenefit[] = [
  {
    icon: Zap,
    title: "Faster Operations",
    description: "Automated workflows remove the manual steps slowing teams down.",
  },
  {
    icon: TrendingDown,
    title: "Lower Costs",
    description: "Consolidated systems replace expensive, overlapping tools.",
  },
  {
    icon: Gauge,
    title: "Higher Productivity",
    description: "Teams spend more time deciding, less time on data entry.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built to handle tomorrow's load, not just today's.",
  },
];
