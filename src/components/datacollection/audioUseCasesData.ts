import { Mic, MessageSquare, Volume2, Radio, Users, Headset, Wind, Speaker } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const audioUseCases: IconGridItem[] = [
  { icon: Mic, title: "Read Speech" },
  { icon: MessageSquare, title: "Natural Conversations" },
  { icon: Volume2, title: "Voice Commands" },
  { icon: Radio, title: "Podcasts" },
  { icon: Users, title: "Interviews" },
  { icon: Headset, title: "Customer Support Calls" },
  { icon: Wind, title: "Environmental Sounds" },
  { icon: Speaker, title: "Wake Words" },
];
