import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { dataLabelingSteps } from "./dataLabelingData";

const SCORES = [
  { label: "Label Accuracy", value: 99 },
  { label: "Duplicate-Free", value: 100 },
  { label: "Metadata Completeness", value: 98 },
];

export default function DataLabelingValidationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-7">
          {/* LEFT — flat quality dashboard */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Dataset Quality</span>
            <div className="mt-4 flex flex-col gap-4">
              {SCORES.map((score) => (
                <div key={score.label}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-600">{score.label}</span>
                    <span className="font-semibold text-slate-900">{score.value}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100">
                    <div className="h-1.5 rounded-full bg-brand-blue-500" style={{ width: `${score.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
              <CheckCircle2 size={14} className="text-brand-blue-500" />
              Dataset structured &amp; ready for delivery
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Data Labeling &amp; Validation
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Every dataset cleaned, checked, and structured
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Raw annotations are cleaned, deduplicated, and validated before they&apos;re ever
              structured into your final delivery format.
            </p>

            <ChipList items={dataLabelingSteps} tone="blue" className="mt-6" />
          </div>
        </div>
      </Container>
    </section>
  );
}
