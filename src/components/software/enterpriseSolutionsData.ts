import { Boxes, Users2, Truck, Wallet, UserCog, FileText, type LucideIcon } from "lucide-react";

export interface EnterpriseModule {
  icon: LucideIcon;
  label: string;
}

export const enterpriseModules: EnterpriseModule[] = [
  { icon: Boxes, label: "ERP" },
  { icon: Users2, label: "CRM" },
  { icon: Truck, label: "Supply Chain" },
  { icon: Wallet, label: "Finance" },
  { icon: UserCog, label: "HRMS" },
  { icon: FileText, label: "Document Management" },
];
