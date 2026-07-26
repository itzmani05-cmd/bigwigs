import { ScanLine } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { digitizationFeatures } from "./digitizationData";

export default function ContentDigitizationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[50%_50%] lg:gap-7">
          {/* LEFT — flat scanner / OCR illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <ScanLine size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Archive Scan</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">OCR: 99.2%</span>
            </div>
            <div className="relative flex h-48 items-center justify-center bg-slate-50">
              <span className="h-32 w-24 rounded border border-slate-200 bg-white p-2">
                <span className="flex flex-col gap-1.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} className="h-1 rounded-full bg-slate-100" />
                  ))}
                </span>
              </span>
              <span className="absolute left-0 top-0 h-1 w-full animate-pulse bg-brand-blue-500/70" />
              <span className="absolute bottom-3 right-3 rounded bg-white px-2 py-1 text-[9px] font-semibold text-slate-500 shadow-sm">
                Extracting text…
              </span>
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">1,204 pages · metadata tagged</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Content Digitization
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Digitize legacy content with precision
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Physical archives and out-of-print titles scanned, enhanced, and converted into
              searchable, structured digital assets.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={digitizationFeatures} columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </Container>
    </section>
  );
}
