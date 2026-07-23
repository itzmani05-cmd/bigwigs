import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "./caseStudiesData";

export default function FeaturedCaseStudies() {
  const industries = useMemo(
    () => ["All", ...Array.from(new Set(caseStudies.map((study) => study.industry)))],
    []
  );
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filtered =
    activeIndustry === "All" ? caseStudies : caseStudies.filter((study) => study.industry === activeIndustry);

  return (
    <section id="featured-case-studies" className="relative w-full scroll-mt-24 overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Featured Case Studies
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Proven Results, Real Impact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Every engagement is a partnership &mdash; browse how we&rsquo;ve helped teams
            turn raw data into production-grade AI.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {industries.map((industry) => (
            <button
              key={industry}
              type="button"
              onClick={() => setActiveIndustry(industry)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                activeIndustry === industry
                  ? "border-brand-blue-500 bg-brand-blue-500 text-white shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)]"
                  : "border-slate-200 text-slate-600 hover:border-brand-blue-400 hover:text-brand-blue-600"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
