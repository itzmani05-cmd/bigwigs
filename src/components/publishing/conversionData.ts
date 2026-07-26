import { FileText, FileCode, Globe2, Tablet, BookOpen } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const conversionFlowSteps: ProcessStep[] = [
  { icon: FileText, title: "PDF" },
  { icon: FileText, title: "Word" },
  { icon: FileCode, title: "XML" },
  { icon: Globe2, title: "HTML" },
  { icon: Tablet, title: "EPUB" },
  { icon: BookOpen, title: "Digital Reader" },
];

export const conversionPairs: string[] = [
  "PDF → Word",
  "Word → XML",
  "XML → HTML",
  "PDF → EPUB",
  "HTML → EPUB",
  "InDesign → EPUB",
];
