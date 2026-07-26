import {
  LayoutDashboard,
  IdCard,
  Video,
  ClipboardList,
  Archive,
  FlaskConical,
  Smartphone,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface HealthcareProduct {
  icon: LucideIcon;
  title: string;
}

export const healthcareProducts: HealthcareProduct[] = [
  { icon: LayoutDashboard, title: "Hospital Dashboard" },
  { icon: IdCard, title: "Patient Portal" },
  { icon: Video, title: "Telemedicine" },
  { icon: ClipboardList, title: "EHR" },
  { icon: Archive, title: "EMR" },
  { icon: FlaskConical, title: "Laboratory System" },
  { icon: Smartphone, title: "Healthcare Mobile App" },
  { icon: BarChart3, title: "Analytics Dashboard" },
];
