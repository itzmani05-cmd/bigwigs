import { ScanLine } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { ocrDocumentFeatures } from "./ocrDocumentData";

export default function OcrDocumentAiSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat document / OCR illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                <ScanLine size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Document Annotation</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Invoice</span>
            </div>
            <div className="flex flex-col gap-2 bg-slate-50 p-5">
              <span className="h-3 w-1/2 rounded border-2 border-dashed border-brand-blue-500/60 bg-white" />
              <span className="h-2.5 w-2/3 rounded border-2 border-dashed border-orange-400/60 bg-white" />
              <div className="mt-1 grid grid-cols-3 gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="h-6 rounded border border-slate-200 bg-white" />
                ))}
              </div>
              <span className="mt-1 h-2 w-1/3 self-end rounded border-2 border-dashed border-brand-blue-500/60 bg-white" />
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">Fields, table, and total extracted</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              OCR &amp; Document AI
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Structured labels for unstructured documents
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Invoices, forms, and tables labeled at the field level — training document AI to
              extract, not just read.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={ocrDocumentFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3" align="center" />
        </div>
      </Container>
    </section>
  );
}
