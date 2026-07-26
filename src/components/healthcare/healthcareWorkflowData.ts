import { Search, Stethoscope, FileText, FlaskConical, Rocket, ShieldCheck, CheckCircle2, LifeBuoy, type LucideIcon } from "lucide-react";

export interface WorkflowStep {
  icon: LucideIcon;
  title: string;
}

export const workflowSteps: WorkflowStep[] = [
  { icon: Search, title: "Requirement Analysis" },
  { icon: Stethoscope, title: "Clinical Assessment" },
  { icon: FileText, title: "Annotation Guidelines" },
  { icon: FlaskConical, title: "Pilot" },
  { icon: Rocket, title: "Production" },
  { icon: ShieldCheck, title: "Quality Assurance" },
  { icon: CheckCircle2, title: "Validation" },
  { icon: LifeBuoy, title: "Support" },
];
