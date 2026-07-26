import { ScanLine, FileText, ClipboardCheck, Receipt, FileSearch, Table } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const ocrDocumentFeatures: IconGridItem[] = [
  { icon: ScanLine, title: "Text Detection" },
  { icon: FileText, title: "Text Recognition" },
  { icon: ClipboardCheck, title: "Form Annotation" },
  { icon: Receipt, title: "Invoice Processing" },
  { icon: FileSearch, title: "Document Classification" },
  { icon: Table, title: "Table Recognition" },
];
