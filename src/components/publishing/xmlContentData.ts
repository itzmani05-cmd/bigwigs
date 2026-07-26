import { FileText, FlaskConical, Stethoscope, GraduationCap, Building2 } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const xmlStandards: string[] = ["DITA", "DocBook", "JATS", "NLM", "TEI"];

export const xmlContentFeatures: IconGridItem[] = [
  { icon: FileText, title: "Technical Documentation" },
  { icon: FlaskConical, title: "Scientific Journals" },
  { icon: Stethoscope, title: "Medical Publications" },
  { icon: GraduationCap, title: "Educational Content" },
  { icon: Building2, title: "Government Documents" },
];
