import {
  Stethoscope,
  ShoppingCart,
  Factory,
  GraduationCap,
  Landmark,
  Truck,
  Building2,
  Zap,
  Radio,
  type LucideIcon,
} from "lucide-react";

export interface SoftwareIndustry {
  icon: LucideIcon;
  name: string;
}

export const softwareIndustries: SoftwareIndustry[] = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: GraduationCap, name: "Education" },
  { icon: Landmark, name: "Finance" },
  { icon: Truck, name: "Logistics" },
  { icon: Building2, name: "Government" },
  { icon: Zap, name: "Energy" },
  { icon: Radio, name: "Telecom" },
];
