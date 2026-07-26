import {
  ClipboardCheck,
  Image,
  Video,
  Mic,
  FileText,
  Stethoscope,
  Bot,
  ShieldCheck,
} from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const qaServices: IconGridItem[] = [
  {
    icon: ClipboardCheck,
    title: "Annotation Quality Review",
    description: "Bounding boxes, segmentation, and labels checked against guideline.",
  },
  {
    icon: Image,
    title: "Image Quality Validation",
    description: "Resolution, lighting, noise, and duplicates flagged before delivery.",
  },
  {
    icon: Video,
    title: "Video Quality Assurance",
    description: "Frame integrity, continuity, and tracking verified end-to-end.",
  },
  {
    icon: Mic,
    title: "Audio Validation",
    description: "Clarity, speaker identity, and language confirmed on every file.",
  },
  {
    icon: FileText,
    title: "Text Validation",
    description: "Grammar, entities, and classification checked for accuracy.",
  },
  {
    icon: Stethoscope,
    title: "Medical Data Validation",
    description: "Clinical labels and coding reviewed against domain standards.",
  },
  {
    icon: Bot,
    title: "LLM Dataset Evaluation",
    description: "Prompt-response quality, bias, and hallucination risk assessed.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Data Integrity",
    description: "Encrypted handling, audit trails, and controlled access throughout.",
  },
];
