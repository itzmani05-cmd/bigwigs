import { FileSearch, Search, Database, ClipboardList, FileText, Compass } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const enterpriseSourceChips: string[] = [
  "SharePoint",
  "Google Drive",
  "Microsoft 365",
  "Confluence",
  "Notion",
  "Internal Database",
  "CRM",
  "ERP",
  "Knowledge Base",
];

export const agentRagFeatures: IconGridItem[] = [
  { icon: FileSearch, title: "Document Search" },
  { icon: Search, title: "Enterprise Search" },
  { icon: Database, title: "Knowledge Management" },
  { icon: ClipboardList, title: "Policy Intelligence" },
  { icon: FileText, title: "Contract Intelligence" },
  { icon: Compass, title: "Research Portal" },
];

export const agentRagBenefits: string[] = [
  "Reduced Hallucinations",
  "Real-Time Answers",
  "Enterprise Security",
  "Faster Knowledge Access",
];
