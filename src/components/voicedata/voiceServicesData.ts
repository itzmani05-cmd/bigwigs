import {
  Mic,
  Speaker,
  Globe2,
  Languages,
  ClipboardCheck,
  UserCheck,
  Smile,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const voiceServices: IconGridItem[] = [
  {
    icon: Mic,
    title: "Speech Data Collection",
    description: "Read, spontaneous, and conversational speech recorded at enterprise scale.",
  },
  {
    icon: Speaker,
    title: "Wake Word Collection",
    description: "Custom wake words captured across devices, rooms, and background conditions.",
  },
  {
    icon: Globe2,
    title: "Accent & Dialect Collection",
    description: "Native speakers across regions, ages, and genders for balanced datasets.",
  },
  {
    icon: Languages,
    title: "Multilingual Voice Collection",
    description: "Voice data gathered across 50+ languages and regional variants.",
  },
  {
    icon: ClipboardCheck,
    title: "Speech Annotation",
    description: "Segmentation, diarization, and intent labeling on every audio file.",
  },
  {
    icon: UserCheck,
    title: "Speaker Identification",
    description: "Speaker-labeled datasets built for biometrics and authentication models.",
  },
  {
    icon: Smile,
    title: "Emotion Recognition",
    description: "Emotion-tagged voice data for sentiment-aware conversational AI.",
  },
  {
    icon: ShieldCheck,
    title: "Audio Validation",
    description: "Multi-stage QA for audio quality, noise, and metadata compliance.",
  },
  {
    icon: Sparkles,
    title: "AI Voice Dataset Creation",
    description: "End-to-end datasets, packaged and ready for model training.",
  },
];
