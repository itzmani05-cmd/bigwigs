import {
  Mic,
  Video,
  Stethoscope,
  Scale,
  Captions,
  Bot,
  Languages,
  Clock,
  Users,
  Globe2,
  ShieldCheck,
  Timer,
  Lock,
  Search,
  Compass,
  UserCheck,
  FlaskConical,
  PackageCheck,
} from "lucide-react";

export const transcriptionHero = {
  eyebrow: "Transcription Services",
  heading: (
    <>
      Every Conversation, Turned Into{" "}
      <span className="text-blue-500">Actionable Text</span>
    </>
  ),
  description:
    "Accurate, searchable, multilingual transcription with AI-assisted drafting and expert human review — built for compliance, accessibility, and analytics.",
  primaryCta: { label: "Request a Quote", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const transcriptionChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Behind Every Recording",
  items: [
    { icon: Clock, title: "Slow, Manual Transcription" },
    { icon: Users, title: "Overlapping Speakers" },
    { icon: Globe2, title: "Multilingual & Accented Audio" },
    { icon: ShieldCheck, title: "Strict Compliance Requirements" },
    { icon: Timer, title: "Tight Turnaround Windows" },
    { icon: Lock, title: "Sensitive, Confidential Recordings" },
  ],
};

export const transcriptionCapabilities = {
  eyebrow: "What's Included",
  heading: "Nine Ways We Turn Speech Into Text",
  items: [
    { icon: Mic, title: "Audio Transcription", description: "Meetings, interviews, and podcasts as clean text." },
    { icon: Video, title: "Video Transcription", description: "Full transcripts and captions for any video." },
    { icon: Stethoscope, title: "Medical Transcription", description: "Clinical notes to healthcare documentation standards." },
    { icon: Scale, title: "Legal Transcription", description: "Court-ready hearing and deposition transcripts." },
    { icon: Captions, title: "Captioning & Subtitling", description: "Broadcast-ready closed captions and subtitles." },
    { icon: Bot, title: "AI-Assisted Transcription", description: "Speech recognition plus expert human review." },
    { icon: Languages, title: "Multilingual Transcription", description: "Source and translated text across 50+ languages." },
  ],
};

export const transcriptionProcessSteps = [
  { icon: Search, title: "Intake", description: "Audio quality and speaker count reviewed first." },
  { icon: Compass, title: "Matching", description: "Routed to a transcriptionist with the right expertise." },
  { icon: Bot, title: "AI Draft", description: "Speech recognition produces a first-pass transcript." },
  { icon: UserCheck, title: "Review", description: "Experts verify accuracy, formatting, and terms." },
  { icon: FlaskConical, title: "Revisions", description: "Feedback incorporated before finalizing." },
  { icon: PackageCheck, title: "Delivery", description: "Delivered in your required format, on schedule." },
];

export const transcriptionFaq = [
  {
    question: "Can you transcribe multiple speakers?",
    answer: "Yes. Every transcript includes speaker identification and labeling, even for files with several overlapping speakers.",
  },
  {
    question: "Do you provide timestamps?",
    answer: "Timestamps are included by default, at intervals you choose — per speaker turn, per paragraph, or fixed time codes.",
  },
  {
    question: "Can you deliver subtitles?",
    answer: "Yes. Closed and open captions, subtitle translation, and files in SRT, VTT, SCC, TXT, or any custom format.",
  },
  {
    question: "How is confidential data protected?",
    answer: "All files are handled under signed NDAs with restricted access, encrypted storage, and secure disposal after delivery.",
  },
];

export const transcriptionBottomCta = {
  icon: Mic,
  heading: "Turn Voice Into Business Intelligence",
  description:
    "Multilingual transcription, medical documentation, legal transcripts, or AI training datasets — delivered secure and enterprise-ready.",
  primaryAction: { label: "Request a Quote", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
