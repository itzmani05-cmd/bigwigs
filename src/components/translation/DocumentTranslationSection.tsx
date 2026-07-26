import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { documentTypes } from "./documentTypesData";

export default function DocumentTranslationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-12">
          {/* LEFT — flat document workflow illustration */}
          <div className="mx-auto flex w-full max-w-[440px] items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-8">
            <div className="relative">
              <span className="absolute -left-2 -top-2 h-16 w-12 rounded-lg border border-slate-200 bg-slate-50" />
              <span className="absolute -left-1 -top-1 h-16 w-12 rounded-lg border border-slate-200 bg-white" />
              <span className="relative flex h-16 w-12 flex-col items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white">
                <FileText size={16} className="text-slate-400" />
              </span>
            </div>

            <ArrowRight size={18} className="shrink-0 text-slate-300" />

            <div className="flex flex-col items-center gap-2 rounded-lg border border-brand-blue-200 bg-brand-blue-50 px-4 py-3">
              <CheckCircle2 size={18} className="text-brand-blue-600" />
              <span className="text-[10px] font-semibold text-brand-blue-700">Translated &amp; Reviewed</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Document Translation
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Accurate translation for critical business documents
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Every document is translated by a subject-matter linguist, then reviewed
              against your terminology and formatting requirements before delivery.
            </p>

            <ChipList items={documentTypes} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
