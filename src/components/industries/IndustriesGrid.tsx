import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll";
import { industriesGrid } from "./industriesGridData";

export default function IndustriesGrid() {
  return (
    <section id="industries-grid" className="relative w-full scroll-mt-24 overflow-hidden bg-white py-14 lg:py-16">
      <Container className="relative z-10">
        <ScrollReveal direction="up" distance={28} className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              Industries We Serve
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Industries We Transform
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Delivering AI-powered solutions tailored for every industry.
          </p>
        </ScrollReveal>

        <ScrollStagger
          staggerDelay={0.06}
          amount={0.2}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6"
        >
          {industriesGrid.map((item) => {
            const cardBody = (
              <>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px z-20 rounded-[28px] opacity-0 shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_0_40px_4px_rgba(37,99,235,0.18)] transition-opacity duration-300 group-hover:opacity-100"
                />

                <ScrollReveal
                  as="div"
                  direction="none"
                  scale
                  duration={0.5}
                  amount={0.3}
                  className="relative h-40 w-full overflow-hidden"
                >
                  {item.image ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/80 via-[#03132f]/10 to-transparent"
                      />
                    </>
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br transition-transform duration-700 ease-out group-hover:scale-110 ${item.iconGradient}`}
                    >
                      <item.icon size={64} strokeWidth={1.25} className="text-white/25" />
                    </div>
                  )}
                  <span
                    className={`absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_10px_20px_-8px_rgba(15,23,42,0.4)] ${item.iconGradient}`}
                  >
                    <item.icon size={18} strokeWidth={1.75} />
                  </span>
                </ScrollReveal>

                <ScrollReveal
                  as="div"
                  direction="up"
                  distance={20}
                  delay={0.1}
                  duration={0.5}
                  amount={0.3}
                  className="flex flex-1 flex-col p-5"
                >
                  <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  <span className="group/link mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue-600 transition-colors duration-300 hover:text-brand-blue-700">
                    Learn More
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </ScrollReveal>
              </>
            );
            const cardClassName =
              "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_32px_70px_-20px_rgba(37,99,235,0.28)]";

            return (
              <ScrollStaggerItem key={item.name} direction="up" distance={24} duration={0.5}>
                {item.href ? (
                  <Link to={item.href} className={cardClassName}>
                    {cardBody}
                  </Link>
                ) : (
                  <div className={cardClassName}>{cardBody}</div>
                )}
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </Container>
    </section>
  );
}
