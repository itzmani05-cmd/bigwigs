import { Smile } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import { emotionCategories } from "./emotionData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function EmotionRecognitionSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500">
              <Smile size={20} strokeWidth={1.75} />
            </span>
          </span>
          <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Emotion Recognition
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Voice data tagged with the tone behind it
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Emotion-labeled speech gives sentiment-aware conversational AI a signal text alone
            can&apos;t provide.
          </p>
        </div>

        {/* flat emotion spectrum illustration */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-brand-blue-500 via-orange-400 to-red-400" />
          <div className="mt-2 flex justify-between text-[10px] font-medium text-slate-400">
            <span>Calm</span>
            <span>Neutral</span>
            <span>Intense</span>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <ChipList items={emotionCategories} tone="blue" className="justify-center" />
        </div>
      </Container>
    </section>
  );
}
