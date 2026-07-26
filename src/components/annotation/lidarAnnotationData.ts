import { Boxes, Cuboid, Route, Layers, Move3d, Radio } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const lidarAnnotationFeatures: IconGridItem[] = [
  { icon: Boxes, title: "Point Cloud Classification" },
  { icon: Cuboid, title: "3D Cuboids" },
  { icon: Route, title: "Lane Marking" },
  { icon: Layers, title: "Semantic Segmentation" },
  { icon: Move3d, title: "Object Tracking" },
  { icon: Radio, title: "Sensor Fusion" },
];
