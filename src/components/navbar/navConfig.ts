import {
  Map,
  Radar,
  Stethoscope,
  ScanEye,
  Workflow,
  BarChart3,
  Languages,
  BadgeCheck,
  BookOpen,
  Target,
  Sparkles,
  Car,
  ShoppingCart,
  Landmark,
  Factory,
  Sprout,
  Truck,
  Mic,
  AudioLines,
  GraduationCap,
  Scale,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import healthCareImg from "@/assests/industries/healthCare.png";
import automotiveImg from "@/assests/industries/Automotive.png";
import retailImg from "@/assests/industries/Retail.png";
import bankingImg from "@/assests/industries/Banking.png";
import manufacturingImg from "@/assests/industries/Manufacturing.png";
import agricultureImg from "@/assests/industries/Agriculture.png";
import smartCitiesImg from "@/assests/industries/SmartCities.png";
import logisticsImg from "@/assests/industries/Drones.png";

export interface MegaFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export interface MegaContent {
  title: string;
  description: string;
  links: { name: string; href: string }[];
  features: MegaFeature[];
  cta: { label: string; href: string };
}

export interface NavItem {
  name: string;
  href: string;
  mega?: MegaContent;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    mega: {
      title: "About BigWigs",
      description:
        "Get to know the story, values, and credentials behind our enterprise AI work.",
      links: [
        { name: "Our Story", href: "/about#our-story" },
        { name: "Mission & Vision", href: "/about#mission-vision" },
        { name: "Our Expertise", href: "/about#expertise" },
        { name: "Certifications", href: "/about#certifications" },
      ],
      features: [
        {
          icon: BookOpen,
          title: "Our Story",
          description: "How BigWigs got started and where we're headed.",
        },
        {
          icon: Target,
          title: "Mission & Vision",
          description: "What drives us, and the standard we hold ourselves to.",
        },
        {
          icon: Sparkles,
          title: "Our Expertise",
          description: "The domains and technologies we go deep on.",
        },
        {
          icon: BadgeCheck,
          title: "Certifications",
          description: "Compliance and quality credentials we hold.",
        },
      ],
      cta: { label: "Learn more about us", href: "/about" },
    },
  },
  {
    name: "Services",
    href: "/services",
    mega: {
      title: "What we build",
      description:
        "Enterprise AI systems engineered for accuracy, security, and scale — across every domain we serve.",
      links: [
        { name: "Medical Image Annotation", href: "/service/healthcare-ai" },
        { name: "AI Data Annotation", href: "/service/ai-data-annotation" },
        { name: "Generative AI Services", href: "/service/generative-ai" },
        { name: "Translation & Localization", href: "/service/translation-localization" },
        { name: "Transcription Services", href: "/service/transcription-services" },
        { name: "Voice & Speech Data Collection", href: "/service/voice-data-collection" },
      ],
      features: [
        {
          icon: Stethoscope,
          title: "Medical AI",
          description: "Clinically-aware imaging models & workflows.",
        },
        {
          icon: ScanEye,
          title: "AI Data Annotation",
          description: "Image, video, LiDAR, and OCR annotation for computer vision.",
        },
        {
          icon: Workflow,
          title: "Generative AI Services",
          description: "LLMs, AI agents, RAG, and intelligent workflow automation.",
        },
        {
          icon: Languages,
          title: "Translation & Localization",
          description: "Multilingual content, software, and web experiences.",
        },
        {
          icon: Mic,
          title: "Transcription Services",
          description: "AI-assisted, human-reviewed audio and video transcription.",
        },
        {
          icon: AudioLines,
          title: "Voice & Speech Data Collection",
          description: "Enterprise speech datasets for voice AI and conversational AI.",
        },
      ],
      cta: { label: "Explore all services", href: "/services" },
    },
  },
  {
    name: "Industries",
    href: "/industries",
    mega: {
      title: "Industries We Serve",
      description:
        "AI data solutions engineered for the operational realities of every industry we work in.",
      links: [
        { name: "Healthcare", href: "/industries/healthcare-life-sciences" },
        { name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
        { name: "Banking & Finance", href: "/industries/bfsi-solutions" },
        { name: "Manufacturing", href: "/industries/manufacturing-industrial-solutions" },
        { name: "Education & eLearning", href: "/industries/education-elearning-solutions" },
        { name: "Government & Public Sector", href: "/industries/government-public-sector-solutions" },
        { name: "Publishing & Media", href: "/industries/publishing-media-solutions" },
      ],
      features: [
        {
          icon: Stethoscope,
          title: "Healthcare",
          description: "Medical image annotation, clinical NLP, medical AI.",
          image: healthCareImg,
        },
        {
          icon: ShoppingCart,
          title: "Retail & E-commerce",
          description: "Recommendation engine, OCR, customer analytics.",
          image: retailImg,
        },
        {
          icon: Landmark,
          title: "Banking & Finance",
          description: "Fraud detection, risk analysis, document AI.",
          image: bankingImg,
        },
        {
          icon: Sprout,
          title: "Agriculture",
          description: "Drone analytics, crop monitoring, satellite AI.",
          image: agricultureImg,
        },
        {
          icon: GraduationCap,
          title: "Education & eLearning",
          description: "LMS platforms, AI tutoring, digital publishing, accessibility.",
        },
        {
          icon: Scale,
          title: "Government & Public Sector",
          description: "Digital government platforms, smart cities, secure citizen services.",
        },
        {
          icon: BookOpen,
          title: "Publishing & Media",
          description: "XML-first publishing, AI content tagging, accessible EPUB & PDF.",
        },
      ],
      cta: { label: "Explore all industries", href: "/industries" },
    },
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
];

export const ctaItem = { name: "Contact Us", href: "/contact" };
export const demoItem = { name: "Book a Demo", href: "/demo" };
