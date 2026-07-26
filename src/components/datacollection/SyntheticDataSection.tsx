import { FlaskConical } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import { syntheticDataFeatures } from "./syntheticDataData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function SyntheticDataSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500">
              <FlaskConical size={20} strokeWidth={1.75} />
            </span>
          </span>
          <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Synthetic Data
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Simulated data for the cases real capture can&apos;t reach
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Digital twins and simulation environments generate rare events safely, at the volume
            training actually requires.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <IconGrid items={syntheticDataFeatures} columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" />
        </div>
      </Container>
    </section>
  );
}
