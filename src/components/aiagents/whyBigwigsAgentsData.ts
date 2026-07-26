import { Brain, Lock, Workflow, ShieldCheck, Layers, Repeat } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const whyAgentReasons: IconGridItem[] = [
  { icon: Brain, title: "Enterprise AI Expertise", description: "Teams who design agent behavior, not just wire up an API." },
  { icon: Lock, title: "Secure Integrations", description: "CRM, ERP, and HRMS connected under enterprise access control." },
  { icon: Workflow, title: "Custom AI Workflows", description: "Agents built around your process, not a generic template." },
  { icon: ShieldCheck, title: "Data Privacy", description: "Your enterprise data stays isolated and under your control." },
  { icon: Layers, title: "Scalable Deployment", description: "From a single agent to a coordinated multi-agent workforce." },
  { icon: Repeat, title: "Continuous Optimization", description: "Agents monitored and retrained as your business evolves." },
];
