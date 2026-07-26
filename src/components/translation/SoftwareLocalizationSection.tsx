import { Globe2 } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { softwareLocalizationChips } from "./softwareLocalizationData";

export default function SoftwareLocalizationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-12">
          {/* LEFT — flat laptop + mobile illustration */}
          <div className="relative mx-auto w-full max-w-[420px] py-8">
            <div className="mx-auto aspect-[16/10] w-[88%] overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
                <Globe2 size={11} className="text-slate-300" />
                <span className="rounded-md border border-slate-200 px-2 py-0.5 text-[9px] font-semibold text-slate-500">DE — €</span>
              </div>
              <div className="grid grid-cols-3 gap-2 p-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="h-8 rounded-lg border border-slate-100 bg-slate-50" />
                ))}
              </div>
            </div>

            <div className="absolute -right-2 bottom-0 w-[26%] overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="aspect-[9/17] p-1.5">
                <div className="flex flex-col gap-1">
                  <span className="mx-auto h-1 w-6 rounded-full bg-slate-100" />
                  <span className="mt-1.5 rounded-md border border-slate-200 px-1.5 py-0.5 text-center text-[7px] font-semibold text-slate-500">
                    JP — 12/25
                  </span>
                  <span className="h-10 rounded-md bg-slate-50 border border-slate-100" />
                  <span className="h-4 rounded-md border border-slate-100" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Software Localization
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Build software for global users
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Language, currency, date formats, and regional UI conventions — localized
              consistently across every screen your product ships.
            </p>

            <ChipList items={softwareLocalizationChips} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
