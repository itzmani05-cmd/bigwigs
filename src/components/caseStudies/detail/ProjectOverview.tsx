import { motion } from "framer-motion";
import { Target, AlertTriangle, Lightbulb } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function ProjectOverview({ study }: { study: CaseStudy }) {
  const blocks = [
    { icon: Target, label: "Project Overview", text: study.overview, accent: "bg-brand-blue-50 text-brand-blue-500" },
    { icon: AlertTriangle, label: "Client Challenge", text: study.challenge, accent: "bg-orange-50 text-orange-500" },
    { icon: Lightbulb, label: "Our Solution", text: study.solution, accent: "bg-brand-green-50 text-brand-green-600" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card flex flex-col rounded-[28px] p-7"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${block.accent}`}>
                <block.icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{block.label}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{block.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
