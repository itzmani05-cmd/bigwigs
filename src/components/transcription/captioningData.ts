import { Captions, Eye, Languages, Accessibility } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const captionFormats: string[] = ["SRT", "VTT", "SCC", "TXT", "Custom Formats"];

export const captioningFeatures: IconGridItem[] = [
  {
    icon: Captions,
    title: "Closed Captions",
    description: "Viewer-toggled captions synced frame-accurate to your video timeline.",
  },
  {
    icon: Eye,
    title: "Open Captions",
    description: "Burned-in captions for platforms and placements that need them always on.",
  },
  {
    icon: Languages,
    title: "Subtitle Translation",
    description: "Subtitles localized into 50+ languages without losing timing or tone.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Compliance",
    description: "Deliverables that meet WCAG, ADA, and FCC accessibility requirements.",
  },
];
