import { Network } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { enterpriseModules } from "./enterpriseSolutionsData";

export default function EnterpriseSolutionsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
            Enterprise Solutions
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            One core system. Every department connected.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Enterprise platforms built around a single source of truth — not six systems that don't talk to each other.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="mx-auto flex w-fit items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-5 py-3">
            <Network size={16} className="text-slate-500" />
            <span className="text-sm font-semibold text-slate-900">Enterprise Core</span>
          </div>

          <div className="relative mx-auto hidden h-10 max-w-3xl lg:block">
            <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-slate-200" />
            <div className="absolute left-[8%] right-[8%] top-5 h-px bg-slate-200" />
            {enterpriseModules.map((_, i) => (
              <span
                key={i}
                className="absolute top-5 h-5 w-px  bg-slate-200"
                style={{ left: `${8 + i * (84 / (enterpriseModules.length - 1))}%` }}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-0">
            <IconGrid
              items={enterpriseModules.map((mod) => ({ icon: mod.icon, title: mod.label }))}
              columnsClassName="grid-cols-2 sm:grid-cols-3"
              align="center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
