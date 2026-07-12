import { ShieldCheck, Lock, FileCheck, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Certification {
  name: string;
  description: string;
  icon: LucideIcon;
  tint: "green" | "blue";
}


export const certifications: Certification[] = [
  {
    name: "ISO 27001",
    description: "Information security management certified to the international standard.",
    icon: Lock,
    tint: "green",
  },
  {
    name: "ISO 9001",
    description: "Quality management certified to the international standard.",
    icon: ShieldCheck,
    tint: "blue",
  },
  {
    name: "ISO 9001",
    description: "Information security management certified to the international standard.",
    icon: ShieldCheck,
    tint: "green",
  },
  {
    name: "ISO 27001",
    description: "Information security management certified to the international standard.",
    icon: ShieldCheck,
    tint: "green",
  },
];
