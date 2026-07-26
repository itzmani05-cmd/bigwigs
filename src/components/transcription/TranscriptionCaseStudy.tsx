import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import caseStudyImg from "@/assests/transcription/caseStudy.png";

const CASE_STATS = [
  { value: "95%", label: "Reduced documentation time" },
  { value: "10M+", label: "Minutes Transcribed" },
  { value: "40%", label: "Faster Knowledge Retrieval" },
];

export default function TranscriptionCaseStudy() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-12">
          {/* LEFT */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl ">
            <img src={caseStudyImg} alt="Transcription case study" className="w-full h-auto object-cover" />
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Case Study
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Helping organizations unlock value from every conversation
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              An enterprise client partnered with Bigwigs to transcribe and index every meeting,
              call, and interview — turning spoken conversations into a searchable knowledge base.
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
