import { ClipboardCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import { annotationQualityFeatures } from "./annotationQualityData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function AnnotationQualitySection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat annotation overlay illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <ClipboardCheck size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Annotation Review</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Approved</span>
            </div>
            <div className="relative flex h-56 items-center justify-center bg-slate-50">
              <span className="absolute left-[18%] top-[22%] h-16 w-20 rounded border-2 border-dashed border-brand-blue-500/70" />
              <span className="absolute left-[42%] top-[46%] h-14 w-14 rounded-full border-2 border-dashed border-orange-400/70" />
              <svg className="absolute right-[16%] top-[30%] h-16 w-16" viewBox="0 0 100 100" fill="none">
                <polygon points="50,5 95,35 80,90 20,90 5,35" stroke="#F97316" strokeWidth="3" strokeDasharray="6 4" />
              </svg>
              <span className="absolute bottom-3 left-3 rounded bg-white px-2 py-1 text-[9px] font-semibold text-slate-500 shadow-sm">
                3 objects labeled
              </span>
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">Guideline compliance: 100%</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Annotation Quality Review
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Validate every annotation with precision
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Every box, mask, and polygon is checked against your guideline before it ever
              reaches your model — so label noise never becomes model noise.
            </p>

            <ChipList items={annotationQualityFeatures} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
