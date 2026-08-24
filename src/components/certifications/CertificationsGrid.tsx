import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll";
import iso27001Badge from "@/assests/certifications/iso270001.png";
import iso9001Badge from "@/assests/certifications/iso9001-2015.png";

interface Certification {
  code: string;
  title: string;
  description: string;
  badge: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    code: "ISO/IEC 27001:2013",
    title: "Information Security Management",
    description:
      "Certifies that our information security management system (ISMS) meets the international standard for protecting client data — covering confidentiality, integrity, and availability across every engagement.",
    badge: iso27001Badge,
  },
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    description:
      "Certifies that our quality management system consistently delivers services that meet client requirements and regulatory standards — from data annotation to enterprise software delivery.",
    badge: iso9001Badge,
  },
];

export default function CertificationsGrid() {
  return (
    <section id="certifications" className="relative w-full scroll-mt-24 overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <ScrollReveal direction="up" distance={24} className="mx-auto max-w-2xl text-center">
           <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              Certifications
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Standards We're Certified Against
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Independently audited and certified, so enterprises can trust how we handle their
            data and deliver their projects.
          </p>
        </ScrollReveal>

        <ScrollStagger as="div" staggerDelay={0.12} amount={0.3} className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CERTIFICATIONS.map((cert, i) => (
            <ScrollStaggerItem
              key={cert.code}
              as="div"
              direction={i === 0 ? "left" : "right"}
              distance={36}
              className="glass-card flex h-full flex-col items-center rounded-[28px] p-7 text-center sm:p-8"
            >
              <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <img src={cert.badge} alt={`${cert.code} certification badge`} className="h-full w-full object-contain" />
              </span>

              <p className="mt-5 text-lg font-extrabold tracking-tight text-slate-900">{cert.code}</p>
              <p className="text-sm font-semibold text-slate-500">{cert.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">{cert.description}</p>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </Container>
    </section>
  );
}
