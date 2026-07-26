import {
  Image,
  Video,
  Mic,
  FileText,
  FileStack,
  Languages,
  FlaskConical,
  Wand2,
  UserPlus,
} from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const dataServices: IconGridItem[] = [
  {
    icon: Image,
    title: "Image Data Collection",
    description: "Diverse, real-world images captured for computer vision models.",
  },
  {
    icon: Video,
    title: "Video Data Collection",
    description: "Footage from vehicles, warehouses, and clinics for motion-aware AI.",
  },
  {
    icon: Mic,
    title: "Audio Data Collection",
    description: "Speech and environmental audio recorded for speech AI systems.",
  },
  {
    icon: FileText,
    title: "Text Data Collection",
    description: "Conversational and domain-specific text for NLP and LLM training.",
  },
  {
    icon: FileStack,
    title: "Document Collection",
    description: "Invoices, contracts, and records sourced and digitized at scale.",
  },
  {
    icon: Languages,
    title: "Multilingual Dataset Creation",
    description: "Parallel corpora and localized datasets across 50+ languages.",
  },
  {
    icon: FlaskConical,
    title: "Synthetic Data",
    description: "Simulated environments and rare events generated for edge cases.",
  },
  {
    icon: Wand2,
    title: "Data Preparation",
    description: "Cleaning, deduplication, balancing, and enrichment before delivery.",
  },
  {
    icon: UserPlus,
    title: "Participant Recruitment",
    description: "Global participants sourced to match your demographic spec.",
  },
];
