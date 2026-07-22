import {
  ShieldPlus,
  Clock,
  Umbrella,
  BookOpen,
  TrendingUp,
  PartyPopper,
  Laptop,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export const benefits: Benefit[] = [
  {
    icon: ShieldPlus,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family.",
    gradient: "from-brand-blue-500 to-cyan-400",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work the way you work best with flexible schedules.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Umbrella,
    title: "Paid Leave",
    description: "Generous paid time off to rest, recharge, and travel.",
    gradient: "from-brand-green-500 to-emerald-400",
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    description: "Annual budget for courses, books, and certifications.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Performance Bonus",
    description: "Recognizing your contributions and impact.",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    icon: PartyPopper,
    title: "Team Events",
    description: "Fun team outings, celebrations, and company events.",
    gradient: "from-violet-500 to-fuchsia-400",
  },
  {
    icon: Laptop,
    title: "Modern Workspace",
    description: "State-of-the-art offices and best-in-class equipment.",
    gradient: "from-brand-blue-500 to-indigo-400",
  },
  {
    icon: BadgeCheck,
    title: "Certification Support",
    description: "We support your growth with global certifications.",
    gradient: "from-brand-green-500 to-teal-400",
  },
];
