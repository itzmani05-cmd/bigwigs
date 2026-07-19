import { motion } from "framer-motion";
import { Package } from "lucide-react";
import Container from "@/components/ui/Container";
import { whyChooseFeatures } from "./whyChooseFeatures";

const PARTICLES = [
  { top: "18%", left: "8%", duration: 9, delay: 0 },
  { top: "32%", left: "88%", duration: 11, delay: 1.5 },
  { top: "58%", left: "5%", duration: 10, delay: 0.8 },
  { top: "72%", left: "92%", duration: 12, delay: 2.2 },
  { top: "88%", left: "14%", duration: 8, delay: 1 },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose-us"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white to-white"
      />

      {/* thin grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* dotted globe */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-[38rem] w-[38rem] -translate-y-1/2 opacity-40 sm:block"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.6px, transparent 1.6px)",
          backgroundSize: "16px 16px",
          WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 75%)",
          maskImage: "radial-gradient(circle, black 55%, transparent 75%)",
        }}
      />

      {/* soft gradient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-brand-blue-500/10 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-400/[0.06] blur-[110px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-brand-blue-500/40"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      <Container className="relative z-10">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-50 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-orange-500 uppercase sm:text-sm">
            Why Choose Us
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-brand-blue-500">Bigwigs Technologies?</span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-blue-500/40" />
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white shadow-[0_8px_20px_-8px_rgba(249,115,22,0.6)]">
              <Package size={16} strokeWidth={2} />
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-blue-500/40" />
          </div>

          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
            We combine expert talent, structured quality processes, and secure delivery
            models to provide high-quality AI data services for global enterprises.
          </p>
        </div>

        {/* feature stack */}
        <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-5">
          {whyChooseFeatures.map((feature, i) => {
            const Icon = feature.icon;
            const step = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className="group relative flex items-center gap-5 overflow-hidden rounded-[24px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-24px_rgba(37,99,235,0.2)] sm:gap-6 sm:p-8"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1.5 rounded-l-[24px] bg-brand-blue-500 transition-all duration-300 group-hover:w-2.5"
                />

                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brand-blue-500/20 bg-brand-blue-50 text-brand-blue-500 transition-transform duration-300 group-hover:-rotate-6 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <Icon size={28} strokeWidth={1.75} />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                    {feature.description}
                  </p>
                </div>

                <div className="hidden shrink-0 flex-col items-end gap-3 pr-2 lg:flex">
                  <div className="grid grid-cols-5 gap-1" aria-hidden="true">
                    {Array.from({ length: 10 }).map((_, dotIndex) => (
                      <span key={dotIndex} className="h-1 w-1 rounded-full bg-brand-blue-500/30" />
                    ))}
                  </div>
                  <span className="text-5xl font-extrabold text-brand-blue-500/10 transition-colors duration-300 group-hover:text-brand-blue-500/25 xl:text-6xl">
                    {step}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
