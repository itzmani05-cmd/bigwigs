import { FileCode } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { xmlStandards, xmlContentFeatures } from "./xmlContentData";

export default function XmlStructuredContentSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[50%_50%] lg:gap-4">
          {/* LEFT — flat XML tag tree illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <FileCode size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Structured Content</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Valid</span>
            </div>
            <div className="flex flex-col gap-1.5 bg-slate-50 p-5 font-mono text-[10px] leading-relaxed text-slate-500">
              <span>&lt;article&gt;</span>
              <span className="pl-4 text-brand-blue-600">&lt;title&gt;<span className="text-slate-400">Research Study</span>&lt;/title&gt;</span>
              <span className="pl-4">&lt;section&gt;</span>
              <span className="pl-8 text-orange-500">&lt;para&gt;<span className="text-slate-400">…</span>&lt;/para&gt;</span>
              <span className="pl-4">&lt;/section&gt;</span>
              <span>&lt;/article&gt;</span>
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <ChipList items={xmlStandards} tone="blue" />
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              XML &amp; Structured Content
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Content structured for reuse, not just for reading
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Every document is tagged to standard schemas — so content flows cleanly into any
              downstream system, format, or platform.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={xmlContentFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" align="center" />
        </div>
      </Container>
    </section>
  );
}
