import { Brain } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { llmFeatures } from "./llmData";

export default function LargeLanguageModelsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-7">
          {/* LEFT — flat model architecture illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Brain size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Model Architecture</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Fine-Tuned</span>
            </div>
            <div className="flex h-48 items-center justify-around bg-slate-50 px-4">
              {[3, 5, 4].map((count, col) => (
                <div key={col} className="flex flex-col gap-3">
                  {Array.from({ length: count }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-2.5 w-2.5 rounded-full ${col === 1 ? "bg-brand-blue-500/70" : "bg-slate-300"}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">Instruction-tuned · RLHF-aligned</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Large Language Models
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Enterprise LLM solutions built for business
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              We work across every major model family — fine-tuned, evaluated, and aligned to
              the tasks your business actually needs solved.
            </p>

            <ChipList items={llmFeatures} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
