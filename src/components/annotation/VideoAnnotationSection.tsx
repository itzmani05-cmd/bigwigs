import { Play } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { videoAnnotationFeatures } from "./videoAnnotationData";

export default function VideoAnnotationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-8">
          {/* LEFT — flat frame-by-frame tracking illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative flex h-48 items-center justify-center bg-slate-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900">
                <Play size={18} className="ml-0.5" />
              </span>
              <span className="absolute left-[18%] top-[24%] h-10 w-12 rounded border-2 border-dashed border-brand-blue-400/80" />
              <span className="absolute right-[20%] bottom-[22%] h-9 w-11 rounded border-2 border-dashed border-orange-400/80" />
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
                <path d="M28 32 L55 50 L70 70" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
              </svg>
              <span className="absolute bottom-3 right-3 rounded bg-white/90 px-2 py-0.5 text-[9px] font-semibold text-slate-700">
                2 tracks active
              </span>
            </div>
            <div className="px-4 py-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className={`h-4 flex-1 rounded-sm ${i > 8 && i < 18 ? "bg-brand-blue-200" : "bg-slate-100"}`} />
                ))}
              </div>
              <span className="mt-2 block text-[10px] font-medium text-slate-400">Tracked segment · 00:03:04 – 00:03:22</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Video Annotation
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Motion labeled frame by frame, object by object
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Objects tracked across every frame with consistent IDs — so your model learns
              motion, not just snapshots.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={videoAnnotationFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" align="center" iconShape="circle" />
        </div>
      </Container>
    </section>
  );
}
