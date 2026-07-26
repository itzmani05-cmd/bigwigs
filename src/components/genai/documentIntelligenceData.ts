import { ScanLine, Receipt, FileText, ClipboardCheck, ShieldCheck, Stethoscope } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const documentIntelligenceFeatures: IconGridItem[] = [
  { icon: ScanLine, title: "OCR" },
  { icon: Receipt, title: "Invoice Processing" },
  { icon: FileText, title: "Contracts" },
  { icon: ClipboardCheck, title: "Forms" },
  { icon: ShieldCheck, title: "Compliance" },
  { icon: Stethoscope, title: "Medical Records" },
];
