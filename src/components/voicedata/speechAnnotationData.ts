import {
  Scissors,
  UserCheck,
  Users2,
  Clock,
  BookOpen,
  MessageSquare,
  Smile,
  Volume2,
  Globe2,
} from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const speechAnnotationFeatures: IconGridItem[] = [
  { icon: Scissors, title: "Speech Segmentation", description: "Audio split into clean, labeled segments for training pipelines." },
  { icon: UserCheck, title: "Speaker Identification", description: "Each voice in a recording tagged and tracked consistently." },
  { icon: Users2, title: "Speaker Diarization", description: "Overlapping speakers separated into distinct, ordered turns." },
  { icon: Clock, title: "Timestamp Annotation", description: "Word- and phrase-level timing markers on every utterance." },
  { icon: BookOpen, title: "Phonetic Annotation", description: "Phoneme-level labeling for pronunciation and ASR models." },
  { icon: MessageSquare, title: "Intent Labeling", description: "Utterances tagged with intent for conversational AI training." },
  { icon: Smile, title: "Emotion Annotation", description: "Emotional tone labeled across the full range of speech data." },
  { icon: Volume2, title: "Noise Classification", description: "Background noise categorized to support robust model training." },
  { icon: Globe2, title: "Language Identification", description: "Spoken language and dialect tagged for multilingual datasets." },
];
