import { Award, Users, ShieldCheck, FileCheck2, Globe, type LucideIcon } from "lucide-react";

export interface WhyChooseFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    icon: Award,
    title: "Quality-Driven Delivery",
    description:
      "Every project follows structured quality assurance processes with multi-level reviews to ensure consistency and accuracy.",
  },
  {
    icon: Users,
    title: "Scalable Teams",
    description:
      "Whether you need a small specialist team or a large-scale delivery model, we can scale resources to meet your business requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Operations",
    description:
      "We prioritize confidentiality through secure infrastructure, controlled access, and client-focused data protection practices.",
  },
  {
    icon: FileCheck2,
    title: "Flexible Engagement Models",
    description:
      "Choose the engagement model that fits your project—dedicated teams, fixed-price projects, or time-and-materials.",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description:
      "Our teams work with clients across multiple time zones, ensuring responsive communication and efficient project delivery.",
  },
];
