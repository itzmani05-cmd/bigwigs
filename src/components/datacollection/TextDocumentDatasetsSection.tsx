import { ScanLine } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import IconGrid from "@/components/servicePage/IconGrid";
import { documentTypes, textDocumentFeatures } from "./textDocumentData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function TextDocumentDatasetsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat OCR / document scanner illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                <ScanLine size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Document Scanner</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">OCR: 99.1%</span>
            </div>
            <div className="flex flex-col gap-2 bg-slate-50 p-5">
              {[
                { w: "90%" }, { w: "70%" }, { w: "82%" }, { w: "60%" }, { w: "76%" },
              ].map((line, i) => (
                <span key={i} className="h-2.5 rounded-full bg-white border border-slate-200" style={{ width: line.w }} />
              ))}
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">Structured fields extracted &amp; tagged</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Text &amp; Document Datasets
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Structured data from unstructured documents
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Every document is digitized, tagged, and validated — ready for training document
              AI and knowledge-grounded language models.
            </p>

            <ChipList items={documentTypes} tone="blue" className="mt-6" />
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={textDocumentFeatures} columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" />
        </div>
      </Container>
    </section>
  );
}
