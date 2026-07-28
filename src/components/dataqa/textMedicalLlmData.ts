
import { FileText, Stethoscope, Bot, type LucideIcon } from "lucide-react";

export interface ValidationPillar {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const textMedicalLlmPillars: ValidationPillar[] = [
  {
    icon: FileText,
    title: "Text Validation",
    items: ["Grammar", "Entity Accuracy", "Classification", "Prompt Alignment", "Translation Quality"],
  },
  {
    icon: Stethoscope,
    title: "Medical Validation",
    items: ["Clinical Labels", "Medical Coding", "Terminology", "Radiology", "Imaging Review"],
  },
  {
    icon: Bot,
    title: "LLM Evaluation",
    items: ["Prompt Quality", "Response Quality", "Hallucination Detection", "Bias Detection", "Safety Review", "Alignment"],
  },
];
