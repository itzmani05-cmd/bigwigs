import { Send, FileSearch, ClipboardCheck, Users, Mail, Rocket, type LucideIcon } from "lucide-react";

export interface HiringStep {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export const hiringSteps: HiringStep[] = [
  {
    icon: Send,
    title: "Apply",
    description: "Submit your application and resume.",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
  },
  {
    icon: FileSearch,
    title: "Resume Review",
    description: "We review your application carefully.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Assessment",
    description: "Complete a technical test or assessment.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Interview",
    description: "Meet the team and discuss your skills and passion.",
    color: "text-brand-green-600",
    bg: "bg-brand-green-50",
  },
  {
    icon: Mail,
    title: "Offer",
    description: "Receive your offer and join our mission.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Rocket,
    title: "Welcome Onboard",
    description: "Begin your journey with Bigwigs!",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
  },
];
