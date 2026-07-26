import { Search, FileCog, Cog, ShieldCheck, PackageCheck } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const publishingWorkflowSteps: ProcessStep[] = [
  { icon: Search, title: "Content Assessment", description: "Source files and target formats reviewed before production begins." },
  { icon: FileCog, title: "Content Preparation", description: "Structure, styles, and metadata mapped to your production spec." },
  { icon: Cog, title: "Production", description: "Conversion, typesetting, and formatting completed at scale." },
  { icon: ShieldCheck, title: "Quality Assurance", description: "Every file validated against format and accessibility standards." },
  { icon: PackageCheck, title: "Delivery", description: "Final files delivered in every platform and format you need." },
];
