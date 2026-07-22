import { GraduationCap, Globe2, Lightbulb, Users, TrendingUp, Gift, type LucideIcon } from "lucide-react";

export interface WhyJoinFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const whyJoinFeatures: WhyJoinFeature[] = [
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Continuous learning opportunities to help you grow every day.",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
  },
  {
    icon: Globe2,
    title: "Global Projects",
    description: "Work with international clients and solve real-world challenges.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Access to the latest AI technologies and modern tools.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Flexible Culture",
    description: "Enjoy a healthy work-life balance and flexible environment.",
    color: "text-brand-green-600",
    bg: "bg-brand-green-50",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description: "Clear growth paths, mentorship, and promotion support.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Gift,
    title: "Competitive Benefits",
    description: "Rewards and benefits that support your future and wellbeing.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];
