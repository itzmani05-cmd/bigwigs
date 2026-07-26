import {
  ScanLine,
  MessageSquareText,
  Tags,
  Stethoscope,
  LayoutDashboard,
  MessagesSquare,
  ScanText,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface HealthcareService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const healthcareServices: HealthcareService[] = [
  {
    icon: ScanLine,
    title: "Medical Image Annotation",
    description: "Radiology-grade labeling for MRI, CT, X-ray, and retinal scans.",
  },
  {
    icon: MessageSquareText,
    title: "Clinical NLP",
    description: "Structured insight extracted from unstructured clinical notes.",
  },
  {
    icon: Tags,
    title: "Medical Data Annotation",
    description: "Curated, compliant datasets for training clinical AI models.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic AI",
    description: "Decision-support models built alongside clinical experts.",
  },
  {
    icon: LayoutDashboard,
    title: "Healthcare Software",
    description: "EHR, patient portals, and hospital systems that clinicians trust.",
  },
  {
    icon: MessagesSquare,
    title: "Healthcare Chatbots",
    description: "Patient-facing assistants for triage, scheduling, and follow-up.",
  },
  {
    icon: ScanText,
    title: "Medical OCR",
    description: "Digitizing prescriptions, lab reports, and handwritten charts.",
  },
  {
    icon: BarChart3,
    title: "Healthcare Analytics",
    description: "Operational and clinical dashboards built for real decisions.",
  },
];
