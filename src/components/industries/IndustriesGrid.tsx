import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { industriesGrid } from "./industriesGridData";

export default function IndustriesGrid() {
  return (
    <section id="industries-grid" className="relative w-full scroll-mt-24 overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Industries We Serve
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Industries We Transform
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Delivering AI-powered solutions tailored for every industry.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industriesGrid.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_70px_-20px_rgba(37,99,235,0.28)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px z-20 rounded-[28px] opacity-0 shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_0_40px_4px_rgba(37,99,235,0.18)] transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/80 via-[#03132f]/10 to-transparent"
                />
                <span
                  className={`absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_10px_20px_-8px_rgba(15,23,42,0.4)] ${item.iconGradient}`}
                >
                  <item.icon size={18} strokeWidth={1.75} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
                <span className="group/link mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue-600 transition-colors duration-300 hover:text-brand-blue-700">
                  Learn More
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
