import { Car, Users, Scan, Factory, Stethoscope, ShieldCheck } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const videoUseCases: IconGridItem[] = [
  { icon: Scan, title: "Traffic Monitoring" },
  { icon: Car, title: "Driving Scenarios" },
  { icon: Users, title: "Pedestrian Detection" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Stethoscope, title: "Healthcare Procedures" },
  { icon: ShieldCheck, title: "Public Safety" },
];
