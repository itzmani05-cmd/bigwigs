import { Speaker } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import IconGrid from "@/components/servicePage/IconGrid";
import { wakeWordCommands, recordingEnvironments } from "./wakeWordData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function WakeWordSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat smart speaker illustration */}
          <div className="mx-auto flex w-full max-w-[440px] flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
              <Speaker size={26} strokeWidth={1.5} />
            </span>
            <div className="flex items-center gap-1">
              {[10, 18, 26, 18, 10].map((h, i) => (
                <span key={i} className="w-1 rounded-full bg-brand-blue-500/70" style={{ height: `${h}px` }} />
              ))}
            </div>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-semibold text-slate-500">Awaiting wake word…</span>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Wake Word Collection
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Trigger phrases captured across every real environment
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Custom wake words recorded at natural volume, distance, and cadence — across the
              spaces your product actually ships into.
            </p>

            <ChipList items={wakeWordCommands} tone="blue" className="mt-6" />
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={recordingEnvironments} columnsClassName="grid-cols-2 sm:grid-cols-5" align="center" iconShape="circle" />
        </div>
      </Container>
    </section>
  );
}
