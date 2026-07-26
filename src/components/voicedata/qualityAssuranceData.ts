import { Volume2, UserCheck, Globe2, FileCheck, CheckSquare, Layers, Gauge } from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const qualityAssuranceItems: IconGridItem[] = [
  { icon: Gauge, title: "Audio Quality Score", description: "Every file scored against enterprise audio-quality benchmarks." },
  { icon: Volume2, title: "Noise Detection", description: "Background noise flagged and filtered before delivery." },
  { icon: UserCheck, title: "Speaker Verification", description: "Recorded speakers confirmed against participant metadata." },
  { icon: Globe2, title: "Language Verification", description: "Language and dialect confirmed by native reviewers." },
  { icon: FileCheck, title: "Metadata Validation", description: "Demographics, consent, and device metadata checked for completeness." },
  { icon: CheckSquare, title: "Format Compliance", description: "Sample rate, encoding, and file structure matched to spec." },
  { icon: Layers, title: "Dataset Consistency", description: "Every batch checked for consistency before final packaging." },
];
