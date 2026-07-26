import { SearchCheck, ScanSearch, Layers, ClipboardCheck, FileCheck2, Hash, Video, FileStack, type LucideIcon } from "lucide-react";

export interface ApplicationNode {
  icon: LucideIcon;
  label: string;
  angle: number;
}

export const applicationNodes: ApplicationNode[] = [
  { icon: SearchCheck, label: "Disease Detection", angle: 270 },
  { icon: ScanSearch, label: "Tumor Detection", angle: 315 },
  { icon: Layers, label: "Organ Segmentation", angle: 0 },
  { icon: ClipboardCheck, label: "Clinical Decision Support", angle: 45 },
  { icon: FileCheck2, label: "Claims Processing", angle: 90 },
  { icon: Hash, label: "Medical Coding", angle: 135 },
  { icon: Video, label: "Telemedicine", angle: 180 },
  { icon: FileStack, label: "Document AI", angle: 225 },
];
