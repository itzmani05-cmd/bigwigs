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
  Layers,
  Users,
  Sparkles,
  UserCheck,
  Scissors,
  Clock,
  BookOpen,
  MessageSquare,
  Volume2,
  Gauge,
  FileCheck,
  CheckSquare,
  AudioLines,
  Bot,
  Fingerprint,
  KeyRound,
  Stethoscope,
  Car,
  Frown,
  Angry,
  AlertTriangle,
  Zap,
  Meh,
  CloudDrizzle,
  PartyPopper,
  Wind,
  HelpCircle,
  Cpu,
  Radio,
  Landmark,
  Umbrella,
  ShoppingCart,
  GraduationCap,
  Building2,
  Newspaper,
  Smartphone,
  Wifi,
  TrendingUp,
  Search,
  PackageCheck,
} from "lucide-react";

export const voiceDataHero = {
  eyebrow: "Voice & Speech Data Collection",
  heading: (
    <>
      Powering the Future
      <br />
      of <span className="text-blue-500">Voice AI</span>
    </>
  ),
  description:
    "Build intelligent speech recognition, conversational AI, voice assistants, and multilingual voice technologies with enterprise-grade speech datasets. Bigwigs Technologies delivers scalable voice data collection, annotation, validation, and quality assurance for next-generation AI systems.",
  primaryCta: { label: "Start Your Speech AI Project", href: "#contact" },
  secondaryCta: { label: "Contact Our Voice Data Specialists", href: "#contact" },
  trustedBy: ["AI Companies", "Automotive", "Healthcare", "Telecommunications", "Smart Devices"],
  visualIcon: Mic,
  badges: [
    { icon: Mic, label: "Voice Capture", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Languages, label: "50+ Languages", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: ShieldCheck, label: "Validated Data", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const voiceChallenges = {
  heading: (
    <>
      The Realities Behind
      <br />
      Every Voice Dataset
    </>
  ),
  description: "Collection, annotation, and validation — one team across the full speech data pipeline, not nine separate vendors.",
  items: [
    {
      icon: Globe2,
      title: "Fragmented Accent & Dialect Coverage",
      description: "A model trained on one accent fails the moment it meets a different region of speakers.",
    },
    { icon: Mic, title: "Noisy, Real-World Recording Conditions" },
    { icon: Speaker, title: "Wake Word False Positives" },
    { icon: Users2, title: "Overlapping Speaker Diarization" },
    { icon: Smile, title: "Ambiguous Emotional Tone" },
    { icon: Lock, title: "Voice Biometric Privacy & Consent" },
    { icon: Languages, title: "Multilingual Dataset Complexity" },
    { icon: ClipboardCheck, title: "Inconsistent Annotation Quality" },
    { icon: Users, title: "Slow Participant Recruitment" },
    { icon: Layers, title: "Scaling Beyond a Pilot Batch" },
  ],
};

export const voiceSolutions = {
  heading: "Nine Ways We Help You Build Voice AI",
  items: [
    {
      icon: Mic,
      title: "Speech Data Collection",
      description: "Read, spontaneous, and conversational speech recorded at enterprise scale.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Speaker,
      title: "Wake Word Collection",
      description: "Custom wake words captured across devices, rooms, and background conditions.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Globe2,
      title: "Accent & Dialect Collection",
      description: "Native speakers across regions, ages, and genders for balanced datasets.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Languages,
      title: "Multilingual Voice Collection",
      description: "Voice data gathered across 50+ languages and regional variants.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: ClipboardCheck,
      title: "Speech Annotation",
      description: "Segmentation, diarization, and intent labeling on every audio file.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: UserCheck,
      title: "Speaker Identification",
      description: "Speaker-labeled datasets built for biometrics and authentication models.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Smile,
      title: "Emotion Recognition",
      description: "Emotion-tagged voice data for sentiment-aware conversational AI.",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      icon: ShieldCheck,
      title: "Audio Validation",
      description: "Multi-stage QA for audio quality, noise, and metadata compliance.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      title: "AI Voice Dataset Creation",
      description: "End-to-end datasets, packaged and ready for model training.",
      gradient: "from-violet-500 to-fuchsia-500",
    },
  ],
};

export const speechWakeWordCollection = {
  heading: "Every Type of Speech, Captured to Spec",
  description: "From scripted read speech to natural wake-word triggers — recorded across the environments your product actually ships into.",
  cards: [
    {
      icon: Mic,
      title: "Speech Data Collection",
      description: "Read, spontaneous, and conversational speech recorded at enterprise scale.",
      items: ["Read Speech", "Spontaneous Speech", "Conversational Speech", "Scripted Dialogues", "Voice Search", "IVR Calls", "Podcasts", "Meetings", "Training Sessions", "Long Narration"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Speaker,
      title: "Wake Word Collection",
      description: "Custom wake words captured at natural volume, distance, and cadence across real environments.",
      items: ["Hello Assistant", "Hey AI", "Okay Device", "Custom Wake Words", "Home", "Office", "Vehicle", "Public Space", "Industrial"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const accentsLanguages = {
  heading: "Every Accent, Every Region, Every Voice",
  description: "Native speakers recruited across regions, ages, genders, and background noise conditions — spanning international and Indian languages alike.",
  cards: [
    {
      icon: Globe2,
      title: "International Languages",
      description: "Native speaker recordings across major global languages and dialects.",
      items: ["English", "French", "German", "Spanish", "Arabic", "Chinese", "Japanese", "Korean"],
      glowColor: "rgba(56,189,248,0.35)",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Languages,
      title: "Indian Languages",
      description: "Regional voice data collected across India's major spoken languages.",
      items: ["Hindi", "Tamil", "Telugu", "Malayalam", "Kannada", "Marathi", "Bengali", "Gujarati", "Punjabi", "Odia"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const speechAnnotationQa = {
  heading: "Every Second Labeled, Every File Verified",
  description: "Segmentation, diarization, and intent labeling on every file — validated against enterprise audio-quality benchmarks before delivery.",
  panelLabel: "Annotation Pipeline",
  tiles: [
    { icon: Scissors, label: "Speech Segmentation" },
    { icon: UserCheck, label: "Speaker Identification" },
    { icon: Users2, label: "Speaker Diarization" },
    { icon: Clock, label: "Timestamp Annotation" },
    { icon: BookOpen, label: "Phonetic Annotation" },
    { icon: MessageSquare, label: "Intent Labeling" },
    { icon: Smile, label: "Emotion Annotation" },
    { icon: Volume2, label: "Noise Classification" },
  ],
  pills: [
    { icon: Gauge, label: "Audio Quality Score" },
    { icon: Volume2, label: "Noise Detection" },
    { icon: UserCheck, label: "Speaker Verification" },
    { icon: Globe2, label: "Language Verification" },
    { icon: FileCheck, label: "Metadata Validation" },
    { icon: CheckSquare, label: "Format Compliance" },
    { icon: Layers, label: "Dataset Consistency" },
  ],
};

export const voiceApplications = {
  heading: "One Voice Dataset Practice, Ten AI Applications",
  description: "The same speech data pipeline trains recognition, synthesis, biometrics, and conversational models alike.",
  centerIcon: Mic,
  badges: [
    { icon: AudioLines, label: "Speech Recognition", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Bot, label: "Virtual Assistants", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: Fingerprint, label: "Voice Biometrics", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: AudioLines, title: "Automatic Speech Recognition", description: "Spoken audio parsed into accurate, structured text." },
    { icon: Volume2, title: "Text-To-Speech", description: "Natural-sounding synthetic voices trained on annotated speech." },
    { icon: Fingerprint, title: "Voice Biometrics", description: "Speaker identity verified from voiceprint patterns alone." },
    { icon: KeyRound, title: "Voice Authentication", description: "Secure, hands-free login backed by verified speaker data." },
    { icon: MessageSquare, title: "Conversational AI", description: "Dialogue systems grounded in real, annotated conversation." },
    { icon: Bot, title: "Virtual Assistants", description: "Assistants that understand intent across accents and languages." },
    { icon: Stethoscope, title: "Healthcare AI", description: "Clinical voice documentation and diagnostic speech models." },
    { icon: Car, title: "Automotive AI", description: "In-cabin voice commands trained for road noise and cadence." },
  ],
};

export const voiceWorkflow = {
  heading: "Five Stages Between Requirement and Delivery",
  description: "Every dataset moves through the same disciplined pipeline, from scoping to final packaging.",
  steps: [
    { icon: Search, label: "Requirement Analysis" },
    { icon: Users, label: "Participant Recruitment" },
    { icon: Mic, label: "Speech Data Collection" },
    { icon: ClipboardCheck, label: "Annotation & Validation" },
    { icon: PackageCheck, label: "Delivery" },
  ],
  marqueeItems: [
    { icon: Smile, title: "Happy" },
    { icon: Frown, title: "Sad" },
    { icon: Angry, title: "Angry" },
    { icon: AlertTriangle, title: "Fear" },
    { icon: Zap, title: "Surprise" },
    { icon: Meh, title: "Neutral" },
    { icon: CloudDrizzle, title: "Frustration" },
    { icon: PartyPopper, title: "Excitement" },
    { icon: Wind, title: "Calm" },
    { icon: HelpCircle, title: "Confusion" },
  ],
};

export const voiceWhoWeServe = {
  heading: "Voice Data Expertise Across Every Sector",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Voice AI
    </>
  ),
  items: [
    { icon: Cpu, label: "Artificial Intelligence" },
    { icon: Radio, label: "Telecommunications" },
    { icon: Car, label: "Automotive" },
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Landmark, label: "Banking" },
    { icon: Umbrella, label: "Insurance" },
    { icon: ShoppingCart, label: "Retail" },
    { icon: GraduationCap, label: "Education" },
    { icon: Building2, label: "Government" },
    { icon: Newspaper, label: "Media" },
    { icon: Smartphone, label: "Consumer Electronics" },
    { icon: Wifi, label: "Smart Home Technology" },
  ],
};

export const voiceBusinessBenefits = {
  heading: "Measurable Impact on Every Voice AI Program",
  kpis: [
    { value: 50, suffix: "+", label: "Languages" },
    { value: 10, suffix: "M+", label: "Voice Samples" },
    { value: 99, suffix: ".5%", label: "Validation Accuracy" },
    { value: 40, suffix: "%", label: "Faster AI Training" },
  ],
  benefits: [
    { icon: Globe2, title: "Broader Market Reach", description: "Recognition models that work across the accents your users actually speak." },
    { icon: TrendingUp, title: "Higher Recognition Accuracy", description: "Models trained on validated, real-world speech instead of clean lab audio." },
    { icon: ShieldCheck, title: "Reduced Model Bias", description: "Balanced demographic coverage across region, age, and gender." },
    { icon: Zap, title: "Faster Time-To-Market", description: "Annotated, validated datasets ready to train on delivery." },
    { icon: Sparkles, title: "Better User Experience", description: "Voice products that understand real speakers, not just a demo script." },
    { icon: Lock, title: "Global Compliance", description: "Consent-managed collection that meets regional data protection law." },
  ],
};

export const voiceWhyUs = {
  heading: "Six Reasons Voice AI Teams Trust Us",
  items: [
    { icon: Languages, title: "Multilingual Experts", description: "Native-speaking teams across 50+ languages and dialects.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Globe2, title: "Global Recruitment", description: "Participant sourcing across 30+ countries and every demographic.", gradient: "from-violet-500 to-purple-400" },
    { icon: ShieldCheck, title: "Enterprise Security", description: "Consent-managed, encrypted handling of every voice recording.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Layers, title: "Scalable Delivery", description: "From a pilot batch to millions of samples on the same pipeline.", gradient: "from-orange-500 to-amber-400" },
    { icon: Sparkles, title: "Speech AI Expertise", description: "Teams who understand what ASR and TTS models actually need.", gradient: "from-rose-500 to-pink-400" },
    { icon: Users2, title: "Flexible Engagement", description: "One-off collections or ongoing programs, scoped to your roadmap.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const voiceUseCases = {
  heading: "Voice Datasets Built for Real AI Products",
  description: "From wake-word detection to biometric authentication, our speech data solutions help voice AI teams ship models that work in the real world.",
  items: [
    { id: "voice-assistant-training", icon: Bot, title: "Voice Assistant Training", description: "Wake word and command datasets recorded across devices, rooms, and background conditions.", outcome: "Millions of speech samples across 30+ countries", href: "#contact" },
    { id: "automotive-voice-commands", icon: Car, title: "Automotive Voice Command Systems", description: "In-cabin speech data collected for road noise, cadence, and hands-free interaction.", outcome: "Voice commands trained for real driving conditions", href: "#contact" },
    { id: "healthcare-voice-documentation", icon: Stethoscope, title: "Healthcare Voice Documentation", description: "Clinical speech datasets built for diagnostic and documentation AI models.", outcome: "Validated speech data for regulated healthcare AI", href: "#contact" },
    { id: "multilingual-conversational-ai", icon: Languages, title: "Multilingual Conversational AI", description: "Voice data gathered across 50+ languages and regional accent variants.", outcome: "50+ languages supported from one pipeline", href: "#contact" },
    { id: "voice-biometric-authentication", icon: Fingerprint, title: "Voice Biometric Authentication", description: "Speaker-labeled datasets built for secure, hands-free voice authentication.", outcome: "Speaker verification models trained on labeled voiceprints", href: "#contact" },
  ],
};

export const voiceCaseStudy = {
  heading: "Helping Global Enterprises Build Smarter Voice AI",
  description: "A global voice AI platform partnered with Bigwigs to collect and annotate speech data across dozens of markets — powering a recognition model that understands real-world accents.",
  stats: [
    { value: "30+", label: "Countries" },
    { value: "50+", label: "Languages" },
    { value: "Millions", label: "Speech Samples" },
  ],
  ctaHref: "/case-studies",
  chartLabels: { primary: "Voice AI KPIs", secondary: "Speaker Analytics", trend: "Recognition Trend" },
};

export const voiceProcess = {
  heading: "Six Stages Between Requirement and a Trained Voice Model",
  steps: [
    { icon: Search, title: "Requirement Analysis", description: "Target languages, accents, and use case defined up front." },
    { icon: Users, title: "Participant Recruitment", description: "Speakers sourced to match your demographic and regional spec." },
    { icon: Mic, title: "Speech Data Collection", description: "Recordings captured across devices and real-world environments." },
    { icon: ClipboardCheck, title: "Annotation & Labeling", description: "Segmentation, diarization, and intent labeled on every file." },
    { icon: ShieldCheck, title: "Quality Assurance", description: "Audio, metadata, and format validated against enterprise benchmarks." },
    { icon: PackageCheck, title: "Delivery & Support", description: "Final dataset packaged and delivered in your required format." },
  ],
  desktopColumnsClassName: "grid-cols-6",
};

export const voiceFaq = {
  items: [
    {
      question: "Can you collect regional accents?",
      answer: "Yes. We recruit native speakers by region, dialect, age, and gender so your dataset reflects the real accent diversity of your target market.",
    },
    {
      question: "Can you support enterprise-scale projects?",
      answer: "Yes. Our pipelines scale from pilot batches to millions of speech samples across 30+ countries without changing your delivery format.",
    },
    {
      question: "Do you provide annotated datasets?",
      answer: "Every dataset can include segmentation, speaker diarization, timestamps, intent, and emotion annotation — delivered alongside the raw audio.",
    },
    {
      question: "How do you ensure recording quality?",
      answer: "Every file passes automated audio-quality scoring plus human review for noise, speaker verification, language accuracy, and format compliance before delivery.",
    },
  ],
};

export const voiceBottomCta = {
  icon: Mic,
  heading: <>Build Intelligent Voice AI With Enterprise Speech Data</>,
  description:
    "Whether you're developing voice assistants, speech recognition platforms, multilingual conversational AI, or automotive voice systems, Bigwigs Technologies delivers secure, scalable, and high-quality speech datasets for enterprise AI innovation.",
  primaryAction: { label: "Start Your Speech AI Project", href: "#contact" },
  secondaryAction: { label: "Contact Our Voice Data Specialists", href: "#contact", showArrow: true },
};
