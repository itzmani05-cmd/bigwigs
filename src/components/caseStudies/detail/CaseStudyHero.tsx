import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Building2, Layers, Clock, BadgeCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  const metadata = [
    { icon: Building2, label: "Client", value: study.client },
    { icon: study.industryIcon, label: "Industry", value: study.industry },
    { icon: Layers, label: "Services Delivered", value: `${study.servicesDelivered.length} Services` },
    { icon: Clock, label: "Timeline", value: study.duration },
  ];

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
        className="pointer-events-none absolute -bottom-32 -right-20 h-[24rem] w-[24rem] rounded-full bg-orange-400/[0.08] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 sm:text-sm">
          <Link to="/case-studies" className="transition-colors duration-300 hover:text-brand-blue-600">
            Case Studies
          </Link>
          <ChevronRight size={14} className="text-slate-300" />
          <span className="text-slate-400">{study.industry}</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-10">
          {/* LEFT */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white ${study.iconGradient}`}
              >
                <study.industryIcon size={13} strokeWidth={1.75} />
                {study.industry}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/25 bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-600">
                <BadgeCheck size={13} strokeWidth={1.75} />
                Case Study
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]"
            >
              {study.title}
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              {study.shortDescription}
            </motion.p>
          </motion.div>

          {/* RIGHT — premium illustration panel */}
          <div className="relative mx-auto hidden w-full max-w-[560px] lg:mx-0 lg:block">
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
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-[#03132f] shadow-[0_40px_90px_-30px_rgba(7,27,70,0.5)]"
            >
              <img src={study.coverImage} alt={study.title} className="absolute inset-0 h-full w-full object-cover" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/70 via-transparent to-[#03132f]/10"
              />

              <motion.div
                className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-xl"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-500/25 text-brand-blue-300">
                  <study.industryIcon size={14} />
                </span>
                <span className="text-[11px] font-bold text-white">{study.industry}</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* metadata glass cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metadata.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className="glass-card flex items-center gap-3 rounded-2xl p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
                  <Icon size={17} strokeWidth={1.75} />
                </span>
                <div className="min-w-0 leading-tight">
                  <span className="block truncate text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    {item.label}
                  </span>
                  <span className="block truncate text-sm font-bold text-slate-900">{item.value}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
