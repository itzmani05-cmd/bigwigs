import { Cpu } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem, STAGGER } from "@/components/scroll";
import type { CaseStudy } from "../caseStudiesData";

export default function TechnologiesUsed({ study }: { study: CaseStudy }) {
  const stack = [...study.technologies, ...study.toolsUsed];

  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <ScrollReveal direction="left">
          <div className="flex items-center gap-2">
            <Cpu size={16} className="text-brand-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
              Technologies Used
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            The Stack Behind It
          </h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={STAGGER.tight} amount={0.4} className="mt-8 flex flex-wrap gap-3">
          {stack.map((tech) => (
            <ScrollStaggerItem
              key={tech}
              distance={12}
              duration={0.4}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
            >
              {tech}
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </Container>
    </section>
  );
}
