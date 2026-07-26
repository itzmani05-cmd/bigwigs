import { ArrowRight, Globe2 } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const CASE_STATS = [
  { value: "25", label: "Countries" },
  { value: "50+", label: "Languages" },
  { value: "3x", label: "Faster Market Expansion" },
];

export default function TranslationCaseStudy() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat globe + localized site preview */}
          <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-8">
            <div
              className="h-40 w-40 rounded-full opacity-70"
              style={{
                backgroundImage: "radial-gradient(#2563EB 1.4px, transparent 1.4px)",
                backgroundSize: "10px 10px",
                WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 75%)",
                maskImage: "radial-gradient(circle, black 55%, transparent 75%)",
              }}
            />
            <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
              <Globe2 size={12} className="text-brand-blue-600" />
              <span className="text-[10px] font-semibold text-slate-700">25 markets live</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Case Study
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Helping businesses reach global customers
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              A global company partnered with Bigwigs to localize its website and product
              across 25 countries — without slowing down its release cycle.
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
