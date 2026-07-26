import { Headset, Database, BarChart3, ShieldCheck, FileText, FlaskConical, type LucideIcon } from "lucide-react";

export interface OrchestrationNode {
  icon: LucideIcon;
  label: string;
  angle: number;
}

export const orchestrationNodes: OrchestrationNode[] = [
  { icon: Headset, label: "Customer Agent", angle: 270 },
  { icon: Database, label: "Knowledge Agent", angle: 330 },
  { icon: BarChart3, label: "Analytics Agent", angle: 30 },
  { icon: ShieldCheck, label: "Compliance Agent", angle: 90 },
  { icon: FileText, label: "Reporting Agent", angle: 150 },
  { icon: FlaskConical, label: "Research Agent", angle: 210 },
];
