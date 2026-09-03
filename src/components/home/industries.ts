import {
  HeartPulse,
  Car,
  ShoppingCart,
  Sprout,
  Factory,
  Building2,
  Landmark,
  Drone,
  type LucideIcon,
} from "lucide-react";
import healthCareImg from "@/assests/industries/healthCare.webp";
import DronesImg from "@/assests/industries/Drones.webp";
import RetailsImg from "@/assests/industries/Retail.webp";
import SmartCitiesImg from "@/assests/industries/SmartCities.webp";
import AgricultureImg from "@/assests/industries/Agriculture.webp";
import AutomotiveImg from "@/assests/industries/Automotive.webp";
import ManufacturingImg from "@/assests/industries/Manufacturing.webp";
import BankingImg from "@/assests/industries/Banking.webp";

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
  image: string;
}

export const industries: Industry[] = [
  {
    icon: Car,
    name: "Automotive",
    description:
      "Powering autonomous driving with LiDAR annotation, sensor fusion, and ADAS datasets.",
    image: AutomotiveImg,
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description:
      "Medical image annotation, clinical NLP, disease detection, and radiology AI data solutions.",
    image: healthCareImg,
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description:
      "Image recognition, shelf monitoring, product categorization, and customer analytics.",
    image: RetailsImg,
  },
  {
    icon: Sprout,
    name: "Agriculture",
    description:
      "Precision farming using drone imagery, crop monitoring, and AI-powered yield prediction.",
    image: AgricultureImg,
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Computer vision for defect detection, quality inspection, and industrial automation.",
    image: ManufacturingImg,
  },
  {
    icon: Building2,
    name: "Smart Cities",
    description:
      "Traffic analysis, GIS annotation, infrastructure monitoring, and urban intelligence.",
    image: SmartCitiesImg,
  },
  {
    icon: Landmark,
    name: "Banking & Finance",
    description:
      "Fraud detection, OCR, document processing, and AI-driven risk assessment.",
    image: BankingImg,
  },
  {
    icon: Drone,
    name: "Robotics & Drones",
    description:
      "Vision datasets for robotics navigation, warehouse automation, and autonomous drones.",
    image: DronesImg,
  },
];
