import {
  BoxSelect,
  Brain,
  Code2,
  Stethoscope,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

export type AccentColor = "blue" | "purple" | "green" | "cyan" | "orange";

interface AccentStyle {
  numberText: string;
  underline: string;
  iconGradient: string;
  iconGlow: string;
  cardBorder: string;
  cardBorderHover: string;
  glowBlob: string;
  ctaText: string;
  capabilityDot: string;
  capabilityIcon: string;
}

export const ACCENT_STYLES: Record<AccentColor, AccentStyle> = {
  blue: {
    numberText: "text-brand-blue-500/15",
    underline: "bg-brand-blue-500",
    iconGradient: "from-brand-blue-500 to-brand-blue-600",
    iconGlow: "rgba(37,99,235,0.45)",
    cardBorder: "border-brand-blue-500/15",
    cardBorderHover: "group-hover:border-brand-blue-500/40",
    glowBlob: "bg-brand-blue-500/20",
    ctaText: "text-brand-blue-600 hover:text-brand-blue-700",
    capabilityDot: "bg-brand-blue-500",
    capabilityIcon: "text-brand-blue-500",
  },
  purple: {
    numberText: "text-purple-500/15",
    underline: "bg-purple-500",
    iconGradient: "from-purple-500 to-purple-600",
    iconGlow: "rgba(168,85,247,0.45)",
    cardBorder: "border-purple-500/15",
    cardBorderHover: "group-hover:border-purple-500/40",
    glowBlob: "bg-purple-500/20",
    ctaText: "text-purple-600 hover:text-purple-700",
    capabilityDot: "bg-purple-500",
    capabilityIcon: "text-purple-500",
  },
  green: {
    numberText: "text-brand-green-500/15",
    underline: "bg-brand-green-500",
    iconGradient: "from-brand-green-500 to-brand-green-600",
    iconGlow: "rgba(16,185,129,0.45)",
    cardBorder: "border-brand-green-500/15",
    cardBorderHover: "group-hover:border-brand-green-500/40",
    glowBlob: "bg-brand-green-500/20",
    ctaText: "text-brand-green-600 hover:text-brand-green-700",
    capabilityDot: "bg-brand-green-500",
    capabilityIcon: "text-brand-green-500",
  },
  cyan: {
    numberText: "text-cyan-500/15",
    underline: "bg-cyan-500",
    iconGradient: "from-cyan-500 to-cyan-600",
    iconGlow: "rgba(6,182,212,0.45)",
    cardBorder: "border-cyan-500/15",
    cardBorderHover: "group-hover:border-cyan-500/40",
    glowBlob: "bg-cyan-500/20",
    ctaText: "text-cyan-600 hover:text-cyan-700",
    capabilityDot: "bg-cyan-500",
    capabilityIcon: "text-cyan-500",
  },
  orange: {
    numberText: "text-orange-500/15",
    underline: "bg-orange-500",
    iconGradient: "from-orange-500 to-orange-600",
    iconGlow: "rgba(249,115,22,0.45)",
    cardBorder: "border-orange-500/15",
    cardBorderHover: "group-hover:border-orange-500/40",
    glowBlob: "bg-orange-500/20",
    ctaText: "text-orange-600 hover:text-orange-700",
    capabilityDot: "bg-orange-500",
    capabilityIcon: "text-orange-500",
  },
};

export interface CoreService {
  id: string;
  number: string;
  accent: AccentColor;
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
  ctaLabel: string;
}

export const coreServices: CoreService[] = [
  {
    id: "annotation",
    number: "01",
    accent: "blue",
    icon: BoxSelect,
    title: "AI Data Annotation",
    description:
      "Accurate, scalable annotation services for computer vision and ML projects.",
    capabilities: [
      "Image Annotation",
      "Video Annotation",
      "Bounding Boxes",
      "Polygon Annotation",
      "Semantic Segmentation",
      "Instance Segmentation",
      "Keypoint Annotation",
      "LiDAR & Point Cloud Annotation",
      "OCR & Document Annotation",
      "Data Labeling",
    ],
    ctaLabel: "Learn More",
  },
  {
    id: "genai",
    number: "02",
    accent: "purple",
    icon: Brain,
    title: "Generative AI & LLM Services",
    description: "Build intelligent applications powered by modern AI.",
    capabilities: [
      "LLM Data Preparation",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "AI Chatbots",
      "AI Agents",
      "Knowledge Base Solutions",
      "AI Workflow Automation",
    ],
    ctaLabel: "Explore GenAI",
  },
  {
    id: "software",
    number: "03",
    accent: "green",
    icon: Code2,
    title: "Software Development",
    description: "Design and build secure, scalable digital products.",
    capabilities: [
      "Custom Software Development",
      "Enterprise Applications",
      "Web Development",
      "Mobile App Development",
      "Cloud Solutions",
      "API Development",
      "System Integration",
      "Application Modernization",
    ],
    ctaLabel: "Build with Us",
  },
  {
    id: "healthcare",
    number: "04",
    accent: "cyan",
    icon: Stethoscope,
    title: "Healthcare AI",
    description: "Technology solutions designed for healthcare and life sciences.",
    capabilities: [
      "Medical Image Annotation",
      "Clinical NLP",
      "Medical Data Processing",
      "Healthcare Analytics",
      "AI Support for Diagnostics",
      "Digital Health Solutions",
    ],
    ctaLabel: "Discover Healthcare AI",
  },
  {
    id: "language",
    number: "05",
    accent: "orange",
    icon: MessagesSquare,
    title: "Language & Content Services",
    description: "High-quality multilingual support for global businesses.",
    capabilities: [
      "Translation",
      "Transcription",
      "Audio Processing",
      "Voice Data Collection",
      "Localization",
      "PDF Accessibility",
    ],
    ctaLabel: "View Language Services",
  },
];
