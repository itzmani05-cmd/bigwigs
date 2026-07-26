import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import mobileDevImg from "@/assests/software-dev/mobileDev.png";

const TAGS = ["Android", "iPhone", "Flutter", "React Native", "PWA"];

export default function MobileDevelopmentSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[34%_66%] lg:gap-12">
          <div className="order-2 mx-auto w-full max-w-[420px] lg:order-1">
            <div className="overflow-hidden rounded-2xl">
              <img src={mobileDevImg} alt="Mobile development" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Mobile Development
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              One codebase. Every device that matters.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Native performance where it counts, shared logic where it saves time —
              apps that feel built for iOS and Android, not ported to them.
            </p>

            <ChipList items={TAGS} className="mt-6" />
          </div>
        </div>
      </Container>
    </section>
  );
}
