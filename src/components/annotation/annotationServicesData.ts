import {
  Camera,
  Video,
  Scan,
  Shapes,
  Layers,
  Boxes,
  Crosshair,
  ScanLine,
  CheckCircle2,
} from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const annotationServices: IconGridItem[] = [
  {
    icon: Camera,
    title: "Image Annotation",
    description: "Bounding boxes, polygons, and masks labeled for computer vision.",
  },
  {
    icon: Video,
    title: "Video Annotation",
    description: "Frame-by-frame tracking and event labeling across footage.",
  },
  {
    icon: Scan,
    title: "LiDAR Annotation",
    description: "3D point clouds labeled for autonomous driving and robotics.",
  },
  {
    icon: Shapes,
    title: "Polygon Annotation",
    description: "Irregular object boundaries traced with pixel-level precision.",
  },
  {
    icon: Layers,
    title: "Semantic Segmentation",
    description: "Every pixel classified into its corresponding object class.",
  },
  {
    icon: Boxes,
    title: "Instance Segmentation",
    description: "Individual object instances separated within a shared class.",
  },
  {
    icon: Crosshair,
    title: "Keypoint Annotation",
    description: "Pose, landmarks, and gesture points labeled for tracking models.",
  },
  {
    icon: ScanLine,
    title: "OCR & Document Annotation",
    description: "Text, tables, and forms labeled for document AI training.",
  },
  {
    icon: CheckCircle2,
    title: "Data Labeling & Validation",
    description: "Cleaning, structuring, and validation before final delivery.",
  },
];
