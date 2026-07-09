import { Map, Radar, Stethoscope, ScanEye, Workflow, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceDomain {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tint: "green" | "blue";
}

export const serviceDomains: ServiceDomain[] = [
  {
    id: "gis",
    title: "GIS & Geospatial",
    icon: Map,
    description:
      "Turn raw geospatial data into mapped, actionable intelligence for enterprise decisions.",
    tint: "green",
  },
  {
    id: "lidar",
    title: "LiDAR Processing",
    icon: Radar,
    description:
      "High-precision 2D/3D point-cloud processing for mapping, surveying, and autonomy.",
    tint: "blue",
  },
  {
    id: "medical-ai",
    title: "Medical AI",
    icon: Stethoscope,
    description:
      "Clinically-aware models and annotation workflows built for healthcare imaging.",
    tint: "green",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    icon: ScanEye,
    description:
      "Production-grade vision models across detection, segmentation, and inspection.",
    tint: "blue",
  },
  {
    id: "automation",
    title: "Enterprise Automation",
    icon: Workflow,
    description:
      "Intelligent workflow automation that removes manual bottlenecks at scale.",
    tint: "green",
  },
  {
    id: "analytics",
    title: "Data Analytics",
    icon: BarChart3,
    description:
      "Dashboards and pipelines that turn operational data into clear decisions.",
    tint: "blue",
  },
];
