import { ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import { qualityAssuranceItems } from "./qualityAssuranceData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const SCORES = [
  { label: "Audio Quality", value: 98 },
  { label: "Metadata Completeness", value: 100 },
  { label: "Format Compliance", value: 99 },
];

export default function QualityAssuranceSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500">
              <ShieldCheck size={20} strokeWidth={1.75} />
            </span>
          </span>
          <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Quality Assurance
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Every dataset validated before it reaches you
          </h2>
        </div>

        {/* flat dashboard illustration */}
        <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-4">
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

        <div className="mx-auto mt-10 max-w-5xl">
          <IconGrid items={qualityAssuranceItems} columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </Container>
    </section>
  );
}
