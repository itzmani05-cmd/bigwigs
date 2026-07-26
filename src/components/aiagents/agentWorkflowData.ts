import { MessageCircleQuestion, Bot, Search, Target, CheckCircle2, Server, Database, Send, UserPlus, Receipt, FileText, ClipboardX, Mail, Ticket, ShoppingCart, ShieldCheck } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const agentWorkflowFlow: ProcessStep[] = [
  { icon: MessageCircleQuestion, title: "Customer Request" },
  { icon: Bot, title: "AI Agent" },
  { icon: Search, title: "Knowledge Search" },
  { icon: Target, title: "Decision" },
  { icon: CheckCircle2, title: "Approval" },
  { icon: Server, title: "ERP" },
  { icon: Database, title: "CRM" },
  { icon: Send, title: "Notification" },
];

export const agentWorkflowFeatures: IconGridItem[] = [
  { icon: UserPlus, title: "Customer Onboarding" },
  { icon: Receipt, title: "Invoice Approval" },
  { icon: FileText, title: "Contract Review" },
  { icon: ClipboardX, title: "Claims Processing" },
  { icon: Mail, title: "Email Triage" },
  { icon: Ticket, title: "Ticket Routing" },
  { icon: ShoppingCart, title: "Purchase Requests" },
  { icon: ShieldCheck, title: "Compliance Checks" },
];
