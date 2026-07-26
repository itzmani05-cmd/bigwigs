import { Bot } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { enterpriseAssistantChips } from "./enterpriseAssistantsData";

export default function EnterpriseAssistantsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat employee portal illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Bot size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Employee Portal</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Online</span>
            </div>
            <div className="flex flex-col gap-2.5 bg-slate-50 p-5">
              <span className="w-3/4 rounded-lg bg-white px-3 py-2 text-[11px] text-slate-600 shadow-sm">
                What&apos;s our remote work policy?
              </span>
              <span className="ml-auto w-4/5 rounded-lg bg-brand-blue-600 px-3 py-2 text-[11px] text-white">
                Up to 3 remote days a week, per the 2026 HR policy — want the full document?
              </span>
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">Grounded in HR, IT &amp; finance knowledge</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Enterprise AI Assistants
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Enterprise assistants for every department
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              One assistant, grounded in every department&apos;s knowledge — so employees get
              the same answer whether they ask HR, IT, or finance.
            </p>

            <ChipList items={enterpriseAssistantChips} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
