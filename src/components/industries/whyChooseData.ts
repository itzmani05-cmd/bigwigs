import { ShieldCheck, Globe2, Users, BadgeCheck, TrendingUp, Brain, type LucideIcon } from "lucide-react";

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "SOC 2-aligned processes and strict data governance for regulated industries.",
    gradient: "from-brand-blue-500 to-cyan-400",
  },
  {
    icon: Globe2,
    title: "Global Delivery",
    description: "24/7 delivery across time zones with distributed operations teams.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Domain specialists embedded with your product and engineering teams.",
    gradient: "from-brand-green-500 to-emerald-400",
  },
  {
    icon: BadgeCheck,
    title: "99.5% Accuracy",
    description: "Multi-layer QA and audit workflows for production-grade AI data.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Scalable Operations",
    description: "Elastic capacity that scales from pilot projects to millions of tasks.",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    icon: Brain,
    title: "AI Expertise",
    description: "Deep experience across annotation, GenAI, and applied machine learning.",
    gradient: "from-brand-blue-500 to-indigo-400",
  },
];
