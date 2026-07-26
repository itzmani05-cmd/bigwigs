import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { salesHrFinancePillars } from "./salesHrFinanceData";

export default function SalesHrFinanceAgentsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-500">
            Sales · HR · Finance Agents
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Department agents that do the work, not just track it
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {salesHrFinancePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-600">
                <pillar.icon size={18} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">{pillar.title}</h3>
              <ChipList items={pillar.items} className="mt-4" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
