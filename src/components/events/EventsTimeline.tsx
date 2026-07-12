import { motion } from "framer-motion";
import { MapPin, Radio, Users as UsersIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { events } from "./events";

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function EventsTimeline() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <Container>
        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-green-500/40 via-slate-200 to-brand-blue-500/40"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {events.map((event, index) => {
              const dotTint =
                event.tint === "green"
                  ? "from-brand-green-400 to-brand-blue-500"
                  : "from-brand-blue-500 to-brand-green-400";
              return (
                <motion.div
                  key={event.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={itemVariants}
                  transition={{ delay: index * 0.05 }}
                  className="relative flex gap-6 sm:gap-8 pl-0"
                >
                  <span
                    className={`relative z-10 mt-1 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${dotTint} text-white shadow-md shrink-0`}
                  >
                    {event.format === "Virtual" ? <Radio size={22} /> : <UsersIcon size={22} />}
                  </span>

                  <div className="flex-1 rounded-3xl border border-slate-100 bg-white p-6 sm:p-7 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-green-500/25 hover:shadow-[0_24px_50px_-20px_rgba(16,185,129,0.2)]">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-bold text-brand-green-600">{event.date}</span>
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                        {event.format}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-slate-900">{event.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{event.description}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      <MapPin size={13} />
                      {event.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
