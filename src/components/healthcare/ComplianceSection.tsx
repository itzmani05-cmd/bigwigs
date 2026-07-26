import { Lock } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { complianceItems } from "./complianceData";

export default function ComplianceSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500">
              <Lock size={20} strokeWidth={1.75} />
            </span>
          </span>
          <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Compliance
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built to handle data that can't be handled carelessly
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <IconGrid items={complianceItems} columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </Container>
    </section>
  );
}
