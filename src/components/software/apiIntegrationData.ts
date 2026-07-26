import { Share2, GitMerge, CreditCard, Users2, Boxes, Fingerprint, Grid3x3, type LucideIcon } from "lucide-react";

export interface ApiNode {
  icon: LucideIcon;
  label: string;
  color: string;
  bg: string;
  angle: number;
}

export const apiNodes: ApiNode[] = [
  { icon: Share2, label: "REST", color: "text-brand-blue-500", bg: "bg-brand-blue-50", angle: 270 },
  { icon: GitMerge, label: "GraphQL", color: "text-slate-500", bg: "bg-slate-50", angle: 322 },
  { icon: CreditCard, label: "Payment Gateway", color: "text-orange-500", bg: "bg-orange-50", angle: 14 },
  { icon: Users2, label: "CRM", color: "text-brand-blue-500", bg: "bg-brand-blue-50", angle: 66 },
  { icon: Boxes, label: "ERP", color: "text-orange-500", bg: "bg-orange-50", angle: 118 },
  { icon: Fingerprint, label: "Identity", color: "text-slate-500", bg: "bg-slate-50", angle: 170 },
  { icon: Grid3x3, label: "Microservices", color: "text-brand-blue-500", bg: "bg-brand-blue-50", angle: 222 },
];
