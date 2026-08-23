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
    { icon: Clock, title: "Slow, Manual Transcription", description: "Typing out hours of audio by hand doesn't scale with growing content volume." },
    { icon: Users, title: "Overlapping Speakers", description: "Crosstalk and interruptions trip up automated tools without expert review." },
    { icon: Globe2, title: "Multilingual & Accented Audio", description: "Generic speech-to-text struggles with accents that native reviewers catch easily." },
    { icon: ShieldCheck, title: "Strict Compliance Requirements", description: "Legal and medical transcripts need accuracy standards automation alone can't guarantee." },
    { icon: Timer, title: "Tight Turnaround Windows", description: "Same-day delivery needs a workflow built for speed, not just accuracy." },
    { icon: Lock, title: "Sensitive, Confidential Recordings", description: "Depositions, medical visits, and internal meetings need secure handling end to end." },
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
  {
    question: "What audio formats do you accept?",
    answer: "We work with all common audio and video formats — MP3, WAV, MP4, and more — and can accommodate custom source formats on request.",
  },
  {
    question: "Do you support rush turnaround?",
    answer: "Yes. Expedited delivery windows are available for time-sensitive projects, scoped case by case.",
  },
];

export const transcriptionDifferentiators = {
  eyebrow: "Why Bigwigs",
  heading: "Why Teams Choose Us for Transcription",
  items: [
    { icon: Bot, title: "AI Draft, Human Verified", description: "Speech recognition speeds up the first pass — every word is still checked by a person." },
    { icon: Users, title: "Speaker-Aware Accuracy", description: "Speaker identification and labeling built in, even across overlapping conversations." },
    { icon: Languages, title: "Accents & Languages Covered", description: "Native reviewers handle accented and multilingual audio machine tools miss." },
    { icon: ShieldCheck, title: "Compliance-Ready Formatting", description: "Legal and medical transcripts formatted to the standards those industries require." },
    { icon: Lock, title: "Confidential Handling", description: "NDA-bound teams, encrypted storage, and secure disposal after delivery." },
    { icon: Timer, title: "Turnaround You Can Plan Around", description: "Standard and rush delivery windows, so you know exactly when to expect it." },
  ],
};

export const transcriptionBottomCta = {
  icon: Mic,
  heading: "Turn Voice Into Business Intelligence",
  description:
    "Multilingual transcription, medical documentation, legal transcripts, or AI training datasets — delivered secure and enterprise-ready.",
  primaryAction: { label: "Request a Quote", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
