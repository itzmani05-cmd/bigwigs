import { Headset } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { customerServiceFeatures } from "./customerServiceData";

export default function CustomerServiceAgentsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-12">
          {/* LEFT — flat live conversation dashboard illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Headset size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Live Conversations</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">42 active</span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-slate-100">
              <div className="bg-white p-4">
                <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Ticket Resolution</span>
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100">
                  <div className="h-1.5 w-[86%] rounded-full bg-brand-blue-500" />
                </div>
                <span className="mt-1 block text-[10px] font-medium text-slate-500">86% resolved without escalation</span>
              </div>
              <div className="bg-white p-4">
                <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">CRM Sync</span>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand-blue-500" />
                  <span className="text-[10px] font-medium text-slate-600">Connected</span>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">Knowledge base + order history retrieved live</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Customer Service AI Agents
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Support that resolves, around the clock
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Connected to your CRM and knowledge base, agents resolve routine requests
              instantly and escalate the rest to a human — with full context attached.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={customerServiceFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3" align="center" />
        </div>
      </Container>
    </section>
  );
}
