import {
  Code2,
  Stethoscope,
  ScanEye,
  Workflow,
  Languages,
  Mic,
  AudioLines,
  Database,
  ShieldCheck,
  BookOpen,
  Bot,
  type LucideIcon,
} from "lucide-react";

export const SERVICE_COLOR_THEME = {
  blue: { badgeBg: "bg-blue-50", text: "text-blue-600", bar: "bg-blue-500" },
  violet: { badgeBg: "bg-violet-50", text: "text-violet-600", bar: "bg-violet-500" },
  fuchsia: { badgeBg: "bg-fuchsia-50", text: "text-fuchsia-600", bar: "bg-fuchsia-500" },
  green: { badgeBg: "bg-emerald-50", text: "text-emerald-600", bar: "bg-emerald-500" },
  orange: { badgeBg: "bg-orange-50", text: "text-orange-600", bar: "bg-orange-500" },
  cyan: { badgeBg: "bg-cyan-50", text: "text-cyan-600", bar: "bg-cyan-500" },
  rose: { badgeBg: "bg-rose-50", text: "text-rose-600", bar: "bg-rose-500" },
} as const;

export type ServiceColor = keyof typeof SERVICE_COLOR_THEME;

export interface ServiceCardItem {
  icon: LucideIcon;
  name: string;
  description: string;
  color: ServiceColor;
  href: string;
}

export const servicesGrid: ServiceCardItem[] = [
  {
    icon: Code2,
    name: "Software Development",
    description: "Custom, cloud-native software engineering.",
    color: "blue",
    href: "/service/software-development",
  },
  {
    icon: Stethoscope,
    name: "Medical Image Annotation",
    description: "Clinically-aware imaging models & workflows.",
    color: "violet",
    href: "/service/healthcare-ai",
  },
  {
    icon: ScanEye,
    name: "AI Data Annotation",
    description: "Image, video, LiDAR, and OCR annotation for computer vision.",
    color: "fuchsia",
    href: "/service/ai-data-annotation",
  },
  {
    icon: Workflow,
    name: "Generative AI Services",
    description: "LLMs, AI agents, RAG, and intelligent workflow automation.",
    color: "green",
    href: "/service/generative-ai",
  },
  {
    icon: Languages,
    name: "Translation & Localization",
    description: "Multilingual content, software, and web experiences.",
    color: "orange",
    href: "/service/translation-localization",
  },
  {
    icon: Mic,
    name: "Transcription Services",
    description: "AI-assisted, human-reviewed audio and video transcription.",
    color: "cyan",
    href: "/service/transcription-services",
  },
  {
    icon: AudioLines,
    name: "Voice & Speech Data Collection",
    description: "Enterprise speech datasets for voice AI and conversational AI.",
    color: "rose",
    href: "/service/voice-data-collection",
  },
  {
    icon: Database,
    name: "Data Collection & AI Datasets",
    description: "Custom datasets, crowdsourcing, and synthetic data for AI training.",
    color: "blue",
    href: "/service/data-collection",
  },
  {
    icon: ShieldCheck,
    name: "Data Validation & QA",
    description: "Annotation QA, dataset validation, and accuracy benchmarking at scale.",
    color: "orange",
    href: "/service/data-quality-assurance",
  },
  {
    icon: BookOpen,
    name: "Digital Publishing",
    description: "XML-first publishing, eBook conversion, and accessible EPUB & PDF.",
    color: "violet",
    href: "/service/digital-publishing",
  },
  {
    icon: Bot,
    name: "AI Agents & Automation",
    description: "Autonomous agents that execute enterprise workflows end-to-end.",
    color: "green",
    href: "/service/ai-agents-automation",
  },
];
