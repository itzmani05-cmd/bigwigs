import { ArrowRight, Database } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const CASE_STATS = [
  { value: "50+", label: "Countries" },
  { value: "Millions", label: "Images Collected" },
  { value: "Thousands", label: "Hours Of Audio" },
];

export default function DataCollectionCaseStudy() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat multi-modal dataset dashboard mockup */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                <Database size={12} className="text-brand-blue-500" />
                Dataset Overview
              </span>
              <span className="rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Delivered</span>
            </div>
            <div className="grid grid-cols-3 gap-px bg-slate-100">
              {["Images", "Speech", "Documents"].map((label) => (
                <div key={label} className="bg-white px-3 py-4 text-center">
                  <span className="text-[10px] font-medium text-slate-500">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex h-20 items-end gap-1 bg-slate-50 px-5 py-4">
              {[30, 50, 40, 70, 55, 80, 45, 65, 35, 60].map((h, i) => (
                <span key={i} className="w-full rounded-t bg-brand-blue-500/60" style={{ height: `${h * 0.7}px` }} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Case Study
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Helping global enterprises build reliable AI datasets
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              A global AI platform partnered with Bigwigs to source, annotate, and validate image,
              speech, and document data across dozens of markets — on one delivery pipeline.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-slate-200 pt-6">
              {CASE_STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="block text-2xl font-semibold tracking-tight text-slate-900">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <MagneticButton
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 select-none"
              >
                <span>View Case Study</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
