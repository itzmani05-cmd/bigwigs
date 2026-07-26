import {
  Cpu,
  Radio,
  Car,
  Stethoscope,
  Landmark,
  Umbrella,
  ShoppingCart,
  GraduationCap,
  Building2,
  Newspaper,
  Smartphone,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export interface VoiceIndustry {
  icon: LucideIcon;
  name: string;
}

export const voiceIndustries: VoiceIndustry[] = [
  { icon: Cpu, name: "Artificial Intelligence" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Car, name: "Automotive" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Landmark, name: "Banking" },
  { icon: Umbrella, name: "Insurance" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: GraduationCap, name: "Education" },
  { icon: Building2, name: "Government" },
  { icon: Newspaper, name: "Media" },
  { icon: Smartphone, name: "Consumer Electronics" },
  { icon: Wifi, name: "Smart Home Technology" },
];
