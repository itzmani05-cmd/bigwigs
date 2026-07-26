import { Search, UserPlus, Mic, ClipboardCheck, PackageCheck } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const voiceWorkflowSteps: ProcessStep[] = [
  { icon: Search, title: "Requirement Analysis", description: "Target languages, accents, and use case defined up front." },
  { icon: UserPlus, title: "Participant Recruitment", description: "Speakers sourced to match your demographic and regional spec." },
  { icon: Mic, title: "Speech Data Collection", description: "Recordings captured across devices and real-world environments." },
  { icon: ClipboardCheck, title: "Annotation & Validation", description: "Every file annotated, reviewed, and quality-checked." },
  { icon: PackageCheck, title: "Delivery", description: "Final dataset packaged and delivered in your required format." },
];
