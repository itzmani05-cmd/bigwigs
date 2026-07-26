import { Move3d, Waypoints, Film, Activity, Route, GitCommitHorizontal } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const videoAnnotationFeatures: IconGridItem[] = [
  { icon: Move3d, title: "Object Tracking" },
  { icon: Waypoints, title: "Multi-Object Tracking" },
  { icon: Film, title: "Frame Annotation" },
  { icon: Activity, title: "Action Recognition" },
  { icon: Route, title: "Traffic Analysis" },
  { icon: GitCommitHorizontal, title: "Lane Detection" },
];
