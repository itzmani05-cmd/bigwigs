import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { certifications } from "./certifications";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function CertificationsGrid() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Enterprise AI means enterprise-grade trust. Here&apos;s what we hold ourselves to.
          </p>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {certifications.map((cert) => {
            const Icon = cert.icon;
            const tint =
              cert.tint === "green"
                ? "from-brand-green-400 to-brand-blue-500"
                : "from-brand-blue-500 to-brand-green-400";
            return (
              <motion.div
                key={cert.name}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.2)] hover:border-brand-green-500/25 hover:shadow-[0_24px_50px_-20px_rgba(16,185,129,0.22)] transition-shadow duration-300"
              >
                <span
                  className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${tint} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{cert.name}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{cert.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
