import { FileText, FileStack, ScanLine, Tags, FileCog } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const documentTypes: string[] = [
  "Invoices",
  "Receipts",
  "Medical Records",
  "Contracts",
  "Business Reports",
  "Knowledge Articles",
  "Question-Answer Pairs",
];

export const textDocumentFeatures: IconGridItem[] = [
  { icon: FileText, title: "Text Collection", description: "Domain-specific and conversational text sourced for NLP and LLMs." },
  { icon: FileStack, title: "Document Collection", description: "Structured and unstructured documents gathered at enterprise scale." },
  { icon: ScanLine, title: "OCR", description: "Scanned documents converted into clean, structured text." },
  { icon: Tags, title: "Metadata", description: "Every document tagged with the metadata your model needs." },
  { icon: FileCog, title: "Format Conversion", description: "Delivered in the file format your pipeline already expects." },
];
