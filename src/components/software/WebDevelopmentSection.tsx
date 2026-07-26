import { ShieldCheck, Gauge, Layers, Server, Database, Code2 } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import webDevelopmentImg from "@/assests/software-dev/webDevelopment.png";

const FEATURE_CARDS = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Responsive interfaces that render fast and hold up under real traffic.",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Resilient services built for high concurrency and clean failure handling.",
  },
  {
    icon: Database,
    title: "Database",
    description: "Schemas and indexing strategies designed for scale from day one.",
  },
];

const BADGES = [
  { icon: Layers, label: "Microservices" },
  { icon: ShieldCheck, label: "Security" },
  { icon: Gauge, label: "Performance" },
];

export default function WebDevelopmentSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[52%_48%] lg:gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Web Development
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Applications built for every screen, every load
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Responsive by default, secure by design, and architected as microservices
              so no single failure takes the whole platform down.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  <badge.icon size={12} className="text-slate-400" />
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <IconGrid items={FEATURE_CARDS} columnsClassName="grid-cols-1 sm:grid-cols-3" />
            </div>
          </div>

          {/* image */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <img src={webDevelopmentImg} alt="Web development" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
