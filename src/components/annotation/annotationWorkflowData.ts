import { Search, ClipboardList, BookOpen, FlaskConical, Rocket, ShieldCheck, PackageCheck } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const annotationWorkflowSteps: ProcessStep[] = [
  { icon: Search, title: "Requirement Analysis" },
  { icon: ClipboardList, title: "Dataset Assessment" },
  { icon: BookOpen, title: "Annotation Guidelines" },
  { icon: FlaskConical, title: "Pilot Annotation" },
  { icon: Rocket, title: "Production" },
  { icon: ShieldCheck, title: "Quality Assurance" },
  { icon: PackageCheck, title: "Delivery" },
];
