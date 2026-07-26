import { Search } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { enterpriseSourceChips, agentRagFeatures, agentRagBenefits } from "./agentRagData";

const GRAPH_NODES = [
  { x: 20, y: 30 },
  { x: 45, y: 15 },
  { x: 70, y: 28 },
  { x: 30, y: 60 },
  { x: 55, y: 50 },
  { x: 78, y: 62 },
  { x: 50, y: 80 },
];

const GRAPH_EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 4],
  [2, 4],
  [4, 5],
  [3, 4],
  [3, 6],
  [4, 6],
];

export default function AgentRagSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-7">
          {/* LEFT — flat knowledge graph illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Search size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Enterprise Knowledge Graph</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Live</span>
            </div>
            <div className="relative h-44 bg-slate-50">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {GRAPH_EDGES.map(([a, b], i) => (
                  <line
                    key={i}
                    x1={GRAPH_NODES[a].x}
                    y1={GRAPH_NODES[a].y}
                    x2={GRAPH_NODES[b].x}
                    y2={GRAPH_NODES[b].y}
                    stroke="#CBD5E1"
                    strokeWidth="0.6"
                  />
                ))}
              </svg>
              {GRAPH_NODES.map((n, i) => (
                <span
                  key={i}
                  className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    i === 4 ? "bg-brand-blue-600" : "bg-orange-400"
                  }`}
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                />
              ))}
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">9 enterprise sources indexed &amp; searchable</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Retrieval-Augmented Generation
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Agents grounded in every system you already run
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              SharePoint, Drive, Confluence, CRM, and ERP indexed into one vector database —
              so every agent answer traces back to a real source.
            </p>

            <ChipList items={enterpriseSourceChips} className="mt-6" />
            <ChipList items={agentRagBenefits} tone="orange" className="mt-3" />
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={agentRagFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3" align="center" />
        </div>
      </Container>
    </section>
  );
}
