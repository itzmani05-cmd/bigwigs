import {
  Stethoscope,
  Landmark,
  Umbrella,
  ShoppingCart,
  Factory,
  Truck,
  Radio,
  Building2,
  GraduationCap,
  Scale,
  Users2,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface AgentIndustry {
  icon: LucideIcon;
  name: string;
}

export const agentIndustries: AgentIndustry[] = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Landmark, name: "Banking" },
  { icon: Umbrella, name: "Insurance" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Truck, name: "Logistics" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Building2, name: "Government" },
  { icon: GraduationCap, name: "Education" },
  { icon: Scale, name: "Legal" },
  { icon: Users2, name: "Human Resources" },
  { icon: Cpu, name: "Information Technology" },
];
