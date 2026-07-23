import { Layers, ScanEye, Stethoscope, MessagesSquare, Sparkles, Newspaper, type LucideIcon } from "lucide-react";

export interface BlogSeries {
  icon: LucideIcon;
  title: string;
  episodes: number;
  progress: number;
  gradient: string;
}

export const blogSeries: BlogSeries[] = [
  { icon: Layers, title: "AI Fundamentals", episodes: 8, progress: 75, gradient: "from-brand-blue-500 to-brand-blue-600" },
  { icon: ScanEye, title: "Computer Vision", episodes: 6, progress: 50, gradient: "from-violet-500 to-purple-500" },
  { icon: Stethoscope, title: "Medical AI", episodes: 5, progress: 20, gradient: "from-cyan-500 to-brand-blue-500" },
  { icon: MessagesSquare, title: "Enterprise NLP", episodes: 7, progress: 40, gradient: "from-rose-500 to-pink-500" },
  { icon: Sparkles, title: "Generative AI", episodes: 9, progress: 10, gradient: "from-orange-500 to-amber-500" },
  { icon: Newspaper, title: "Digital Publishing", episodes: 4, progress: 0, gradient: "from-brand-green-500 to-emerald-500" },
];
