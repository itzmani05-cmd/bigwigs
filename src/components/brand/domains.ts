import {
  Stethoscope,
  Building2,
  Map,
  Scan,
  Radar,
  ScanEye,
  Workflow,
  Cloud,
  ShieldAlert,
  Boxes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface BrandDomain {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const brandDomains: BrandDomain[] = [
  { id: "healthcare-ai", title: "Healthcare AI", description: "Clinically-aware imaging models.", icon: Stethoscope },
  { id: "enterprise-ai", title: "Enterprise AI", description: "AI systems built for scale.", icon: Building2 },
  { id: "gis-mapping", title: "GIS Mapping", description: "Actionable geospatial intelligence.", icon: Map },
  { id: "medical-imaging", title: "Medical Imaging", description: "Precision diagnostic annotation.", icon: Scan },
  { id: "lidar", title: "LiDAR", description: "High-precision point-cloud pipelines.", icon: Radar },
  { id: "computer-vision", title: "Computer Vision", description: "Production-grade detection models.", icon: ScanEye },
  { id: "automation", title: "Automation", description: "Intelligent enterprise workflows.", icon: Workflow },
  { id: "cloud-ai", title: "Cloud AI", description: "Scalable inference infrastructure.", icon: Cloud },
  { id: "fraud-detection", title: "Fraud Detection", description: "Real-time anomaly detection.", icon: ShieldAlert },
  { id: "digital-twins", title: "Digital Twins", description: "Live models of physical systems.", icon: Boxes },
];
