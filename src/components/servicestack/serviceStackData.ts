import {
  BrainCircuit,
  Globe,
  Smartphone,
  Map,
  Radar,
  Stethoscope,
  Cloud,
  BarChart3,
  Building2,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceStackItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tint: "green" | "blue";
}

export const serviceStackItems: ServiceStackItem[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Enterprise-grade AI products built for scalable businesses.",
    icon: BrainCircuit,
    tint: "green",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Fast, resilient web platforms engineered for growth.",
    icon: Globe,
    tint: "blue",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Native-grade mobile experiences across iOS and Android.",
    icon: Smartphone,
    tint: "green",
  },
  {
    id: "gis-solutions",
    title: "GIS Solutions",
    description: "Actionable geospatial intelligence for enterprise mapping.",
    icon: Map,
    tint: "blue",
  },
  {
    id: "lidar-processing",
    title: "LiDAR Processing",
    description: "High-precision 2D/3D point-cloud processing pipelines.",
    icon: Radar,
    tint: "green",
  },
  {
    id: "healthcare-ai",
    title: "Healthcare AI",
    description: "Clinically-aware imaging models for medical workflows.",
    icon: Stethoscope,
    tint: "blue",
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    description: "Scalable, secure cloud infrastructure for AI workloads.",
    icon: Cloud,
    tint: "green",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Dashboards and pipelines that turn data into decisions.",
    icon: BarChart3,
    tint: "blue",
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software",
    description: "Custom software systems built for complex operations.",
    icon: Building2,
    tint: "green",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Intelligent workflow automation at enterprise scale.",
    icon: Workflow,
    tint: "blue",
  },
];
