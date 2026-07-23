import { motion } from "framer-motion";
import { Layers, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function ServicesAndTools({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            className="glass-card rounded-[28px] p-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
              <Layers size={20} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Services Delivered</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.servicesDelivered.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-brand-blue-50 px-3 py-1.5 text-xs font-semibold text-brand-blue-600 sm:text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.215, 0.61, 0.355, 1] }}
            className="glass-card rounded-[28px] p-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green-600">
              <Wrench size={20} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Tools Used</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
