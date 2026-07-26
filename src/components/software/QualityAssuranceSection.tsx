import { Activity } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { qaMetrics } from "./qaData";

export default function QualityAssuranceSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[35%_65%] lg:gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Quality Assurance
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Tested before it reaches your users
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
              Every release runs through automated and manual checks — security,
              performance, and regression — before it ever ships.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Activity size={15} className="text-slate-600" />
              <span className="text-sm font-semibold text-orange-500">QA Dashboard</span>
              <span className="ml-auto flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1 text-[10px] font-medium text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-500" />
                Live
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-px border border-slate-100 bg-slate-100 sm:grid-cols-3">
              {qaMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="bg-white p-3.5">
                    <Icon size={15} className="text-slate-400" strokeWidth={1.75} />
                    <span className="mt-2 block text-xs font-semibold text-slate-900">{metric.label}</span>
                    <span className="mt-0.5 block text-[10px] font-medium text-slate-400">{metric.status}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
