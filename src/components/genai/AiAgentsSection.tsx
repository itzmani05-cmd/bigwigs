import { Bot } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { agentUseCases } from "./agentsData";

export default function AiAgentsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500">
              <Bot size={20} strokeWidth={1.75} />
            </span>
          </span>
          <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-orange-500">
            AI Agents
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Agents that take action, not just answer questions
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Autonomous agents connected to your systems — executing tasks across
            departments, not waiting on a human to click through them.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <IconGrid items={agentUseCases} columnsClassName="grid-cols-2 sm:grid-cols-4" align="center" />
        </div>
      </Container>
    </section>
  );
}
