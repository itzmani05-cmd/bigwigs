import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CaseStudyCard from "@/components/caseStudies/CaseStudyCard";
import { getCaseStudyBySlug } from "@/components/caseStudies/caseStudiesData";
import { ScrollReveal } from "@/components/scroll";

/** Real, shipped project examples for this specific service — only rendered
 *  on service pages that actually have a matching case study. Never force-fit
 *  unrelated work here. */
export default function RelatedWork({ slugs }: { slugs: string[] }) {
  const studies = slugs.map(getCaseStudyBySlug).filter((s) => s !== undefined);
  if (studies.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-14 lg:py-16">
      <Container className="relative z-10">
        <ScrollReveal direction="up" distance={24} duration={0.6} amount={0.4} className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              Proven Results
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What We've Delivered
          </h2>
        </ScrollReveal>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-600 transition-colors duration-300 hover:text-brand-blue-700"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
