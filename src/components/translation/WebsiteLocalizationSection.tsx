import { Globe2, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { websiteFeatures } from "./websiteLocalizationData";

const LANGUAGE_TABS = ["EN", "FR", "DE", "AR"];

export default function WebsiteLocalizationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
            Website Localization
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            One site, every market
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-500">
            Language, currency, date formats, and right-to-left layouts — handled without a second codebase.
          </p>
        </div>

        {/* browser mockup */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="ml-3 h-5 flex-1 max-w-[240px] rounded-full bg-slate-100" />
            <div className="ml-auto flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[10px] font-semibold text-slate-500">
              <Globe2 size={11} />
              English (US)
              <ChevronDown size={11} />
            </div>
          </div>

          <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
            {LANGUAGE_TABS.map((tab, i) => (
              <span
                key={tab}
                className={`rounded-md px-2.5 py-1 text-[10px] font-semibold ${
                  i === 0 ? "bg-brand-blue-50 text-brand-blue-700" : "text-slate-400"
                }`}
              >
                {tab}
              </span>
            ))}
            <span className="ml-auto rounded-md border border-orange-200 bg-orange-50 px-2 py-1 text-[9px] font-semibold text-orange-600">
              RTL Supported
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 p-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="h-14 rounded-lg border border-slate-100 bg-slate-50" />
            ))}
          </div>
        </div>

        {/* feature cards */}
        <div className="mx-auto mt-10 max-w-4xl">
          <IconGrid items={websiteFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" align="center" />
        </div>
      </Container>
    </section>
  );
}
