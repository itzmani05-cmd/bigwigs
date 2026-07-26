import { Search, Languages, Globe2, ShieldCheck, Send, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Content Analysis",
    description: "Scope, terminology, and target markets defined upfront.",
  },
  {
    icon: Languages,
    title: "Professional Translation",
    description: "Native linguists translate with full context, not fragments.",
  },
  {
    icon: Globe2,
    title: "Localization",
    description: "Formats, tone, and layout adapted per region.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Independent review against your terminology and style guide.",
  },
  {
    icon: Send,
    title: "Delivery",
    description: "Final content delivered in your format, on your timeline.",
  },
];
