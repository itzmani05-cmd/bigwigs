import {
  Stethoscope,
  Car,
  ShoppingCart,
  Landmark,
  Factory,
  Sprout,
  Building2,
  Truck,
  type LucideIcon,
} from "lucide-react";
import healthCareImg from "@/assests/industries/healthCare.png";
import automotiveImg from "@/assests/industries/Automotive.png";
import retailImg from "@/assests/industries/Retail.png";
import bankingImg from "@/assests/industries/Banking.png";
import manufacturingImg from "@/assests/industries/Manufacturing.png";
import agricultureImg from "@/assests/industries/Agriculture.png";
import smartCitiesImg from "@/assests/industries/SmartCities.png";
import logisticsImg from "@/assests/industries/Drones.png";

export interface IndustryCardItem {
  icon: LucideIcon;
  name: string;
  description: string;
  image: string;
  iconGradient: string;
}

export const industriesGrid: IndustryCardItem[] = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Medical image annotation, clinical NLP, medical AI.",
    image: healthCareImg,
    iconGradient: "from-brand-blue-500 to-brand-blue-600",
  },
  {
    icon: Car,
    name: "Automotive",
    description: "ADAS, autonomous driving, LiDAR annotation.",
    image: automotiveImg,
    iconGradient: "from-brand-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description: "Recommendation engine, OCR, customer analytics.",
    image: retailImg,
    iconGradient: "from-cyan-500 to-brand-blue-500",
  },
  {
    icon: Landmark,
    name: "Banking & Finance",
    description: "Fraud detection, risk analysis, document AI.",
    image: bankingImg,
    iconGradient: "from-brand-blue-500 to-indigo-500",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Robotics, quality inspection, industrial AI.",
    image: manufacturingImg,
    iconGradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Sprout,
    name: "Agriculture",
    description: "Drone analytics, crop monitoring, satellite AI.",
    image: agricultureImg,
    iconGradient: "from-brand-green-500 to-emerald-500",
  },
  {
    icon: Building2,
    name: "Smart Cities",
    description: "GIS, traffic intelligence, urban analytics.",
    image: smartCitiesImg,
    iconGradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    description: "Warehouse automation, route optimization, supply chain AI.",
    image: logisticsImg,
    iconGradient: "from-orange-500 to-rose-500",
  },
];
