import { Tag, Stethoscope, Pill, Scissors, FileText, Link2, type LucideIcon } from "lucide-react";

export interface NlpTask {
  icon: LucideIcon;
  label: string;
}

export const nlpTasks: NlpTask[] = [
  { icon: Tag, label: "Medical Entity Recognition" },
  { icon: Stethoscope, label: "Diagnosis Extraction" },
  { icon: Pill, label: "Medication Extraction" },
  { icon: Scissors, label: "Procedure Recognition" },
  { icon: FileText, label: "Clinical Notes" },
  { icon: Link2, label: "Relationship Extraction" },
];
