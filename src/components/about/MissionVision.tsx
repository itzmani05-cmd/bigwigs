import { Target, Eye, Gem, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollStagger, ScrollStaggerItem } from "@/components/scroll";

interface ValueItem {
  title: string;
  description: string;
}

interface Pillar {
  icon: LucideIcon;
  title: string;
  description?: string;
  items?: ValueItem[];
  iconBg: string;
  iconText: string;
  bar: string;
}

const pillars: Pillar[] = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Our mission is to leverage our expertise in composite products to deliver high quality services inspired by creativity and innovation. We dream to be the go-to BPO organization that tailors our services to match our client requirements in the most effective way.",
    iconBg: "bg-brand-blue-50",
    iconText: "text-brand-blue-600",
    bar: "bg-brand-blue-500",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Our vision is to become the standard of excellence in customer services and inspire other brands to do the same. We envision to provide the best services and use effective strategies to inspire and implement solutions to various business needs.",
    iconBg: "bg-orange-50",
    iconText: "text-orange-500",
    bar: "bg-orange-500",
  },
  {
    icon: Gem,
    title: "Our Values",
    items: [
      {
        title: "Innovation",
        description: "We continuously explore better ideas and emerging technologies.",
      },
      {
        title: "Integrity",
        description: "We build relationships through transparency, trust, and accountability.",
      },
      {
        title: "Excellence",
        description: "We are committed to delivering quality in everything we do.",
      },
    ],
    iconBg: "bg-purple-50",
    iconText: "text-purple-600",
    bar: "bg-purple-500",
  },
];

export default function MissionVision() {
  return (
    <section id="mission-vision" className="relative w-full scroll-mt-24 overflow-hidden bg-white py-14 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-blue-500/[0.06] blur-[100px]"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              What Drives Us
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Mission, Vision &amp; Values
          </h2>
        </div>

        <div className="relative mt-10">
          {/* subtle connector implying Mission → Vision → Values, visible only in the gutters between cards */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-11 hidden h-px bg-gradient-to-r from-brand-blue-300 via-orange-300 to-purple-300 lg:block"
          />

          <ScrollStagger
            as="div"
            staggerDelay={0.1}
            amount={0.35}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <ScrollStaggerItem
                  key={pillar.title}
                  as="div"
                  direction="up"
                  distance={30}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-[20px] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-shadow duration-300 ease-out hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
                >
                  {/* top accent line, overlapping the card's top border */}
                  <span aria-hidden className={`absolute -top-px left-7 h-[2px] w-12 rounded-full ${pillar.bar}`} />

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_0_6px_rgba(0,0,0,0.02)] ${pillar.iconBg} ${pillar.iconText}`}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">{pillar.title}</h3>

                  {pillar.items ? (
                    <ul className="mt-3 flex flex-col divide-y divide-slate-100">
                      {pillar.items.map((item) => (
                        <li key={item.title} className="py-2.5 first:pt-0 last:pb-0">
                          <span className="text-sm font-bold text-slate-900">{item.title}</span>
                          <p className="mt-0.5 text-[13px] leading-[1.5] text-slate-500">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-[15px] leading-[1.6] font-normal text-slate-500">
                      {pillar.description}
                    </p>
                  )}
                </ScrollStaggerItem>
              );
            })}
          </ScrollStagger>
        </div>
      </Container>
    </section>
  );
}
