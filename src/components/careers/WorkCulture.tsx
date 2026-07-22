import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { cultureMoments } from "./workCultureData";

export default function WorkCulture() {
  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <Container className="relative z-10">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Work Culture
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Moments That Define Us
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {cultureMoments.map((moment, i) => (
            <motion.div
              key={moment.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-[0_15px_50px_rgba(15,23,42,0.08)]"
            >
              <img
                src={moment.image}
                alt={moment.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent"
              />
              <span className="absolute bottom-3 left-4 text-sm font-bold text-white">{moment.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
