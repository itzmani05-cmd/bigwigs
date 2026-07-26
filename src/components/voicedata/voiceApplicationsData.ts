import {
  AudioLines,
  Volume2,
  Fingerprint,
  KeyRound,
  MessageSquare,
  Bot,
  Stethoscope,
  Car,
  Headset,
  Speaker,
  type LucideIcon,
} from "lucide-react";

export interface ApplicationNode {
  icon: LucideIcon;
  label: string;
  angle: number;
}

export const voiceApplicationNodes: ApplicationNode[] = [
  { icon: AudioLines, label: "Automatic Speech Recognition", angle: 270 },
  { icon: Volume2, label: "Text-To-Speech", angle: 306 },
  { icon: Fingerprint, label: "Voice Biometrics", angle: 342 },
  { icon: KeyRound, label: "Voice Authentication", angle: 18 },
  { icon: MessageSquare, label: "Conversational AI", angle: 54 },
  { icon: Bot, label: "Virtual Assistants", angle: 90 },
  { icon: Stethoscope, label: "Healthcare AI", angle: 126 },
  { icon: Car, label: "Automotive AI", angle: 162 },
  { icon: Headset, label: "Customer Support Automation", angle: 198 },
  { icon: Speaker, label: "Smart Speakers", angle: 234 },
];
