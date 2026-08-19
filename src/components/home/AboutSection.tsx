import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Globe2,
  ListChecks,
  ShieldCheck,
  Target,
  Eye,
  Gem,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";

import mountainFlagIllustration from "@/assests/about/mountainFlag.png";
import telescopeIllustration from "@/assests/about/telescope.png";
import shieldBadgeIllustration from "@/assests/about/shieldBadge.png";

const STATS = [
  { icon: Users, value: "75+", label: "Experts" },
  { icon: Globe2, value: "50+", label: "Global Clients" },
  { icon: ListChecks, value: "10M+", label: "Tasks Completed" },
  { icon: ShieldCheck, value: "99.5%", label: "Quality Accuracy" },
];

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconText: string;
  underline: string;
  illustration: string;
}

const PILLARS: Pillar[] = [
  {
    title: "Our Mission",
    description: "Our mission is to leverage our expertise in composite products to deliver high quality services inspired by creativity and innovation. We dream to be the go-to BPO organization that tailors our services to match our client requirements in the most effective way.",
    iconBg: "bg-brand-blue-50",
    iconText: "text-brand-blue-600",
    underline: "bg-brand-blue-500",
    illustration: mountainFlagIllustration,
  },
  {
    title: "Our Vision",
    description: "Our vision is to become the standard of excellence in customer services and inspire other brands to do the same. We envision to provide the best services and use effective strategies to inspire and implement solutions to various business needs",
    iconBg: "bg-purple-50",
    iconText: "text-purple-600",
    underline: "bg-purple-500",
    illustration: telescopeIllustration,
  },
  {
    title: "Our Values",
    description: "Innovation, integrity, and excellence in everything we deliver.",
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
    underline: "bg-orange-500",
    illustration: shieldBadgeIllustration,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about-bigwigs"
      className="relative scroll-mt-6 overflow-hidden bg-white py-8 lg:py-10"
    >
      <Container className="relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              About Bigwigs Technologies
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Empowering Enterprises
            <br />
            <span className="text-brand-blue-500">with AI & Technology</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
            Bigwigs Technologies is a trusted AI Data Services and Technology partner
            helping global enterprises build intelligent products through AI data
            annotation, Generative AI, enterprise software development, healthcare AI,
            and multilingual data solutions.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="/apply"
              magnetic={false}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
            >
              <span>Work With Us</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="/about"
              magnetic={false}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:text-brand-blue-600 select-none"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.25)]"
              >
                <img
                  src={pillar.illustration}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 object-contain opacity-20"
                />

                <div className="relative z-10">
                  <h3 className="mt-4 text-sm font-bold text-slate-900">{pillar.title}</h3>
                  <span aria-hidden className={`mt-2 block h-0.5 w-6 rounded-full ${pillar.underline}`} />
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mt-10 grid grid-cols-2 divide-x divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white shadow-[0_20px_45px_-20px_rgba(15,23,42,0.15)] sm:grid-cols-4 sm:divide-y-0"
        >
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center px-4 py-4 text-center"
            >
              <div className="flex items-center gap-2">
                <Icon size={20} strokeWidth={1.75} className="text-brand-blue-500" />
                <span className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                  {value}
                </span>
              </div>

              <span className="mt-1 text-[11px] leading-tight text-slate-500 sm:text-xs">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
