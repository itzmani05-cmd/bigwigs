import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { navItems } from "@/components/navbar/navConfig";

const services = navItems.find((item) => item.name === "Services")?.mega?.features ?? [];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#050816] py-20 sm:py-28 scroll-mt-24"
    >
      <div className="pointer-events-none absolute -top-24 -left-16 w-96 h-96 rounded-full bg-brand-green-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-[120px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green-500/25 bg-brand-green-500/10 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-green-400 uppercase">
            What we build
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            A full-stack service,{" "}
            <span className="bg-gradient-to-r from-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              engineered for scale.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Six core domains, one accountable engineering team.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-brand-green-400/40 hover:bg-white/[0.05]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 text-white">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-400 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                >
                  Learn more
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
