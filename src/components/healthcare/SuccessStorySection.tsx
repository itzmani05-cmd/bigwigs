import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import successStory from "@/assests/healthcare/successStory.png";

const STORY_STATS = [
  { value: "40%", label: "Faster diagnosis support" },
  { value: "98%", label: "Annotation consistency" },
  { value: "Millions", label: "Medical images processed" },
];

export default function SuccessStorySection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — radiology review dashboard */}
          <div className="mx-auto w-full max-w-[440px]">
            <img
              src={successStory}
              alt="Radiology review dashboard showing an annotated scan region with 98% confidence and a signed-off QA checklist"
              className="w-full h-auto rounded-2xl border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            />
          </div>

          {/* RIGHT */}
          <div className="mx-auto max-w-[440px] lg:max-w-none">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Success Story
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Helping a healthcare organization reduce diagnostic turnaround time
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              AI-assisted medical image annotation gave a radiology team a consistent,
              audit-ready pipeline — cutting the time between scan and diagnosis support.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-slate-200 pt-6">
              {STORY_STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="block text-2xl font-semibold tracking-tight text-blue-500">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <MagneticButton
                href="/case-studies/radiology-triage-annotation"
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
