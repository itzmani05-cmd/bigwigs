import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { marketingItems } from "./marketingLocalizationData";

export default function MarketingLocalizationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[60%_40%] lg:gap-12">
          {/* LEFT — flat creative assets illustration */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Marketing Localization
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Campaigns that feel local, everywhere
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Transcreation, not just translation — brand messaging adapted for tone,
              culture, and what actually resonates in each market.
            </p>

            <div className="mt-7">
              <IconGrid items={marketingItems} columnsClassName="grid-cols-2 sm:grid-cols-3" align="center" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="mx-auto flex w-full max-w-[420px] items-center gap-3">
            <div className="flex-1 rounded-xl border border-slate-200 bg-white p-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Social</span>
              <span className="mt-2 block h-16 rounded-lg bg-orange-50" />
            </div>
            <div className="flex-1 rounded-xl border border-slate-200 bg-white p-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Email</span>
              <span className="mt-2 block h-16 rounded-lg bg-brand-blue-50" />
            </div>
            <div className="flex-1 rounded-xl border border-slate-200 bg-white p-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Ads</span>
              <span className="mt-2 block h-16 rounded-lg bg-slate-50" />
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
