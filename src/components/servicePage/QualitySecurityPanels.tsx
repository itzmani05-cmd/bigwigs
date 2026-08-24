import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll";
import { qualitySecurity } from "./content/quality";

export default function QualitySecurityPanels() {
  const panels = [qualitySecurity.quality, qualitySecurity.security];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <Container className="relative z-10">
        <ScrollReveal direction="up" distance={24} duration={0.6} className="mx-auto max-w-xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              {qualitySecurity.eyebrow}
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {qualitySecurity.heading}
          </h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.1} amount={0.3} className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {panels.map((panel) => {
            const Icon = panel.icon;
            return (
              <ScrollStaggerItem
                key={panel.title}
                direction="up"
                distance={24}
                duration={0.5}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-50 text-brand-blue-600">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{panel.title}</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {panel.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                      <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
      </Container>
    </section>
  );
}
