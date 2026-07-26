import { Camera } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { imageAnnotationFeatures } from "./imageAnnotationData";

export default function ImageAnnotationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-6">
          {/* LEFT — flat annotation overlay illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Camera size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Object Detection</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">4 objects</span>
            </div>
            <div className="relative flex h-56 items-center justify-center bg-slate-50">
              <span className="absolute left-[16%] top-[20%] h-16 w-20 rounded border-2 border-dashed border-brand-blue-500/70" />
              <span className="absolute left-[42%] top-[42%] h-14 w-14 rounded-full border-2 border-dashed border-orange-400/70" />
              <svg className="absolute right-[16%] top-[26%] h-16 w-16" viewBox="0 0 100 100" fill="none">
                <polygon points="50,5 95,35 80,90 20,90 5,35" stroke="#F97316" strokeWidth="3" strokeDasharray="6 4" />
              </svg>
              <span className="absolute bottom-[16%] left-[30%] h-2 w-2 rounded-full bg-brand-blue-600" />
              <span className="absolute bottom-[22%] left-[36%] h-2 w-2 rounded-full bg-brand-blue-600" />
              <span className="absolute bottom-3 right-3 rounded bg-white px-2 py-1 text-[9px] font-semibold text-slate-500 shadow-sm">
                Live preview
              </span>
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">Bounding box · polygon · mask · keypoints</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Image Annotation
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Train computer vision with precision annotation
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Every object, boundary, and landmark labeled to your taxonomy — with the
              annotation type that fits the model you&apos;re training.
            </p>

            <ChipList items={imageAnnotationFeatures} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
