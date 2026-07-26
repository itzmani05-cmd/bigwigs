import {
  Cpu,
  Stethoscope,
  Car,
  ShoppingCart,
  Landmark,
  Umbrella,
  Factory,
  Sprout,
  Building2,
  GraduationCap,
  Radio,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface DataIndustry {
  icon: LucideIcon;
  name: string;
}

export const dataIndustries: DataIndustry[] = [
  { icon: Cpu, name: "Artificial Intelligence" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Car, name: "Automotive" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Landmark, name: "Banking" },
  { icon: Umbrella, name: "Insurance" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Sprout, name: "Agriculture" },
  { icon: Building2, name: "Government" },
  { icon: GraduationCap, name: "Education" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Truck, name: "Logistics" },
];
