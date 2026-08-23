import { ShieldCheck, Globe2, Users2, Rocket } from "lucide-react";

/** Reused as-is from the /services page's own stats — kept consistent rather
 *  than inventing separate, unverifiable numbers per service. */
export const serviceStats = [
  { icon: Rocket, value: 100, suffix: "+", label: "Projects Delivered" },
  { icon: ShieldCheck, value: 99.5, suffix: "%", label: "Quality Benchmark" },
  { icon: Globe2, value: 10, suffix: "+", label: "Industries Served" },
  { icon: Users2, value: 40, suffix: "%", label: "Faster Delivery" },
];
