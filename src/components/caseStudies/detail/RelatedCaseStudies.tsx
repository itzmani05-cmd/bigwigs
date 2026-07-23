import Container from "@/components/ui/Container";
import CaseStudyCard from "../CaseStudyCard";
import { getRelatedCaseStudies, type CaseStudy } from "../caseStudiesData";

export default function RelatedCaseStudies({ study }: { study: CaseStudy }) {
  const related = getRelatedCaseStudies(study);
  if (related.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Related Case Studies
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          More Success Stories
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((relatedStudy, i) => (
            <CaseStudyCard key={relatedStudy.slug} study={relatedStudy} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
