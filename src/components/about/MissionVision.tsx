import { motion } from "framer-motion";
import { Target, Eye, Gem, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

const pillars: Pillar[] = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Deliver AI-powered solutions that create measurable business impact.",
    accent: "#2563EB",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Be the most trusted AI data partner for global enterprises.",
    accent: "#F97316",
  },
  {
    icon: Gem,
    title: "Our Values",
    description: "Innovation, integrity, and excellence in everything we deliver.",
    accent: "#8B5CF6",
  },
];

export default function MissionVision() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-blue-500/[0.06] blur-[100px]"
      />

      <Container className="relative z-10 max-w-[1100px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                whileHover={{ y: -4 }}
                className="group relative min-h-[205px] rounded-[20px] border border-[#E5EAF2] bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-shadow duration-300 ease-out hover:border-[#D6DEEA] hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
              >
                {/* top accent line, overlapping the card's top border */}
                <span
                  aria-hidden
                  className="absolute -top-px left-7 h-[2px] w-12 rounded-full"
                  style={{ backgroundColor: pillar.accent }}
                />

                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_0_6px_rgba(0,0,0,0.02)]"
                  style={{ backgroundColor: `${pillar.accent}1A`, color: pillar.accent }}
                >
                  <Icon size={21} strokeWidth={1.8} />
                </span>

                <h3 className="mt-[18px] text-lg font-bold text-[#0F172A]">{pillar.title}</h3>
                <p className="mt-2 max-w-[220px] text-[15px] leading-[1.6] font-normal text-[#64748B]">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
