import { ScanLine, FileSearch, Type, Image, Tags, FileStack } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const digitizationFeatures: IconGridItem[] = [
  { icon: ScanLine, title: "OCR", description: "Scanned pages converted into accurate, searchable text." },
  { icon: FileSearch, title: "Scanning", description: "Physical archives digitized at production scale." },
  { icon: Type, title: "Text Extraction", description: "Structured text pulled from complex legacy layouts." },
  { icon: Image, title: "Image Enhancement", description: "Faded and damaged pages restored before conversion." },
  { icon: Tags, title: "Metadata", description: "Every digitized asset tagged for search and retrieval." },
  { icon: FileStack, title: "Archive Digitization", description: "Full collections converted into a searchable digital archive." },
];
