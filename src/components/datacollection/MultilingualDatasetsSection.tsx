import { Globe2 } from "lucide-react";
import Container from "@/components/ui/Container";
import StatCounter from "@/components/home/StatCounter";
import ChipList from "@/components/servicePage/ChipList";
import { multilingualFeatures, internationalLanguages, indianLanguages } from "./multilingualData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function MultilingualDatasetsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Multilingual Datasets
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            One dataset practice, every language your model needs
          </h2>

          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-slate-200 px-4 py-2">
            <Globe2 size={15} className="text-brand-blue-600" />
            <span className="text-2xl font-semibold tracking-tight text-slate-900">
              <StatCounter value={50} suffix="+" />
            </span>
            <span className="text-xs font-medium text-slate-500">Languages Supported</span>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <ChipList items={multilingualFeatures} className="justify-center" />
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              International Languages
            </h3>
            <ChipList items={internationalLanguages} className="mt-4" />
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Indian Languages
            </h3>
            <ChipList items={indianLanguages} tone="orange" className="mt-4" />
          </div>
        </div>
      </Container>
    </section>
  );
}
