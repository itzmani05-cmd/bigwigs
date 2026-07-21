import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { journeyMilestones } from "./journey";

export default function JourneyTimeline() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Journey
          </h2>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-brand-blue-200 via-brand-blue-400 to-brand-blue-200 lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {journeyMilestones.map((milestone, i) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <span
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white ${milestone.bg} ${milestone.color} shadow-[0_10px_24px_-10px_rgba(15,23,42,0.3)] transition-transform duration-300 group-hover:-translate-y-1.5`}
                  >
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <span className="mt-4 text-xl font-extrabold tracking-tight text-slate-900">
                    {milestone.year}
                  </span>
                  <span className="mt-1 max-w-[10rem] text-sm leading-relaxed text-slate-500">
                    {milestone.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
