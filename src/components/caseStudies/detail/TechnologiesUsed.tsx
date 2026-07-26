import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function TechnologiesUsed({ study }: { study: CaseStudy }) {
  const stack = [...study.technologies, ...study.toolsUsed];

  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="flex items-center gap-2">
          <Cpu size={16} className="text-brand-blue-600" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Technologies Used
          </span>
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          The Stack Behind It
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-transform duration-300 hover:-translate-y-1"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
