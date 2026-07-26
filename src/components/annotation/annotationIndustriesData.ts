import {
  Cpu,
  Car,
  Stethoscope,
  ShoppingCart,
  Factory,
  Sprout,
  Bot,
  Satellite,
  Landmark,
  Umbrella,
  Building2,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export interface AnnotationIndustry {
  icon: LucideIcon;
  name: string;
}

export const annotationIndustries: AnnotationIndustry[] = [
  { icon: Cpu, name: "Artificial Intelligence" },
  { icon: Car, name: "Autonomous Driving" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Sprout, name: "Agriculture" },
  { icon: Bot, name: "Robotics" },
  { icon: Satellite, name: "GIS & Remote Sensing" },
  { icon: Landmark, name: "Banking" },
  { icon: Umbrella, name: "Insurance" },
  { icon: Building2, name: "Government" },
  { icon: MapPin, name: "Smart Cities" },
];
