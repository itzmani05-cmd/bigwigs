import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { whyChooseItems } from "./whyChooseData";

export default function WhyChooseIndustries() {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-14">
      <Container className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Why Industries Choose Bigwigs
        </span>
        <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Built For Enterprise. Trusted Worldwide.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card flex flex-col items-start gap-4 rounded-[24px] p-6"
            >
              <motion.span
                className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-[0_10px_20px_-8px_rgba(15,23,42,0.35)] ${item.gradient}`}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2 + i * 0.25, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
              >
                <item.icon size={24} strokeWidth={1.75} />
              </motion.span>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
