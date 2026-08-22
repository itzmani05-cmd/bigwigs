import { Rocket, TrendingUp, Database, Brain, Radar, Layers, Sparkles, type LucideIcon } from "lucide-react";

export interface JourneyMilestone {
  icon: LucideIcon;
  year: string;
  title: string;
  description: string;
  color: string;
  bg: string;
  bar: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    icon: Rocket,
    year: "2013",
    title: "The Beginning",
    description:
      "Bigwigs Technologies begins its journey with a vision to deliver reliable technology and data-driven services to businesses worldwide.",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
    bar: "bg-brand-blue-500",
  },
  {
    icon: TrendingUp,
    year: "2016",
    title: "Growth",
    description:
      "Expanded our team, capabilities, and service portfolio to support growing client requirements across technology and business processes.",
    color: "text-violet-500",
    bg: "bg-violet-50",
    bar: "bg-violet-500",
  },
  {
    icon: Database,
    year: "2018",
    title: "Data & Technology",
    description:
      "Built stronger expertise in digital publishing, data processing, transcription, and technology-enabled business services.",
    color: "text-brand-green-600",
    bg: "bg-brand-green-50",
    bar: "bg-brand-green-600",
  },
  {
    icon: Brain,
    year: "2020",
    title: "AI Data Solutions",
    description:
      "Expanded into AI/ML data services, supporting computer vision and intelligent systems with high-quality training data.",
    color: "text-orange-500",
    bg: "bg-orange-50",
    bar: "bg-orange-500",
  },
  {
    icon: Radar,
    year: "2022",
    title: "Advanced Annotation",
    description:
      "Strengthened our capabilities in 2D/3D LiDAR, Radar, ADAS, GIS, segmentation, object detection, and keypoint annotation.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    bar: "bg-cyan-500",
  },
  {
    icon: Layers,
    year: "2024",
    title: "Diversification",
    description:
      "Expanded our service portfolio across AI data services, medical data annotation, ePublishing, PDF remediation, transcription, and BPO solutions.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    bar: "bg-indigo-500",
  },
  {
    icon: Sparkles,
    year: "2026",
    title: "The Next Chapter",
    description:
      "Building a stronger global presence with next-generation AI data, automation, and digital transformation services.",
    color: "text-brand-blue-500",
    bg: "bg-brand-blue-50",
    bar: "bg-brand-blue-500",
  },
];
