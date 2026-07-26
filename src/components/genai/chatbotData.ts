import { MessagesSquare, Brain, Globe2, Headset, Database, BarChart3 } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const chatbotFeatures: IconGridItem[] = [
  { icon: MessagesSquare, title: "Natural Language" },
  { icon: Brain, title: "Context Awareness" },
  { icon: Globe2, title: "Multilingual" },
  { icon: Headset, title: "Human Escalation" },
  { icon: Database, title: "Knowledge Base" },
  { icon: BarChart3, title: "Analytics" },
];

export const chatbotChannels: string[] = ["Website", "Mobile", "Slack", "Teams", "WhatsApp", "Facebook Messenger"];
