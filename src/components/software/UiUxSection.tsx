import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import uiUxImg from "@/assests/software-dev/ui-ux.png";

const TAGS = ["Wireframes", "Design Systems", "Prototype", "Dashboard", "Accessibility"];

export default function UiUxSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
            UI / UX
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            From wireframe to interface people trust
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <img src={uiUxImg} alt="UI/UX design" className="w-full h-auto object-cover" />
        </div>

        <ChipList items={TAGS} className="mt-10 justify-center" />
      </Container>
    </section>
  );
}
