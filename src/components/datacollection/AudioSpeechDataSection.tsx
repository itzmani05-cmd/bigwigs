import { Mic } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import { audioUseCases } from "./audioUseCasesData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const WAVEFORM_BARS = [24, 42, 30, 60, 45, 70, 36, 55, 28, 48, 38, 65];

export default function AudioSpeechDataSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat mic + waveform illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Mic size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Speech Recognition</span>
              <span className="ml-auto rounded-full border border-slate-200 px-2 py-0.5 text-[9px] font-semibold text-slate-500">EN → 50+</span>
            </div>
            <div className="flex h-40 items-end gap-1 bg-slate-50 px-5 py-6">
              {WAVEFORM_BARS.map((h, i) => (
                <span key={i} className="w-full rounded-t bg-brand-blue-500/70" style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">4 speakers · 12 languages detected</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Audio &amp; Speech Data
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              High-quality audio for speech AI
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Recorded across devices, accents, and background conditions — so recognition and
              voice models perform where they actually ship.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={audioUseCases} columnsClassName="grid-cols-2 sm:grid-cols-4" align="center" />
        </div>
      </Container>
    </section>
  );
}
