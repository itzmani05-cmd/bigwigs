import { motion } from "framer-motion";
import { ArrowRight, Search, Brain, BarChart3, Coffee, NotebookText, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

const FLOATING_ICONS = [
  { icon: Brain, position: "left-[2%] top-[8%]", delay: 0, accent: "text-violet-300 bg-violet-500/20" },
  { icon: BarChart3, position: "right-[0%] top-[20%]", delay: 0.6, accent: "text-cyan-300 bg-cyan-500/20" },
  { icon: NotebookText, position: "left-[0%] bottom-[22%]", delay: 1.2, accent: "text-brand-blue-300 bg-brand-blue-500/20" },
  { icon: Coffee, position: "right-[4%] bottom-[6%]", delay: 1.8, accent: "text-orange-300 bg-orange-500/20" },
];

export default function BlogHero() {
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-10 lg:pt-10 lg:pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white/40 to-transparent"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-blue-500/10 blur-[130px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[24rem] w-[24rem] rounded-full bg-indigo-400/[0.08] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                Blogs &amp; Insights
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px] xl:text-5xl"
            >
              Insights That Power The Future Of{" "}
              <span className="text-blue-500">
                AI
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              Explore expert articles about Artificial Intelligence, Machine
              Learning, Data Annotation, Computer Vision, Medical AI, NLP,
              OCR, Digital Publishing, Autonomous Driving, and enterprise AI
              solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#latest-articles"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
              >
                <span>Latest Articles</span>
                <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                href="#categories"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-500 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:text-brand-blue-600 select-none"
              >
                <span>Browse Categories</span>
                <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>
          </motion.div>

          <div className="relative mr-6">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[36px] bg-brand-blue-500/15 blur-[60px]"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-full border border-dashed border-brand-blue-300/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-[#03132f] shadow-[0_40px_90px_-30px_rgba(7,27,70,0.5)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.1]"
                style={{
                  backgroundImage: "radial-gradient(#3b82f6 1.2px, transparent 1.2px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-20" viewBox="0 0 400 300" fill="none">
                <path d="M0 60 C 100 20, 180 100, 280 60 S 380 10, 400 40" stroke="#38bdf8" strokeWidth="1" />
                <path d="M0 250 C 100 220, 200 270, 300 230 S 380 200, 400 220" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
              </svg>

              {/* mock browser / dashboard frame */}
              <div className="absolute inset-6 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm sm:inset-10">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Insights
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-4 sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue-500/20 text-brand-blue-300">
                      <Brain size={18} strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-bold text-white">AI Annotation Deep Dive</span>
                  </div>
                  <span className="h-2 w-full rounded-full bg-white/10" />
                  <span className="h-2 w-4/5 rounded-full bg-white/10" />
                  <span className="h-2 w-3/5 rounded-full bg-white/10" />
                  <div className="mt-2 flex items-end gap-1.5">
                    {[40, 65, 50, 80, 60, 90, 45].map((h, i) => (
                      <motion.span
                        key={i}
                        className="w-4 rounded-t bg-gradient-to-t from-brand-blue-500 to-cyan-400"
                        style={{ height: `${h}%`, maxHeight: 64 }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/50 via-transparent to-[#03132f]/10"
              />

              {FLOATING_ICONS.map((item) => (
                <motion.span
                  key={item.position}
                  className={`absolute z-20 hidden h-11 w-11 items-center justify-center rounded-2xl border border-white/15 backdrop-blur-xl sm:flex ${item.position} ${item.accent}`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                >
                  <item.icon size={18} strokeWidth={1.75} />
                </motion.span>
              ))}

              <motion.span
                aria-hidden
                className="absolute right-[14%] top-[6%] hidden h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-orange-300 sm:flex"
                animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={14} strokeWidth={1.75} />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
