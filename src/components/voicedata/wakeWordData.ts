import { Home, Building2, Car, Users, Factory } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const wakeWordCommands: string[] = ["Hello Assistant", "Hey AI", "Okay Device", "Custom Wake Words"];

export const recordingEnvironments: IconGridItem[] = [
  { icon: Home, title: "Home" },
  { icon: Building2, title: "Office" },
  { icon: Car, title: "Vehicle" },
  { icon: Users, title: "Public Space" },
  { icon: Factory, title: "Industrial" },
];
