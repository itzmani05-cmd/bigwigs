import { Map, Radar, Stethoscope, ScanEye, Workflow, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface MegaFeature {
  icon: LucideIcon;
  title: string;
  description: string;
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
  { name: "About Us", href: "#about" },
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
  { name: "Solutions", href: "#solutions" },
  { name: "Careers", href: "/careers" },
];

export const ctaItem = { name: "Contact Us", href: "#contact" };
export const demoItem = { name: "Book a Demo", href: "#demo" };
