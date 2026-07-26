import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { pipelineSteps } from "./cloudDevOpsData";

export default function CloudDevOpsSection() {
  return (
    <section className="relative w-full bg-[#071B46] py-16 lg:py-20">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-400">
            - Cloud &amp; DevOps -
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ship on a schedule you actually control
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            Cloud migration, containerized environments, and automated pipelines — from commit to production.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 sm:block" />

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7 lg:gap-3">
            {pipelineSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#071B46] text-slate-300">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-medium leading-tight text-slate-300">{step.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
