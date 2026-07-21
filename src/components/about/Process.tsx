import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { processSteps } from "./processData";

export default function Process() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Process
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-2">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === processSteps.length - 1;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-[calc(50%+2rem)] top-6 hidden text-slate-300 lg:block"
                  >
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </span>
                )}
                <span className={`flex h-14 w-14 items-center justify-center rounded-full ${step.bg} ${step.color}`}>
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
