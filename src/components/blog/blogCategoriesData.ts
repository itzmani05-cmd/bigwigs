import {
  BoxSelect,
  ScanEye,
  Brain,
  Stethoscope,
  MessagesSquare,
  ScanText,
  Newspaper,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export interface BlogCategory {
  icon: LucideIcon;
  name: string;
  count: number;
  gradient: string;
}

export const blogCategories: BlogCategory[] = [
  { icon: BoxSelect, name: "AI Annotation", count: 24, gradient: "from-brand-blue-500 to-brand-blue-600" },
  { icon: ScanEye, name: "Computer Vision", count: 18, gradient: "from-violet-500 to-purple-500" },
  { icon: Brain, name: "Machine Learning", count: 21, gradient: "from-brand-green-500 to-emerald-500" },
  { icon: Stethoscope, name: "Medical AI", count: 15, gradient: "from-cyan-500 to-brand-blue-500" },
  { icon: MessagesSquare, name: "NLP", count: 12, gradient: "from-rose-500 to-pink-500" },
  { icon: ScanText, name: "OCR", count: 9, gradient: "from-orange-500 to-amber-500" },
  { icon: Newspaper, name: "Digital Publishing", count: 8, gradient: "from-cyan-500 to-teal-500" },
  { icon: Globe2, name: "Industry News", count: 16, gradient: "from-orange-500 to-rose-500" },
];

export const trendingTopics = [
  "AI Annotation",
  "Machine Learning",
  "Computer Vision",
  "Medical AI",
  "NLP",
  "OCR",
  "LiDAR",
  "Industry News",
  "Generative AI",
  "Digital Publishing",
];
