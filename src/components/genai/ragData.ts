import { FileSearch, Database, Search, ClipboardList, FileText, Compass } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const ragFeatures: IconGridItem[] = [
  { icon: FileSearch, title: "Document Search" },
  { icon: Database, title: "Knowledge Base" },
  { icon: Search, title: "Enterprise Search" },
  { icon: ClipboardList, title: "Policy Management" },
  { icon: FileText, title: "Contract Intelligence" },
  { icon: Compass, title: "Research Portals" },
];

export const ragBenefits: string[] = [
  "Reduced Hallucinations",
  "Real-Time Knowledge",
  "Accurate Responses",
  "Secure Enterprise Data",
];
