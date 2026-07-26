import {
  Code2,
  Globe,
  Smartphone,
  Building2,
  Plug,
  Cloud,
  Workflow,
  PenTool,
  ShieldCheck,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type CapabilityAccent = "blue" | "orange";

export interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: CapabilityAccent;
}

export const capabilities: Capability[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Purpose-built systems designed around your workflows, not the other way around.",
    accent: "blue",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Fast, responsive web platforms engineered for scale from the first release.",
    accent: "blue",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps that feel instant on every device.",
    accent: "orange",
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    description: "ERP, CRM, and internal platforms built for complex organizations.",
    accent: "blue",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Clean, documented connections between every tool in your stack.",
    accent: "blue",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud-native architecture across AWS, Azure, and Google Cloud.",
    accent: "orange",
  },
  {
    icon: Workflow,
    title: "DevOps",
    description: "CI/CD pipelines and infrastructure automation that ship without drama.",
    accent: "blue",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Interfaces designed for clarity first, decoration second.",
    accent: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Automated and manual testing that catches issues before your users do.",
    accent: "orange",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description: "Ongoing monitoring, patching, and support long after launch day.",
    accent: "blue",
  },
];
