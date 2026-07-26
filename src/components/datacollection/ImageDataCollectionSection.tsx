import { Camera } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import { imageUseCases } from "./imageUseCasesData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function ImageDataCollectionSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat camera capture grid illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Camera size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Image Capture</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Verified</span>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-slate-50 p-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="relative flex aspect-square items-center justify-center rounded-lg border border-slate-200 bg-white">
                  <span className="h-5 w-5 rounded-md border-2 border-dashed border-brand-blue-500/50" />
                </span>
              ))}
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">2,480 images · 9 categories captured</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Image Data Collection
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Capture diverse images for smarter AI models
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Images sourced across lighting, angles, and environments — so your computer vision
              model sees the real world, not just the studio.
            </p>

            <ChipList items={imageUseCases} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
