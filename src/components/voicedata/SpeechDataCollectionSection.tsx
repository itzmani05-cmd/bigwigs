import { Mic, UploadCloud } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import { speechTypes } from "./speechTypesData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const WAVEFORM_BARS = [22, 40, 28, 58, 44, 68, 34, 52, 26, 46, 36, 62, 28, 48];

export default function SpeechDataCollectionSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat recorder + upload illustration */}
          <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Mic size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Recording Session</span>
              <span className="ml-auto rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-semibold text-red-500">Live</span>
            </div>
            <div className="flex h-40 items-end gap-1 bg-slate-50 px-5 py-6">
              {WAVEFORM_BARS.map((h, i) => (
                <span key={i} className="w-full rounded-t bg-brand-blue-500/70" style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">3 participants · 00:14:22 captured</span>
              <span className="flex items-center gap-1 rounded-full border border-slate-200 px-2 py-1 text-[9px] font-semibold text-slate-500">
                <UploadCloud size={11} />
                Synced to Cloud
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Speech Data Collection
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Capture high-quality speech data at scale
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              From scripted read speech to unscripted conversation, every session is recorded to
              spec, uploaded securely, and ready for annotation the same day.
            </p>

            <ChipList items={speechTypes} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
