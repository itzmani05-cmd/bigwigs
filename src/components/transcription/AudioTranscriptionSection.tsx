import { Mic } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { audioUseCases } from "./audioUseCasesData";

const WAVEFORM_BARS = [24, 42, 30, 60, 45, 70, 36, 55, 28, 48, 38, 65, 30, 50];

export default function AudioTranscriptionSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[35%_65%] lg:gap-12">
          {/* LEFT */}
          <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Mic size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Recording</span>
              <span className="ml-auto rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-semibold text-red-500">Live</span>
            </div>
            <div className="flex h-40 items-end gap-1 bg-slate-50 px-5 py-6">
              {WAVEFORM_BARS.map((h, i) => (
                <span key={i} className="w-full rounded-t bg-brand-blue-500/70" style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-px bg-slate-100">
              <div className="bg-white px-4 py-3">
                <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Interview</span>
                <p className="mt-1 text-[11px] leading-snug text-slate-500">&ldquo;Let&apos;s start with your background...&rdquo;</p>
              </div>
              <div className="bg-white px-4 py-3">
                <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Podcast</span>
                <p className="mt-1 text-[11px] leading-snug text-slate-500">Speaker 1 · Speaker 2 identified</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Audio Transcription
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Convert spoken audio into accurate text
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Every recording is transcribed with speaker labeling and timestamps, then reviewed
              by a human editor — so meetings, interviews, and calls become searchable text you
              can trust.
            </p>

            <ChipList items={audioUseCases} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
