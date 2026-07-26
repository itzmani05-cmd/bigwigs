import {
  Cpu,
  Stethoscope,
  Car,
  Landmark,
  Umbrella,
  ShoppingCart,
  Factory,
  Building2,
  GraduationCap,
  Radio,
  Newspaper,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface QAIndustry {
  icon: LucideIcon;
  name: string;
}

export const qaIndustries: QAIndustry[] = [
  { icon: Cpu, name: "Artificial Intelligence" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Car, name: "Automotive" },
  { icon: Landmark, name: "Finance" },
  { icon: Umbrella, name: "Insurance" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Building2, name: "Government" },
  { icon: GraduationCap, name: "Education" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Newspaper, name: "Media" },
  { icon: Truck, name: "Logistics" },
];
