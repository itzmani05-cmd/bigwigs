import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const CASE_STATS = [
  { value: "99.5%", label: "Accuracy" },
  { value: "60%", label: "Less Rework" },
  { value: "Millions", label: "Validated Data Points" },
];

export default function DataQACaseStudy() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat quality audit mockup */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Quality Audit
              </span>
              <span className="rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">
                Passed
              </span>
            </div>
            <div
              className="mx-auto my-4 flex h-24 w-24 items-center justify-center rounded-full"
              style={{ background: "conic-gradient(#2563EB 358deg, #E2E8F0 358deg 360deg)" }}
            >
              <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white">
                <span className="text-lg font-semibold text-slate-900">99.5%</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4">
              {["Annotation reviewed", "Peer verified", "Senior QA sign-off"].map((step) => (
                <div key={step} className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={14} className="text-brand-blue-500" />
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Case Study
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Improving AI accuracy through enterprise QA
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              An enterprise AI team partnered with Bigwigs to run multi-level validation across
              its annotation pipeline — cutting rework and raising model accuracy in the same
              quarter.
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
                <span>Read Case Study</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
