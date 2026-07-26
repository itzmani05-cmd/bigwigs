import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import { speechAnnotationFeatures } from "./speechAnnotationData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const SPEAKER_SEGMENTS = [
  { w: "18%", tone: "bg-brand-blue-500/70" },
  { w: "10%", tone: "bg-orange-400/70" },
  { w: "22%", tone: "bg-brand-blue-500/70" },
  { w: "14%", tone: "bg-orange-400/70" },
  { w: "20%", tone: "bg-brand-blue-500/70" },
];

export default function SpeechAnnotationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Speech Annotation
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Every second labeled, every speaker tracked
          </h2>
        </div>

        {/* flat annotated timeline illustration */}
        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Annotated Timeline</span>
            <div className="flex items-center gap-3 text-[9px] font-medium text-slate-500">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-blue-500/70" />Speaker 1</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-400/70" />Speaker 2</span>
            </div>
          </div>
          <div className="px-5 py-6">
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100">
              {SPEAKER_SEGMENTS.map((seg, i) => (
                <span key={i} className={`h-full ${seg.tone}`} style={{ width: seg.w }} />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[9px] font-medium text-slate-400">
              <span>00:00:00</span>
              <span>00:01:24</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <IconGrid items={speechAnnotationFeatures} columnsClassName="grid-cols-1 sm:grid-cols-3" />
        </div>
      </Container>
    </section>
  );
}
