import { motion } from "framer-motion";
import { Rocket, Target, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const values: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Rocket,
    title: "Real Impact",
    body: "Work that ships into production systems used by real enterprises, not shelved prototypes.",
  },
  {
    icon: Target,
    title: "Ownership",
    body: "Small teams, clear scope, and the autonomy to make calls on the problems you own.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    body: "Exposure across GIS, LiDAR, Medical AI, Vision, Automation, and Analytics — depth and breadth.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    body: "Flat structure, direct feedback, and a team that helps you do the best work of your career.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function CultureValues() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Why join us
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            We&apos;re a small, focused team — every hire meaningfully shapes what we build next.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] p-6 flex flex-col gap-4"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-green-50 to-brand-blue-50 text-brand-green-600">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
