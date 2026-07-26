import { Users2, Layers, ShieldCheck, Lock, Award, Zap } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const whyAnnotationReasons: IconGridItem[] = [
  { icon: Users2, title: "Experienced Annotators", description: "Teams trained on your taxonomy, not a generic labeling task." },
  { icon: Layers, title: "Enterprise Scale", description: "From a pilot batch to millions of objects, on the same pipeline." },
  { icon: ShieldCheck, title: "Multi-Level QA", description: "Every batch reviewed before it ever reaches your model." },
  { icon: Lock, title: "Secure Data Handling", description: "Consent-managed, encrypted handling from intake to delivery." },
  { icon: Award, title: "Dedicated Project Managers", description: "One point of contact accountable for every delivery." },
  { icon: Zap, title: "Fast Turnaround", description: "Standard and rush timelines, without compromising accuracy." },
];
