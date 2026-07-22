import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { coreValues } from "./coreValuesData";

export default function CoreValues() {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Core Values
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className="glass-card group flex flex-col items-center rounded-[24px] p-7 text-center"
              >
                <motion.span
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${value.bg} ${value.color}`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <Icon size={26} strokeWidth={1.75} />
                </motion.span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
