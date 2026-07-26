import { Play, Captions } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { videoUseCases } from "./videoUseCasesData";

export default function VideoTranscriptionSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[55%_45%] lg:gap-12">
          {/* LEFT — flat video player illustration */}
           <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Video Transcription
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Every scene, spoken word, and caption — captured
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Speech recognition and a timeline-synced editor produce transcripts and captions
              that stay frame-accurate from the first cut to final delivery.
            </p>
          </div>

          {/* RIGHT */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative flex h-48 items-center justify-center bg-slate-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900">
                <Play size={18} className="ml-0.5" />
              </span>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white">
                Every conversation, clearly documented.
              </span>
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-slate-700">
                <Captions size={10} />
                CC
              </span>
            </div>
            <div className="px-4 py-3">
              <div className="h-1.5 w-full rounded-full bg-slate-100">
                <div className="h-1.5 w-[38%] rounded-full bg-brand-blue-500" />
              </div>
              <div className="mt-3 flex items-center gap-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-4 flex-1 rounded-sm ${i > 4 && i < 10 ? "bg-brand-blue-200" : "bg-slate-100"}`}
                  />
                ))}
              </div>
              <span className="mt-2 block text-[10px] font-medium text-slate-400">Subtitle segment · 00:04:12 – 00:04:18</span>
            </div>
          </div>
         
        </div>

        <div className="mt-10">
          <IconGrid items={videoUseCases} columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" align="center" iconShape="circle" />
        </div>
      </Container>
    </section>
  );
}
