import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { whyJoinFeatures } from "./whyJoinData";

export default function WhyJoin() {
  return (
    <section id="why-join" className="relative w-full scroll-mt-24 overflow-hidden py-14 lg:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-blue-500/[0.08] blur-[110px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-8 bg-brand-blue-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
              Why Join Bigwigs
            </span>
            <span className="h-px w-8 bg-brand-blue-500/50" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Why Build Your Career With Us?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            We invest in people, innovation, and continuous learning.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyJoinFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className="glass-card flex flex-col items-center rounded-[24px] p-7 text-center"
              >
                <motion.span
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${feature.bg} ${feature.color}`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <Icon size={26} strokeWidth={1.75} />
                </motion.span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
