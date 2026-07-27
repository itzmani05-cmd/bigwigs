import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SpotlightCard from "./SpotlightCard";

export interface ChallengeItem {
  icon: LucideIcon;
  title: string;
  /** Only shown on the first (featured, oversized) item. */
  description?: string;
}

interface ChallengesSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description: string;
  items: ChallengeItem[];
}

export default function ChallengesSection({
  eyebrow = "Industry Challenges",
  heading,
  description,
  items,
}: ChallengesSectionProps) {
  const [featured, ...rest] = items;

  return (
    <section className="relative w-full overflow-hidden py-8 lg:py-10">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">{description}</p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {/* featured, oversized card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            className="col-span-2 row-span-2 sm:col-span-2"
          >
            <SpotlightCard className="flex h-full flex-col justify-between p-7" glowColor="rgba(249,115,22,0.3)">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 shadow-[0_0_24px_-6px_rgba(249,115,22,0.35)]">
                <featured.icon size={28} strokeWidth={1.5} />
              </span>
              <div className="mt-8">
                <span className="text-2xl font-extrabold leading-snug text-slate-900">{featured.title}</span>
                {featured.description && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{featured.description}</p>
                )}
              </div>
            </SpotlightCard>
          </motion.div>

          {rest.map((challenge, i) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="col-span-2 sm:col-span-2 lg:col-span-2"
            >
              <SpotlightCard className="flex h-full flex-col justify-center gap-4 px-8 py-6 ">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600 shadow-[0_0_16px_-4px_rgba(37,99,235,0.3)]">
                  <challenge.icon size={16} strokeWidth={1.5} />
                </span>
                <span className="text-sm font-semibold leading-snug text-slate-800">{challenge.title}</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
