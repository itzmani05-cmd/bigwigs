import { Users, Lightbulb, Heart, MessageCircle, type LucideIcon } from "lucide-react";

export interface LifeFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const lifeFeatures: LifeFeature[] = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "We work together, support each other, and win as a team.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We encourage curiosity and embrace new ideas every day.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Heart,
    title: "Employee Wellness",
    description: "We care about your health and provide wellness programs.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    description: "Your voice matters and we build with transparency and trust.",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
  },
];
