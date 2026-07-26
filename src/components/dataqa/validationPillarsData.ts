import { Image, Video, Mic, type LucideIcon } from "lucide-react";

export interface ValidationPillar {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const validationPillars: ValidationPillar[] = [
  {
    icon: Image,
    title: "Image Validation",
    items: ["Image Resolution", "Lighting", "Noise Detection", "Duplicate Detection", "Metadata"],
  },
  {
    icon: Video,
    title: "Video QA",
    items: ["Frame Quality", "Frame Rate", "Scene Continuity", "Timestamp Validation", "Object Tracking"],
  },
  {
    icon: Mic,
    title: "Audio Validation",
    items: ["Audio Clarity", "Speaker Verification", "Language Detection", "Accent Verification", "Noise Analysis"],
  },
];
