import { Tags, ClipboardCheck, Type, TableProperties, Ear, Tablet } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const accessibilityFeatures: IconGridItem[] = [
  { icon: Tags, title: "Tagged PDFs" },
  { icon: ClipboardCheck, title: "Logical Reading Order" },
  { icon: Type, title: "Alternative Text" },
  { icon: TableProperties, title: "Accessible Tables" },
  { icon: Ear, title: "Screen Reader Support" },
  { icon: Tablet, title: "EPUB Accessibility" },
];
