import { Lightbulb, ShieldCheck, Handshake, UsersRound, BookOpen, type LucideIcon } from "lucide-react";

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const coreValues: CoreValue[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies.",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "Precision-driven delivery with high standards.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Transparent and ethical partnerships.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: UsersRound,
    title: "Customer Success",
    description: "Long-term value through collaboration.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Growing with technology and innovation.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];
