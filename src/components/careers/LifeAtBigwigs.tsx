import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Container from "@/components/ui/Container";
import lifeImage from "@/assests/about/events.jpg";
import { lifeFeatures } from "./lifeAtBigwigsData";

export default function LifeAtBigwigs() {
  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="group relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_15px_50px_rgba(15,23,42,0.1)]"
          >
            <img
              src={lifeImage}
              alt="Life at Bigwigs Technologies — team collaborating"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/25 text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 hover:scale-110"
            >
              <Play size={22} className="ml-0.5" fill="currentColor" />
            </button>
          </motion.div>

          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
                Life At Bigwigs
              </span>
              <span aria-hidden className="h-px w-8 bg-brand-blue-500/40" />
            </div>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
              A Place Where You Belong
              <br />
              And Make An Impact
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
              We believe great ideas come from collaboration, diverse
              perspectives, and a culture that empowers you to do your best work.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {lifeFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                    className="flex items-start gap-3"
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${feature.bg} ${feature.color}`}>
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
