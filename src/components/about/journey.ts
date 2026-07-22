import { Rocket, Globe2, Database, Brain, Trophy, type LucideIcon } from "lucide-react";

export interface JourneyMilestone {
  icon: LucideIcon;
  year: string;
  title: string;
  color: string;
  bg: string;
  bar: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    icon: Rocket,
    year: "2018",
    title: "Company Founded",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
    bar: "bg-brand-blue-500",
  },
  {
    icon: Globe2,
    year: "2020",
    title: "First Global Client",
    color: "text-violet-500",
    bg: "bg-violet-50",
    bar: "bg-violet-500",
  },
  {
    icon: Database,
    year: "2021",
    title: "Expanded AI Data Services",
    color: "text-brand-green-600",
    bg: "bg-brand-green-50",
    bar: "bg-brand-green-600",
  },
  {
    icon: Brain,
    year: "2023",
    title: "Generative AI & Software Development",
    color: "text-orange-500",
    bg: "bg-orange-50",
    bar: "bg-orange-500",
  },
  {
    icon: Trophy,
    year: "2025",
    title: "Serving Global Enterprises",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
    bar: "bg-brand-blue-500",
  },
];
