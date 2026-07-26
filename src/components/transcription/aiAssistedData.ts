import { AudioLines, UserCheck, BookOpen, Timer, Layers } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const aiAssistedSteps: ProcessStep[] = [
  {
    icon: AudioLines,
    title: "Speech Recognition",
    description: "AI engines transcribe audio in real time with industry-leading accuracy.",
  },
  {
    icon: UserCheck,
    title: "Human Validation",
    description: "Expert transcriptionists review and correct every AI-generated draft.",
  },
  {
    icon: BookOpen,
    title: "Terminology Consistency",
    description: "Domain glossaries keep names, jargon, and acronyms consistent throughout.",
  },
  {
    icon: Timer,
    title: "Fast Turnaround",
    description: "Parallelized review pipelines deliver without compromising accuracy.",
  },
  {
    icon: Layers,
    title: "Enterprise Scale",
    description: "From single files to millions of minutes, the same pipeline scales with you.",
  },
];
