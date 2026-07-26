import {
  Mic,
  Video,
  Stethoscope,
  Scale,
  Briefcase,
  GraduationCap,
  Captions,
  Bot,
  Languages,
} from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const transcriptionServices: IconGridItem[] = [
  {
    icon: Mic,
    title: "Audio Transcription",
    description: "Meetings, interviews, and podcasts converted into clean, searchable text.",
  },
  {
    icon: Video,
    title: "Video Transcription",
    description: "Full transcripts and captions for corporate, educational, and marketing video.",
  },
  {
    icon: Stethoscope,
    title: "Medical Transcription",
    description: "Clinical notes and reports transcribed to strict healthcare documentation standards.",
  },
  {
    icon: Scale,
    title: "Legal Transcription",
    description: "Court-ready transcripts of hearings, depositions, and client interviews.",
  },
  {
    icon: Briefcase,
    title: "Business Transcription",
    description: "Board meetings, sales calls, and executive discussions, documented accurately.",
  },
  {
    icon: GraduationCap,
    title: "Academic Research",
    description: "Lectures, interviews, and focus groups transcribed for research and publication.",
  },
  {
    icon: Captions,
    title: "Captioning & Subtitling",
    description: "Closed captions and subtitles delivered in every broadcast-ready format.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Transcription",
    description: "Speech recognition plus expert human review for enterprise-grade accuracy.",
  },
  {
    icon: Languages,
    title: "Multilingual Transcription",
    description: "Source-language and translated transcripts across 50+ languages.",
  },
];
