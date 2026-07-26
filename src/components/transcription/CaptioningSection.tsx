import { Languages } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { captionFormats, captioningFeatures } from "./captioningData";

export default function CaptioningSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat subtitle editor illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-orange-300">Subtitle Editor</span>
              <span className="flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                <Languages size={11} />
                EN → 50+
              </span>
            </div>
            <div className="flex h-28 items-center justify-center bg-slate-900">
              <span className="rounded bg-black/50 px-3 py-1 text-[11px] font-medium text-white">
                &ldquo;...transforming raw audio into text.&rdquo;
              </span>
            </div>
            <div className="flex flex-col gap-2 p-4">
              {[
                { time: "00:00:04 → 00:00:07", w: "88%" },
                { time: "00:00:07 → 00:00:10", w: "64%" },
                { time: "00:00:10 → 00:00:13", w: "76%" },
              ].map((row) => (
                <div key={row.time} className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-2">
                  <span className="shrink-0 text-[9px] font-medium text-slate-400">{row.time}</span>
                  <span className="h-2 rounded-full bg-slate-100" style={{ width: row.w }} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Captioning &amp; Subtitling
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Subtitles that stay in sync, in every language
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Frame-accurate captions, delivered in the format your platform expects — and
              translated without losing timing or meaning.
            </p>

            <ChipList items={captionFormats} tone="blue" className="mt-6" />
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={captioningFeatures} columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </Container>
    </section>
  );
}
