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
  {
    id: "medical-ai-engineer",
    title: "Medical AI Research Engineer",
    department: "Medical AI",
    location: "Remote",
    type: "Full-time",
    icon: Stethoscope,
    summary: "Build models and annotation workflows for medical imaging applications.",
    responsibilities: [
      "Develop and validate models on medical imaging datasets",
      "Own annotation quality and clinical review workflows",
      "Work within data-privacy and compliance requirements for healthcare data",
    ],
  },
  {
    id: "cv-engineer",
    title: "Computer Vision Engineer",
    department: "Computer Vision",
    location: "Trichy / Hybrid",
    type: "Full-time",
    icon: ScanEye,
    summary: "Ship vision models and annotation tooling across client verticals.",
    responsibilities: [
      "Build and optimize computer vision models for production deployment",
      "Develop internal tooling for image/video annotation and QA",
      "Partner with clients to define accuracy and performance targets",
    ],
  },
  {
    id: "automation-developer",
    title: "Enterprise Automation Developer",
    department: "Enterprise Automation",
    location: "Remote",
    type: "Full-time",
    icon: Workflow,
    summary: "Design intelligent automation workflows for enterprise operations.",
    responsibilities: [
      "Build workflow-automation systems integrating internal and client tooling",
      "Design agentic and rules-based automation for operational processes",
      "Monitor and iterate on automation reliability in production",
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    department: "Data Analytics",
    location: "Remote / Contract",
    type: "Full-time or Contract",
    icon: BarChart3,
    summary: "Turn client and internal data into dashboards and decisions.",
    responsibilities: [
      "Build reporting and analytics dashboards for client engagements",
      "Own data-quality checks across annotation and delivery pipelines",
      "Partner with engineering on instrumentation and metrics definitions",
    ],
  },
];
