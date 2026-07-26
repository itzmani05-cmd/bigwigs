import { Search, ClipboardList, PenTool, Code2, FlaskConical, Rocket, LifeBuoy, type LucideIcon } from "lucide-react";

export interface SdlcStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const sdlcSteps: SdlcStep[] = [
  {
    icon: Search,
    title: "Discovery",
    description: "Understand the problem before writing a line of code.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description: "Scope, timeline, and architecture decisions locked in.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Wireframes and interfaces shaped around real users.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Sprints with visible progress, not black-box builds.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    description: "Automated and manual QA before anything ships.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Controlled releases with rollback plans in place.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "Monitoring and iteration long after launch day.",
  },
];
