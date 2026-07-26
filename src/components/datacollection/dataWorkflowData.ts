import { ClipboardList, Search, Cog, ShieldCheck, PackageCheck } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const dataWorkflowSteps: ProcessStep[] = [
  { icon: ClipboardList, title: "Project Planning", description: "Scope, spec, and target demographics defined with your team." },
  { icon: Search, title: "Data Acquisition", description: "Collection begins across the sources and regions you need." },
  { icon: Cog, title: "Data Processing", description: "Raw data cleaned, structured, and prepared for annotation." },
  { icon: ShieldCheck, title: "Quality Assurance", description: "Every batch validated against your accuracy and format spec." },
  { icon: PackageCheck, title: "Delivery", description: "Final dataset packaged and delivered on your schedule." },
];
