import { Compass, ClipboardList, FlaskConical, Rocket, ShieldCheck, PackageCheck } from "lucide-react";
import type { ProcessStep } from "@/components/servicePage/ProcessTimeline";

export const deliveryProcessSteps: ProcessStep[] = [
  { icon: Compass, title: "Business Discovery", description: "Goals, workflows, and success metrics defined with your team." },
  { icon: ClipboardList, title: "Solution Design", description: "Architecture and model approach scoped to your use case." },
  { icon: FlaskConical, title: "Proof of Concept", description: "A working prototype validated against real business data." },
  { icon: Rocket, title: "Development", description: "The full solution built, integrated, and iterated on." },
  { icon: ShieldCheck, title: "Testing", description: "Accuracy, safety, and performance verified before launch." },
  { icon: PackageCheck, title: "Deployment", description: "Live in production, monitored, and supported at scale." },
];
