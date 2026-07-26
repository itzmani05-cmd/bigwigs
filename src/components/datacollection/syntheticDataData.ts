import { ScanEye, Factory, Car, FlaskConical, Sparkles } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const syntheticDataFeatures: IconGridItem[] = [
  { icon: ScanEye, title: "Computer Vision", description: "Simulated scenes generated to cover edge cases real capture can't." },
  { icon: Factory, title: "Manufacturing", description: "Production-line simulations for defect and anomaly detection." },
  { icon: Car, title: "Autonomous Driving", description: "Rare road scenarios modeled safely, without real-world risk." },
  { icon: FlaskConical, title: "AI Testing", description: "Controlled synthetic sets built to stress-test model behavior." },
  { icon: Sparkles, title: "Rare Event Simulation", description: "Low-frequency events generated at the volume training needs." },
];
