import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { coreValues } from "./coreValuesData";

export default function CoreValues() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Core Values
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className="group flex flex-col items-center rounded-[24px] border border-slate-200/70 bg-white p-7 text-center shadow-[0_16px_40px_-30px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.2)]"
              >
                <span className={`flex h-16 w-16 items-center justify-center rounded-full ${value.bg} ${value.color}`}>
                  <Icon size={26} strokeWidth={1.75} />
                </span>
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
