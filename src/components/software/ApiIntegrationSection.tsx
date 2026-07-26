import { motion } from "framer-motion";
import { Boxes } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { apiNodes } from "./apiIntegrationData";

const RADIUS = 42;

function nodePosition(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + RADIUS * Math.cos(rad)}%`,
    top: `${50 + RADIUS * Math.sin(rad)}%`,
  };
}

export default function ApiIntegrationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
            API &amp; Integration
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Every system you run, wired together
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Clean, documented integrations connecting your platform to the tools it already depends on.
          </p>
        </div>

        <div className="relative mx-auto mt-16 hidden aspect-square max-w-[560px] lg:block">
          <div aria-hidden className="absolute inset-[22%] rounded-full border border-slate-100" />

          <svg aria-hidden className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100">
            {apiNodes.map((node) => {
              const pos = nodePosition(node.angle);
              return (
                <line
                  key={node.label}
                  x1="50"
                  y1="50"
                  x2={parseFloat(pos.left)}
                  y2={parseFloat(pos.top)}
                  stroke="#CBD5E1"
                  strokeWidth="0.3"
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white text-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-700">
              <Boxes size={16} />
            </span>
            <span className="text-[11px] font-semibold uppercase leading-tight tracking-wide text-slate-900">
              Your
              <br />
              Platform
            </span>
          </div>

          {apiNodes.map((node, i) => {
            const pos = nodePosition(node.angle);
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="absolute z-10 flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
                style={pos}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600">
                  <node.icon size={18} strokeWidth={1.75} />
                </span>
                <span className="text-xs font-medium leading-tight text-slate-600">{node.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* mobile / tablet fallback grid */}
        <div className="mt-12 lg:hidden">
          <IconGrid
            items={apiNodes.map((node) => ({ icon: node.icon, title: node.label }))}
            columnsClassName="grid-cols-2 sm:grid-cols-4"
            align="center"
            iconShape="circle"
          />
        </div>
      </Container>
    </section>
  );
}
