import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { techStack } from "./techStackData";

export default function TechStackSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Modern tools, proven at scale
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((category, ci) => {
            const CatIcon = category.icon;
            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: ci * 0.05 }}
                className="bg-white p-5"
              >
                <div className="flex items-center gap-2">
                  <CatIcon size={15} className="text-slate-400" strokeWidth={1.75} />
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
                    {category.label}
                  </h3>
                </div>

                <div className="mt-4 flex flex-col gap-1">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 py-1.5 text-sm font-medium text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
