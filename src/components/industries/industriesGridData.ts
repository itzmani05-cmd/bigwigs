import {
  Stethoscope,
  Car,
  ShoppingCart,
  Landmark,
  Factory,
  Sprout,
  Building2,
  Truck,
  GraduationCap,
  Landmark as GovernmentIcon,
  BookOpen as PublishingIcon,
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
import educationImg from "@/assests/industries/Education.png";
import governmentImg from "@/assests/industries/Government.png";
import publishingImg from "@/assests/industries/Publishing.png";

export interface IndustryCardItem {
  icon: LucideIcon;
  name: string;
  description: string;
  /** Omit to render an icon-only gradient card instead of a photo. */
  image?: string;
  iconGradient: string;
  href?: string;
}

export const industriesGrid: IndustryCardItem[] = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Medical image annotation, clinical NLP, medical AI.",
    image: healthCareImg,
    iconGradient: "from-brand-blue-500 to-brand-blue-600",
    href: "/industries/healthcare-life-sciences",
  },
  {
    icon: Car,
    name: "Automotive",
    description: "ADAS, autonomous driving, LiDAR annotation.",
    image: automotiveImg,
    iconGradient: "from-brand-blue-500 to-cyan-500",
    href: "/industries/automotive-mobility",
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description: "Recommendation engine, OCR, customer analytics.",
    image: retailImg,
    iconGradient: "from-cyan-500 to-brand-blue-500",
    href: "/industries/retail-ecommerce",
  },
  {
    icon: Landmark,
    name: "Banking & Finance",
    description: "Fraud detection, risk analysis, document AI.",
    image: bankingImg,
    iconGradient: "from-brand-blue-500 to-indigo-500",
    href: "/industries/bfsi-solutions",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Robotics, quality inspection, industrial AI.",
    image: manufacturingImg,
    iconGradient: "from-orange-500 to-amber-500",
    href: "/industries/manufacturing-industrial-solutions",
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
  {
    icon: GraduationCap,
    name: "Education & eLearning",
    description: "LMS platforms, AI tutoring, digital publishing, accessibility.",
    image: educationImg,
    iconGradient: "from-violet-500 to-fuchsia-500",
    href: "/industries/education-elearning-solutions",
  },
  {
    icon: GovernmentIcon,
    name: "Government & Public Sector",
    description: "Digital government platforms, smart cities, secure citizen services.",
    image: governmentImg,
    iconGradient: "from-brand-blue-500 to-indigo-500",
    href: "/industries/government-public-sector-solutions",
  },
  {
    icon: PublishingIcon,
    name: "Publishing & Media",
    description: "XML-first publishing, AI content tagging, accessible EPUB & PDF.",
    image: publishingImg,
    iconGradient: "from-cyan-500 to-brand-blue-500",
    href: "/industries/publishing-media-solutions",
  },
];
