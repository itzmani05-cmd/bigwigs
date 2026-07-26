import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { annotationTypes } from "./annotationTypesData";
import medicalImageAnnotation from "@/assests/healthcare/imageAnnotation.png";

export default function MedicalImageAnnotationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[56%_44%] lg:gap-12">
          {/* LEFT — scan viewer + annotation type dashboard */}
          <div className="mx-auto w-full">
            <img
              src={medicalImageAnnotation}
              alt="Medical image annotation dashboard showing an annotated MRI scan with AI-flagged regions and annotation type options"
              className="w-full h-auto rounded-2xl border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            />
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Medical Image Annotation
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Train AI models with high-precision medical annotation
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Every scan is annotated by teams trained on clinical taxonomy — then reviewed
              against a documented QA protocol before it ever reaches your model.
            </p>

            <ChipList items={annotationTypes} className="mt-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
