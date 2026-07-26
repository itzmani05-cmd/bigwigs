import { Search, Mic, ShieldCheck, PackageCheck } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const transcriptionWorkflowSteps: ProcessStep[] = [
  { icon: Search, title: "File Assessment", description: "Audio quality, speaker count, and domain are reviewed before work begins." },
  { icon: Mic, title: "Transcription", description: "AI-assisted transcription drafts the full text with timestamps." },
  { icon: ShieldCheck, title: "Quality Review", description: "Human reviewers verify accuracy, formatting, and terminology." },
  { icon: PackageCheck, title: "Delivery", description: "Final transcript delivered in your required format, on schedule." },
];
