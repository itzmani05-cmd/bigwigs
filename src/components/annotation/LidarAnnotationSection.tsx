import { Scan } from "lucide-react";
import Container from "@/components/ui/Container";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { lidarAnnotationFeatures } from "./lidarAnnotationData";

const POINT_CLOUD = Array.from({ length: 60 }).map((_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
}));

export default function LidarAnnotationSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-12">
          {/* LEFT — flat 3D point cloud illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Scan size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Point Cloud</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">3 objects</span>
            </div>
            <div className="relative h-56 overflow-hidden bg-slate-900">
              {POINT_CLOUD.map((p, i) => (
                <span key={i} className="absolute h-[3px] w-[3px] rounded-full bg-brand-blue-400/70" style={p} />
              ))}
              <span className="absolute left-[30%] top-[36%] h-16 w-20 rounded border-2 border-dashed border-orange-400/90" />
              <span className="absolute right-[20%] bottom-[18%] h-10 w-14 rounded border-2 border-dashed border-brand-blue-400/90" />
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">42,000 points · 3D cuboid labeling</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              LiDAR Annotation
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              3D perception for autonomous systems
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Point clouds labeled with 3D cuboids and lane markings — fused with camera data
              for models that need to understand real-world depth.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={lidarAnnotationFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3" align="center" />
        </div>
      </Container>
    </section>
  );
}
