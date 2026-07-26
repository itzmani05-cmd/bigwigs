import { Shapes, Layers, Boxes, Crosshair, type LucideIcon } from "lucide-react";

export interface AnnotationPillar {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const advancedAnnotationPillars: AnnotationPillar[] = [
  {
    icon: Shapes,
    title: "Polygon Annotation",
    items: ["Medical Imaging", "Satellite Imagery", "Agriculture", "Manufacturing"],
  },
  {
    icon: Layers,
    title: "Semantic Segmentation",
    items: ["Road Scenes", "Healthcare", "Satellite Mapping", "Environmental Monitoring"],
  },
  {
    icon: Boxes,
    title: "Instance Segmentation",
    items: ["Retail", "Robotics", "Inventory", "Autonomous Driving"],
  },
  {
    icon: Crosshair,
    title: "Keypoint Annotation",
    items: ["Pose Estimation", "Sports Analytics", "Gesture Recognition", "Healthcare", "AR"],
  },
];
