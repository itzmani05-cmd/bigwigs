import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { officeLocations } from "./locations";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function LocationsGrid() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <Container>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {officeLocations.map((office) => {
            const tint =
              office.tint === "green"
                ? "from-brand-green-400 to-brand-blue-500"
                : "from-brand-blue-500 to-brand-green-400";
            return (
              <motion.div
                key={office.city}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.2)] hover:border-brand-green-500/25 hover:shadow-[0_24px_50px_-20px_rgba(16,185,129,0.22)] transition-shadow duration-300"
              >
                {office.isHQ && (
                  <span className="absolute top-6 right-6 inline-flex items-center rounded-full bg-brand-green-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-green-600">
                    Headquarters
                  </span>
                )}
                <span
                  className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${tint} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}
                >
                  <MapPin size={20} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{office.city}</h3>
                <p className="text-sm font-medium text-slate-500">{office.country}</p>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{office.address}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
