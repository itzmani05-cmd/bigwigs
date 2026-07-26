import { Award, Aperture, MessageSquareText, Lock, TrendingUp, HeartHandshake, type LucideIcon } from "lucide-react";

export interface WhyHealthcareReason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyHealthcareReasons: WhyHealthcareReason[] = [
  {
    icon: Award,
    title: "Healthcare Experts",
    description: "Teams trained on clinical taxonomy, not generic labeling guidelines.",
  },
  {
    icon: Aperture,
    title: "Medical Imaging Expertise",
    description: "Years of radiology-grade annotation across modalities.",
  },
  {
    icon: MessageSquareText,
    title: "Clinical NLP",
    description: "Structured extraction from real clinical documentation.",
  },
  {
    icon: Lock,
    title: "Secure Data",
    description: "Handling built around healthcare-grade data sensitivity.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Delivery",
    description: "From a pilot cohort to millions of records, same quality bar.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description: "We stay engaged through validation, deployment, and beyond.",
  },
];
