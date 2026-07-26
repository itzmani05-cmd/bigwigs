import { ArrowRight, Camera } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const CASE_STATS = [
  { value: "50M+", label: "Objects Labeled" },
  { value: "99%", label: "Quality Score" },
  { value: "60%", label: "Reduced Training Time" },
];

export default function AnnotationCaseStudy() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat computer vision dashboard mockup */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                <Camera size={12} className="text-brand-blue-500" />
                Computer Vision Analytics
              </span>
              <span className="rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Deployed</span>
            </div>
            <div className="relative flex h-32 items-center justify-center bg-slate-50">
              <span className="absolute left-[20%] top-[22%] h-14 w-16 rounded border-2 border-dashed border-brand-blue-500/70" />
              <span className="absolute right-[18%] bottom-[20%] h-10 w-12 rounded border-2 border-dashed border-orange-400/70" />
            </div>
            <div className="grid grid-cols-3 gap-px bg-slate-100">
              {["50M+ Objects", "99% Quality", "60% Faster"].map((label) => (
                <div key={label} className="bg-white px-3 py-3 text-center">
                  <span className="text-[10px] font-medium text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Case Study
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Helping enterprises build better AI models
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              An enterprise AI team partnered with Bigwigs to annotate and validate its
              computer vision dataset — cutting training time while raising model accuracy.
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
