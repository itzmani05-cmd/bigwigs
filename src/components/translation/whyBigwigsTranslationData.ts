import { Languages, UserCheck, Award, Sparkles, Lock, Users2, type LucideIcon } from "lucide-react";

export interface WhyTranslationReason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyTranslationReasons: WhyTranslationReason[] = [
  {
    icon: Languages,
    title: "Professional Linguists",
    description: "Subject-matter translators, not generalist freelancers.",
  },
  {
    icon: UserCheck,
    title: "Native Reviewers",
    description: "Every translation reviewed by a native speaker before delivery.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Linguists matched to your domain — legal, medical, technical.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Workflows",
    description: "Machine translation for speed, human review for accuracy.",
  },
  {
    icon: Lock,
    title: "Secure Data Handling",
    description: "Confidential documents handled under strict access controls.",
  },
  {
    icon: Users2,
    title: "Scalable Teams",
    description: "From a single document to a hundred-language rollout.",
  },
];
