import { Map, Radar, Stethoscope, ScanEye, Workflow, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Role {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  icon: LucideIcon;
  summary: string;
  responsibilities: string[];
}

export const roles: Role[] = [
  {
    id: "gis-engineer",
    title: "GIS Engineer",
    department: "GIS & Geospatial",
    location: "Trichy / Remote",
    type: "Full-time",
    icon: Map,
    summary: "Build geospatial data pipelines and mapping tools for enterprise clients.",
    responsibilities: [
      "Design and maintain GIS data pipelines across raster and vector sources",
      "Build mapping and geospatial-analysis tooling used in production",
      "Work closely with data annotation teams on geospatial labeling quality",
    ],
  },
  {
    id: "lidar-data-scientist",
    title: "LiDAR Data Scientist",
    department: "LiDAR",
    location: "Trichy / Hybrid",
    type: "Full-time",
    icon: Radar,
    summary: "Process and model 2D/3D point-cloud data for autonomy and mapping use cases.",
    responsibilities: [
      "Develop point-cloud processing and 3D reconstruction pipelines",
      "Build and validate models against LiDAR annotation datasets",
      "Collaborate with clients on sensor-fusion and mapping accuracy requirements",
    ],
  },
];
