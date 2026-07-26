import { TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import { continuousImprovementItems } from "./continuousImprovementData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function ContinuousImprovementSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500">
              <TrendingUp size={20} strokeWidth={1.75} />
            </span>
          </span>
          <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Continuous Improvement
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Quality that compounds, project after project
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <IconGrid items={continuousImprovementItems} columnsClassName="grid-cols-2 sm:grid-cols-4" align="center" />
        </div>
      </Container>
    </section>
  );
}
