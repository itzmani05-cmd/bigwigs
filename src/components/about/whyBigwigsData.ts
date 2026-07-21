import { Award, Users, ShieldCheck, Workflow, Globe, type LucideIcon } from "lucide-react";

export interface WhyBigwigsFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyBigwigsFeatures: WhyBigwigsFeature[] = [
  {
    icon: Award,
    title: "Quality-Driven Delivery",
    description: "Multi-level quality assurance ensures accuracy, consistency, and reliability.",
  },
  {
    icon: Users,
    title: "Scalable Teams",
    description: "Scale resources up or down based on your project needs seamlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Operations",
    description: "Enterprise-grade security with strict compliance and data protection.",
  },
  {
    icon: Workflow,
    title: "Flexible Engagement Models",
    description: "Choose the model that fits: dedicated team, fixed price, or T&M.",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "Working across time zones to deliver results faster and smarter.",
  },
];
