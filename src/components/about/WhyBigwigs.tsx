import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { whyBigwigsFeatures } from "./whyBigwigsData";

export default function WhyBigwigs() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-orange-50/60 via-orange-50/20 to-white py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              The Bigwigs Difference
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Bigwigs Technologies?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyBigwigsFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className="group flex flex-col items-center rounded-[24px] border border-slate-200 bg-white p-7 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]"
              >
                <motion.span
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-blue-500/20 bg-brand-blue-50 text-brand-blue-500"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <Icon size={26} strokeWidth={1.75} />
                </motion.span>
                <h3 className="mt-5 text-base font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
