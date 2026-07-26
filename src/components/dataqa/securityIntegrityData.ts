import { Lock, History, GitBranch, KeyRound, Save, EyeOff, Workflow } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const securityIntegrityItems: IconGridItem[] = [
  { icon: Lock, title: "Encryption" },
  { icon: History, title: "Audit Logs" },
  { icon: GitBranch, title: "Version Control" },
  { icon: KeyRound, title: "Secure Access" },
  { icon: Save, title: "Backup" },
  { icon: EyeOff, title: "Confidentiality" },
  { icon: Workflow, title: "Controlled Workflows" },
];
