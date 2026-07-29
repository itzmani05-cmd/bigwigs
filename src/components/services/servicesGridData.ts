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

export interface ServiceCardItem {
  icon: LucideIcon;
  name: string;
  description: string;
  iconGradient: string;
  href: string;
}

export const servicesGrid: ServiceCardItem[] = [
  {
    icon: Code2,
    name: "Software Development",
    description: "Custom, cloud-native software engineering.",
    iconGradient: "from-brand-blue-500 to-cyan-500",
    href: "/service/software-development",
  },
  {
    icon: Stethoscope,
    name: "Medical Image Annotation",
    description: "Clinically-aware imaging models & workflows.",
    iconGradient: "from-brand-blue-500 to-indigo-500",
    href: "/service/healthcare-ai",
  },
  {
    icon: ScanEye,
    name: "AI Data Annotation",
    description: "Image, video, LiDAR, and OCR annotation for computer vision.",
    iconGradient: "from-violet-500 to-purple-500",
    href: "/service/ai-data-annotation",
  },
  {
    icon: Workflow,
    name: "Generative AI Services",
    description: "LLMs, AI agents, RAG, and intelligent workflow automation.",
    iconGradient: "from-brand-green-500 to-emerald-500",
    href: "/service/generative-ai",
  },
  {
    icon: Languages,
    name: "Translation & Localization",
    description: "Multilingual content, software, and web experiences.",
    iconGradient: "from-orange-500 to-amber-500",
    href: "/service/translation-localization",
  },
  {
    icon: Mic,
    name: "Transcription Services",
    description: "AI-assisted, human-reviewed audio and video transcription.",
    iconGradient: "from-cyan-500 to-brand-blue-500",
    href: "/service/transcription-services",
  },
  {
    icon: AudioLines,
    name: "Voice & Speech Data Collection",
    description: "Enterprise speech datasets for voice AI and conversational AI.",
    iconGradient: "from-rose-500 to-pink-500",
    href: "/service/voice-data-collection",
  },
  {
    icon: Database,
    name: "Data Collection & AI Datasets",
    description: "Custom datasets, crowdsourcing, and synthetic data for AI training.",
    iconGradient: "from-brand-blue-500 to-cyan-500",
    href: "/service/data-collection",
  },
  {
    icon: ShieldCheck,
    name: "Data Validation & QA",
    description: "Annotation QA, dataset validation, and accuracy benchmarking at scale.",
    iconGradient: "from-orange-500 to-rose-500",
    href: "/service/data-quality-assurance",
  },
  {
    icon: BookOpen,
    name: "Digital Publishing",
    description: "XML-first publishing, eBook conversion, and accessible EPUB & PDF.",
    iconGradient: "from-violet-500 to-fuchsia-500",
    href: "/service/digital-publishing",
  },
  {
    icon: Bot,
    name: "AI Agents & Automation",
    description: "Autonomous agents that execute enterprise workflows end-to-end.",
    iconGradient: "from-brand-green-500 to-emerald-500",
    href: "/service/ai-agents-automation",
  },
];
