import {
  Map,
  Radar,
  Stethoscope,
  ScanEye,
  Workflow,
  BarChart3,
  Users,
  Newspaper,
  CalendarDays,
  Building2,
  BadgeCheck,
  Car,
  ShoppingCart,
  Landmark,
  Factory,
  Sprout,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ourTeamImage from "@/assests/about/ourteams.jpg";
import blogImage from "@/assests/about/blog.jpg";
import eventsImage from "@/assests/about/events.jpg";
import locationImage from "@/assests/about/location.jpg";
import certificationImage from "@/assests/about/certification.jpg";
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
  { name: "Home", href: "/Home" },
  {
    name: "About",
    href: "#about",
    mega: {
      title: "About BigWigs",
      description:
        "Get to know the team, culture, and credentials behind our enterprise AI work.",
      links: [
        { name: "Our Team", href: "/team" },
        { name: "Blogs", href: "/blog" },
        { name: "Events", href: "/events" },
        { name: "Locations", href: "/locations" },
        { name: "Certifications", href: "/certifications" },
      ],
      features: [
        {
          icon: Users,
          title: "Our Team",
          description: "Meet the engineers and researchers behind BigWigs.",
          image: ourTeamImage,
        },
        {
          icon: Newspaper,
          title: "Blogs",
          description: "Insights and updates from our engineering team.",
          image: blogImage,
        },
        {
          icon: CalendarDays,
          title: "Events",
          description: "Webinars, meetups, and conferences we host or attend.",
          image: eventsImage,
        },
        {
          icon: Building2,
          title: "Locations",
          description: "Where we operate and deliver enterprise AI.",
          image: locationImage,
        },
        {
          icon: BadgeCheck,
          title: "Certifications",
          description: "Compliance and quality credentials we hold.",
          image: certificationImage,
        },
      ],
      cta: { label: "Learn more about us", href: "#about" },
    },
  },
  {
    name: "Services",
    href: "#services",
    mega: {
      title: "What we build",
      description:
        "Enterprise AI systems engineered for accuracy, security, and scale — across six core domains.",
      links: [
        { name: "GIS & Geospatial Mapping", href: "#services" },
        { name: "LiDAR (2D & 3D)", href: "#services" },
        { name: "Medical Image Annotation", href: "#services" },
        { name: "Computer Vision", href: "#services" },
        { name: "Enterprise Automation", href: "#services" },
        { name: "Data Analytics", href: "#services" },
      ],
      features: [
        {
          icon: Map,
          title: "GIS & Geospatial",
          description: "Mapped, actionable geospatial intelligence.",
        },
        {
          icon: Radar,
          title: "LiDAR Processing",
          description: "High-precision 2D/3D point-cloud pipelines.",
        },
        {
          icon: Stethoscope,
          title: "Medical AI",
          description: "Clinically-aware imaging models & workflows.",
        },
        {
          icon: ScanEye,
          title: "Computer Vision",
          description: "Production-grade detection & segmentation.",
        },
        {
          icon: Workflow,
          title: "Automation",
          description: "Intelligent workflows at enterprise scale.",
        },
        {
          icon: BarChart3,
          title: "Data Analytics",
          description: "Dashboards that turn data into decisions.",
        },
      ],
      cta: { label: "Explore all services", href: "#services" },
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
        { name: "Healthcare", href: "/industries#industries-grid" },
        { name: "Automotive", href: "/industries#industries-grid" },
        { name: "Retail & E-commerce", href: "/industries#industries-grid" },
        { name: "Banking & Finance", href: "/industries#industries-grid" },
        { name: "Manufacturing", href: "/industries#industries-grid" },
        { name: "Agriculture", href: "/industries#industries-grid" },
        { name: "Smart Cities", href: "/industries#industries-grid" },
        { name: "Logistics & Supply Chain", href: "/industries#industries-grid" },
      ],
      features: [
        {
          icon: Stethoscope,
          title: "Healthcare",
          description: "Medical image annotation, clinical NLP, medical AI.",
          image: healthCareImg,
        },
        {
          icon: Car,
          title: "Automotive",
          description: "ADAS, autonomous driving, LiDAR annotation.",
          image: automotiveImg,
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
          icon: Factory,
          title: "Manufacturing",
          description: "Robotics, quality inspection, industrial AI.",
          image: manufacturingImg,
        },
        {
          icon: Sprout,
          title: "Agriculture",
          description: "Drone analytics, crop monitoring, satellite AI.",
          image: agricultureImg,
        },
        {
          icon: Building2,
          title: "Smart Cities",
          description: "GIS, traffic intelligence, urban analytics.",
          image: smartCitiesImg,
        },
        {
          icon: Truck,
          title: "Logistics & Supply Chain",
          description: "Warehouse automation, route optimization, supply chain AI.",
          image: logisticsImg,
        },
      ],
      cta: { label: "Explore all industries", href: "/industries" },
    },
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
];

export const ctaItem = { name: "Contact Us", href: "#contact" };
export const demoItem = { name: "Book a Demo", href: "#demo" };
