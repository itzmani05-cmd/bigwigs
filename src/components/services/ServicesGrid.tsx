import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { servicesGrid, SERVICE_COLOR_THEME } from "./servicesGridData";

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="relative w-full scroll-mt-24 overflow-hidden bg-white py-14 lg:py-16">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              What We Build
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Services Engineered for Scale
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Enterprise AI systems engineered for accuracy, security, and scale — across every domain we serve.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesGrid.map((item, i) => {
            const theme = SERVICE_COLOR_THEME[item.color];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <Link
                  to={item.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_45px_-24px_rgba(15,23,42,0.18)]"
                >
                  <item.icon
                    aria-hidden
                    size={140}
                    strokeWidth={1}
                    className={`pointer-events-none absolute -bottom-6 -right-6 opacity-[0.06] transition-transform duration-500 group-hover:scale-110 ${theme.text}`}
                  />

                  <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${theme.badgeBg}`}>
                    <item.icon size={22} strokeWidth={1.75} className={theme.text} />
                  </span>
                  <span aria-hidden className={`relative mt-4 block h-1 w-6 rounded-full ${theme.bar}`} />

                  <h3 className="relative mt-4 text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  <span className="relative mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                    Learn More
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
