import Container from "@/components/ui/Container";
import { qualityMetrics } from "./qualityMetricsData";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

export default function QualityMetricsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Quality Metrics
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Every project measured, not just delivered
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3">
          {qualityMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 px-4 py-6 text-center"
            >
              {metric.type === "percent" ? (
                <div
                  className="relative flex h-20 w-20 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(#2563EB ${metric.value * 3.6}deg, #E2E8F0 ${metric.value * 3.6}deg 360deg)`,
                  }}
                >
                  <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white">
                    <span className="text-sm font-semibold text-slate-900">{metric.value}%</span>
                  </div>
                </div>
              ) : (
                <div className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-full border border-slate-200">
                  <metric.icon size={16} className="text-brand-blue-600" strokeWidth={1.75} />
                  <span className="text-sm font-semibold text-slate-900">{metric.value}</span>
                </div>
              )}
              <span className="text-xs font-medium leading-tight text-slate-600">{metric.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
