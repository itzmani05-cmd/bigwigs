import { Users2, Layers, Award, SlidersHorizontal, Building2, BarChart3 } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const whyQaReasons: IconGridItem[] = [
  { icon: Users2, title: "Dedicated QA Specialists", description: "Reviewers trained on your guideline, not a generic checklist." },
  { icon: Layers, title: "Multi-Level Review", description: "Four review levels stand between annotation and delivery." },
  { icon: Award, title: "Domain Expertise", description: "Medical, legal, and technical reviewers for specialized data." },
  { icon: SlidersHorizontal, title: "Configurable QA", description: "Review depth and sampling tuned to your risk tolerance." },
  { icon: Building2, title: "Enterprise Scale", description: "The same rigor from a pilot batch to millions of records." },
  { icon: BarChart3, title: "Transparent Reporting", description: "Metrics and audit trails visible at every stage of delivery." },
];
