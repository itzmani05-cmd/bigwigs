import { Wand2 } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import { preparationSteps } from "./dataPreparationData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const SCORES = [
  { label: "Deduplication", value: 100 },
  { label: "Class Balance", value: 97 },
  { label: "Validation Pass Rate", value: 99 },
];

export default function DataPreparationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat quality scoring dashboard */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Quality Scoring</span>
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
          </div>

          {/* RIGHT */}
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-600">
              <Wand2 size={18} strokeWidth={1.75} />
            </span>
            <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Data Preparation
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Raw data, refined into training-ready datasets
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Every batch is cleaned, deduplicated, balanced, and enriched before it&apos;s
              scored and validated for delivery.
            </p>

            <ChipList items={preparationSteps} tone="blue" className="mt-6" />
          </div>
        </div>
      </Container>
    </section>
  );
}
