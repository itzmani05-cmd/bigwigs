import { CheckCircle2 } from "lucide-react";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll";
import applyImage from "@/assests/aboutRightSide.png";

const FEATURES = [
  "Global Projects",
  "Career Growth",
  "Flexible Work Culture",
  "Learning & Certification Support",
  "AI & Emerging Technologies",
];

export default function ApplyIntro() {
  return (
    <div className="lg:sticky lg:top-18">
      <ScrollReveal direction="left" duration={0.6} delay={0.1}>
        <span className="text-xs pb-9 font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          CAREERS AT BIGWIGS
        </span>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Build Your Future With Bigwigs
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-500">
          Become part of an innovative team building intelligent AI solutions
          for global enterprises. We believe in continuous learning,
          collaboration, and creating technology that makes an impact.
        </p>

        <ScrollStagger as="ul" staggerDelay={0.06} className="mt-6 flex flex-col gap-3">
          {FEATURES.map((feature) => (
            <ScrollStaggerItem key={feature} as="li" direction="left" distance={20} className="flex items-center gap-1">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-500">
                <CheckCircle2 size={15} strokeWidth={2} />
              </span>
              <span className="text-sm font-medium text-slate-700">{feature}</span>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </ScrollReveal>
    </div>
  );
}
