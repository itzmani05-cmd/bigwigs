import { LayoutTemplate } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { layoutTypes, designTools } from "./typesettingData";

export default function TypesettingLayoutSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat stacked layout mockups */}
          <div className="relative mx-auto w-full max-w-[420px] py-6">
            <div className="relative mx-auto aspect-[3/4] w-[62%] overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="flex flex-col gap-2 p-4">
                <span className="h-3 w-2/3 rounded-full bg-slate-100" />
                <span className="h-16 rounded-lg border border-slate-100 bg-slate-50" />
                <span className="h-2 w-full rounded-full bg-slate-100" />
                <span className="h-2 w-5/6 rounded-full bg-slate-100" />
                <span className="h-2 w-3/4 rounded-full bg-slate-100" />
              </div>
            </div>

            <div className="absolute -right-2 top-[6%] w-[38%] overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="aspect-[4/3] p-2.5">
                <div className="flex flex-col gap-1.5">
                  <span className="h-2 w-2/3 rounded-full bg-orange-100" />
                  <span className="h-8 rounded-lg border border-slate-100 bg-slate-50" />
                  <span className="h-1.5 w-full rounded-full bg-slate-100" />
                </div>
              </div>
            </div>

            <div className="absolute -left-2 bottom-[6%] w-[34%] overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="aspect-square p-2.5">
                <div className="grid grid-cols-2 gap-1.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className="h-6 rounded-md border border-slate-100 bg-slate-50" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-600">
              <LayoutTemplate size={18} strokeWidth={1.75} />
            </span>
            <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Typesetting &amp; Layout
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Layouts designed for print, built for production
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Books, journals, and reports typeset to house style — production-ready in the
              tools your team already works in.
            </p>

            <ChipList items={layoutTypes} className="mt-6" />
            <ChipList items={designTools} tone="orange" className="mt-3" />
          </div>
        </div>
      </Container>
    </section>
  );
}
