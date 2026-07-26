import { Award, ClipboardCheck, Layers, ShieldCheck, Lock, Clock } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const whyPublishingReasons: IconGridItem[] = [
  { icon: Award, title: "Publishing Experts", description: "Teams who understand production, not just file conversion." },
  { icon: ClipboardCheck, title: "Industry Standards", description: "DITA, JATS, EPUB, and accessibility standards, built in." },
  { icon: Layers, title: "Scalable Production", description: "From a single title to a full catalog on the same pipeline." },
  { icon: ShieldCheck, title: "Quality Assurance", description: "Every file validated before it reaches your readers." },
  { icon: Lock, title: "Secure Content Handling", description: "Confidential manuscripts and archives handled under NDA." },
  { icon: Clock, title: "On-Time Delivery", description: "Production schedules that hold, even at enterprise scale." },
];
