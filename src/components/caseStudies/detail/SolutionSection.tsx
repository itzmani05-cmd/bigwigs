import { motion } from "framer-motion";
import { CheckCircle2, Database, ScanSearch, ShieldCheck, Send } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem, STAGGER } from "@/components/scroll";
import type { CaseStudy } from "../caseStudiesData";

const FLOW_NODES = [
  { icon: Database, label: "Ingest" },
  { icon: ScanSearch, label: "Annotate" },
  { icon: ShieldCheck, label: "Validate" },
  { icon: Send, label: "Deliver" },
];

export default function SolutionSection({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-blue-50/50 via-brand-blue-50/10 to-white py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[38%_62%] lg:gap-14">
          {/* LEFT — abstract solution flow diagram */}
          <ScrollReveal
            direction="left"
            distance={24}
            duration={0.6}
            amount={0.4}
            className="relative mx-auto w-full max-w-[340px] rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]"
          >
            <div className="relative flex flex-col items-center gap-0">
              {FLOW_NODES.map((node, i) => (
                <div key={node.label} className="flex flex-col items-center">
                  <motion.span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white ${study.iconGradient}`}
                    style={{ boxShadow: "0 14px 28px -10px rgba(37,99,235,0.4)" }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    <node.icon size={22} strokeWidth={1.75} />
                  </motion.span>
                  <span className="mt-2 text-xs font-bold text-slate-700">{node.label}</span>
                  {i < FLOW_NODES.length - 1 && (
                    <span
                      aria-hidden
                      className="my-2 h-8 w-px bg-gradient-to-b from-brand-blue-300 to-brand-blue-300/20"
                    />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* RIGHT */}
          <div>
            <ScrollReveal direction="right" distance={24} duration={0.6} amount={0.4}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
                Our Solution
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                How Bigwigs Delivered
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
                {study.solution}
              </p>
            </ScrollReveal>

            <ScrollStagger
              staggerDelay={STAGGER.tight}
              amount={0.4}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {study.servicesDelivered.map((service) => (
                <ScrollStaggerItem
                  key={service}
                  distance={16}
                  duration={0.4}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600">
                    <CheckCircle2 size={17} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-bold text-slate-800">{service}</span>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
