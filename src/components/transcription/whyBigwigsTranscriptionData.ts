import { UserCheck, Bot, Lock, Zap, Award, Layers } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const whyTranscriptionReasons: IconGridItem[] = [
  {
    icon: UserCheck,
    title: "Expert Transcriptionists",
    description: "Trained professionals across medical, legal, and business domains.",
  },
  {
    icon: Bot,
    title: "AI + Human Review",
    description: "Speech recognition drafts, humans verify — accuracy without the wait.",
  },
  {
    icon: Lock,
    title: "Strict Confidentiality",
    description: "NDAs, access controls, and secure handling for every file we touch.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Standard, rush, and same-day turnaround options for every project.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Domain-specific glossaries and formatting standards, built in.",
  },
  {
    icon: Layers,
    title: "Enterprise Scale",
    description: "From a single interview to millions of minutes a year.",
  },
];
