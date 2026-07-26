import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { architectureLayers } from "./architectureData";

export default function AiAgentArchitectureSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
            AI Agent Architecture
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Four layers, one connected system
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center">
          {architectureLayers.map((layer, i) => (
            <div key={layer.title} className="w-full">
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-600">
                    <layer.icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Layer {i + 1}</span>
                    <h3 className="text-sm font-semibold text-slate-900">{layer.title}</h3>
                  </div>
                </div>
                <ChipList items={layer.items} className="mt-4" />
              </div>
              {i < architectureLayers.length - 1 && (
                <div className="flex justify-center py-2">
                  <ChevronDown size={16} className="text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
