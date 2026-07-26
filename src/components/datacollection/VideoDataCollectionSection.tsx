import { Play } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import { videoUseCases } from "./videoUseCasesData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function VideoDataCollectionSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat video/motion illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative flex h-48 items-center justify-center bg-slate-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900">
                <Play size={18} className="ml-0.5" />
              </span>
              <span className="absolute left-3 top-3 h-8 w-10 rounded border-2 border-dashed border-orange-400/70" />
              <span className="absolute right-8 bottom-8 h-6 w-8 rounded border-2 border-dashed border-brand-blue-400/70" />
              <span className="absolute bottom-3 right-3 rounded bg-white/90 px-2 py-0.5 text-[9px] font-semibold text-slate-700">
                2 objects tracked
              </span>
            </div>
            <div className="px-4 py-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className={`h-4 flex-1 rounded-sm ${i > 6 && i < 14 ? "bg-orange-200" : "bg-slate-100"}`} />
                ))}
              </div>
              <span className="mt-2 block text-[10px] font-medium text-slate-400">Motion segment · 00:02:08 – 00:02:19</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Video Data Collection
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Motion, context, and scale — captured on video
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              From autonomous driving to warehouse robotics, footage is captured and timestamped
              for models that need to understand movement, not just a single frame.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={videoUseCases} columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" align="center" iconShape="circle" />
        </div>
      </Container>
    </section>
  );
}
