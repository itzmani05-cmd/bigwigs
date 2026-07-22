import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { benefits } from "./benefitsData";

export default function Benefits() {
  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-orange-400/[0.07] blur-[110px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Benefits
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Benefits You&rsquo;ll Love
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
                className="glass-card flex flex-col items-center rounded-[24px] p-5 text-center sm:p-6"
              >
                <motion.span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_10px_20px_-8px_rgba(15,23,42,0.35)] ${benefit.gradient}`}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.2 + i * 0.25, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </motion.span>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
