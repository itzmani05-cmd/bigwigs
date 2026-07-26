import { Search, Users2, Award, ClipboardCheck } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const qaWorkflowSteps: ProcessStep[] = [
  { icon: Search, title: "Level 1 · Initial Review", description: "Every annotation checked against the project guideline." },
  { icon: Users2, title: "Level 2 · Peer Review", description: "A second reviewer independently verifies the batch." },
  { icon: Award, title: "Level 3 · Senior QA Review", description: "Senior reviewers resolve disputes and edge cases." },
  { icon: ClipboardCheck, title: "Level 4 · Final Audit", description: "A final sample audit confirms delivery-ready quality." },
];
