import { BookOpen, Tablet, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { ebookFormats } from "./ebookFormatsData";

export default function EbookConversionSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat book-to-reader transformation illustration */}
          <div className="mx-auto flex w-full max-w-[440px] items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-white px-6 py-10">
            <span className="flex h-24 w-20 items-center justify-center rounded-md border border-slate-200 bg-slate-50">
              <BookOpen size={24} className="text-slate-400" strokeWidth={1.5} />
            </span>
            <div className="flex flex-1 items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-px flex-1 border-t border-dashed border-slate-300" />
              ))}
              <ArrowRight size={14} className="shrink-0 text-slate-300" />
            </div>
            <span className="flex h-24 w-16 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white p-2">
              <Tablet size={18} className="text-brand-blue-600" strokeWidth={1.5} />
              <span className="h-1 w-8 rounded-full bg-slate-100" />
              <span className="h-1 w-6 rounded-full bg-slate-100" />
              <span className="rounded bg-brand-blue-50 px-1.5 py-0.5 text-[8px] font-semibold text-brand-blue-600">EPUB</span>
            </span>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              eBook Conversion
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Convert publications for every digital platform
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Manuscripts and print files converted into responsive, reflowable eBooks — tested
              across readers before they ever reach your audience.
            </p>

            <ChipList items={ebookFormats} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
