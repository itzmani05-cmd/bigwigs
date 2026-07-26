import { ShieldCheck, Lock, KeyRound, ScrollText, EyeOff, BadgeCheck, type LucideIcon } from "lucide-react";

export interface ComplianceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const complianceItems: ComplianceItem[] = [
  {
    icon: ShieldCheck,
    title: "Secure Data Handling",
    description: "Controlled ingestion and storage for every sensitive dataset.",
  },
  {
    icon: Lock,
    title: "Encryption",
    description: "Data encrypted in transit and at rest, by default.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access",
    description: "Access scoped to exactly what each role needs to see.",
  },
  {
    icon: ScrollText,
    title: "Audit Logs",
    description: "A complete, reviewable trail of who accessed what, and when.",
  },
  {
    icon: EyeOff,
    title: "Privacy Protection",
    description: "De-identification and PHI handling built into every workflow.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance Ready",
    description: "Processes designed to hold up under healthcare-grade scrutiny.",
  },
];
