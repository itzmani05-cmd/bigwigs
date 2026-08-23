import {
  Mic,
  Languages,
  ShieldCheck,
  Globe2,
  Speaker,
  Users2,
  Smile,
  Lock,
  ClipboardCheck,
  UserCheck,
  Sparkles,
  Search,
  Users,
  PackageCheck,
} from "lucide-react";

export const voiceHero = {
  eyebrow: "Voice & Speech Data Collection",
  heading: (
    <>
      Powering the Future of{" "}
      <span className="text-blue-500">Voice AI</span>
    </>
  ),
  description:
    "Enterprise-grade speech datasets — collection, annotation, and validation for speech recognition, conversational AI, and voice assistants.",
  primaryCta: { label: "Start Your Project", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const voiceChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Behind Every Voice Dataset",
  items: [
    { icon: Globe2, title: "Fragmented Accent Coverage", description: "Thin accent diversity leaves voice models blind to how large parts of your audience speak." },
    { icon: Mic, title: "Noisy Recording Conditions", description: "Real-world audio is messier than lab conditions, and models trained on clean data struggle to cope." },
    { icon: Speaker, title: "Wake Word False Positives", description: "Poorly tuned wake word data means devices that trigger constantly, or not at all." },
    { icon: Users2, title: "Overlapping Speaker Diarization", description: "Separating who said what in multi-speaker audio needs carefully labeled training data." },
    { icon: Lock, title: "Voice Biometric Privacy", description: "Voice data tied to identity requires consent management most collection pipelines skip." },
    { icon: Languages, title: "Multilingual Complexity", description: "Scaling voice collection across languages multiplies every challenge a single language poses." },
  ],
};

export const voiceCapabilities = {
  eyebrow: "What's Included",
  heading: "Nine Ways We Help You Build Voice AI",
  items: [
    { icon: Mic, title: "Speech Data Collection", description: "Read, spontaneous, and conversational speech." },
    { icon: Speaker, title: "Wake Word Collection", description: "Custom wake words across devices and rooms." },
    { icon: Globe2, title: "Accent & Dialect Collection", description: "Native speakers across regions and ages." },
    { icon: Languages, title: "Multilingual Collection", description: "Voice data across 50+ languages." },
    { icon: ClipboardCheck, title: "Speech Annotation", description: "Segmentation, diarization, intent labeling." },
    { icon: UserCheck, title: "Speaker Identification", description: "Datasets built for biometrics and auth." },
    { icon: Smile, title: "Emotion Recognition", description: "Emotion-tagged data for sentiment AI." },
    { icon: Sparkles, title: "AI Voice Dataset Creation", description: "End-to-end, ready for model training." },
  ],
};

export const voiceProcessSteps = [
  { icon: Search, title: "Requirement Analysis", description: "Target languages and accents defined up front." },
  { icon: Users, title: "Participant Recruitment", description: "Speakers sourced to match your spec." },
  { icon: Mic, title: "Speech Collection", description: "Recordings captured in real-world conditions." },
  { icon: ClipboardCheck, title: "Annotation & Labeling", description: "Every file segmented and labeled." },
  { icon: ShieldCheck, title: "Quality Assurance", description: "Audio and metadata validated at scale." },
  { icon: PackageCheck, title: "Delivery", description: "Dataset packaged in your required format." },
];

export const voiceFaq = [
  { question: "Can you collect regional accents?", answer: "Yes. We recruit native speakers by region, dialect, age, and gender so your dataset reflects real accent diversity." },
  { question: "Can you support enterprise-scale projects?", answer: "Yes. Our pipelines scale from pilot batches to millions of speech samples across 30+ countries." },
  { question: "Do you provide annotated datasets?", answer: "Every dataset can include segmentation, speaker diarization, timestamps, intent, and emotion annotation." },
  { question: "How do you ensure recording quality?", answer: "Every file passes automated audio-quality scoring plus human review before delivery." },
  { question: "How do you source diverse speakers?", answer: "We recruit participants across regions, age groups, and genders to match your exact demographic spec, not a convenience sample." },
  { question: "Can you collect data for a specific device or environment?", answer: "Yes. Recordings can be captured under conditions that match your real deployment — in-car, in-home, or noisy public spaces." },
];

export const voiceDifferentiators = {
  eyebrow: "Why Bigwigs",
  heading: "Why Teams Choose Us for Voice Data",
  items: [
    { icon: Globe2, title: "Real Accent & Dialect Diversity", description: "Native speakers recruited by region, age, and gender to match your exact spec." },
    { icon: Mic, title: "Real-World Recording Conditions", description: "Data captured in the noise and variability your model will actually face." },
    { icon: Lock, title: "Consent-Managed Collection", description: "Every recording tied to documented, auditable participant consent." },
    { icon: ClipboardCheck, title: "Annotation Included", description: "Segmentation, diarization, and intent labeling delivered alongside the audio." },
    { icon: Users2, title: "Global Participant Network", description: "Speakers sourced across 30+ countries without you managing recruitment." },
    { icon: ShieldCheck, title: "Quality-Scored Before Delivery", description: "Automated audio scoring plus human review on every file." },
  ],
};

export const voiceBottomCta = {
  icon: Mic,
  heading: "Build Intelligent Voice AI With Enterprise Speech Data",
  description:
    "Whether you're building voice assistants or multilingual conversational AI, Bigwigs Technologies delivers secure, scalable speech datasets.",
  primaryAction: { label: "Start Your Project", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
