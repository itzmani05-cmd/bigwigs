import {
  Stethoscope,
  Landmark,
  Umbrella,
  ShoppingCart,
  Factory,
  Radio,
  Building2,
  GraduationCap,
  Scale,
  Truck,
  Users2,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface GenaiIndustry {
  icon: LucideIcon;
  name: string;
}

export const genaiIndustries: GenaiIndustry[] = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Landmark, name: "Finance" },
  { icon: Umbrella, name: "Insurance" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Building2, name: "Government" },
  { icon: GraduationCap, name: "Education" },
  { icon: Scale, name: "Legal" },
  { icon: Truck, name: "Logistics" },
  { icon: Users2, name: "Human Resources" },
  { icon: Cpu, name: "Technology" },
];
