import {
  Stethoscope,
  Brain,
  Cpu,
  Factory,
  Car,
  Landmark,
  Umbrella,
  ShoppingCart,
  GraduationCap,
  Building2,
  Scale,
  Radio,
  type LucideIcon,
} from "lucide-react";

export interface TranslationIndustry {
  icon: LucideIcon;
  name: string;
}

export const translationIndustries: TranslationIndustry[] = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Brain, name: "Artificial Intelligence" },
  { icon: Cpu, name: "IT" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Car, name: "Automotive" },
  { icon: Landmark, name: "Banking" },
  { icon: Umbrella, name: "Insurance" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: GraduationCap, name: "Education" },
  { icon: Building2, name: "Government" },
  { icon: Scale, name: "Legal" },
  { icon: Radio, name: "Telecommunications" },
];
