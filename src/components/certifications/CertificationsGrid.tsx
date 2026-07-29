import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import iso27001Badge from "@/assests/certifications/iso270001.png";
import iso9001Badge from "@/assests/certifications/iso9001-2015.png";

interface Certification {
  code: string;
  title: string;
  description: string;
  badge: string;
  points: string[];
}

const CERTIFICATIONS: Certification[] = [
  {
    code: "ISO/IEC 27001:2013",
    title: "Information Security Management",
    description:
      "Certifies that our information security management system (ISMS) meets the international standard for protecting client data — covering confidentiality, integrity, and availability across every engagement.",
    badge: iso27001Badge,
    points: [
      "Data confidentiality & access control",
      "Risk assessment & treatment",
      "Secure infrastructure & operations",
      "Continuous security monitoring",
    ],
  },
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    description:
      "Certifies that our quality management system consistently delivers services that meet client requirements and regulatory standards — from data annotation to enterprise software delivery.",
    badge: iso9001Badge,
    points: [
      "Consistent service quality",
      "Structured process governance",
      "Customer-focused delivery",
      "Continuous improvement",
    ],
  },
];

export default function CertificationsGrid() {
  return (
    <section id="certifications-grid" className="relative w-full scroll-mt-24 overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Our Certifications
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Standards We're Certified Against
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Independently audited and certified, so enterprises can trust how we handle their
            data and deliver their projects.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card flex h-full flex-col items-center rounded-[28px] p-7 text-center sm:p-8"
            >
              <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <img src={cert.badge} alt={`${cert.code} certification badge`} className="h-full w-full object-contain" />
              </span>

              <p className="mt-5 text-lg font-extrabold tracking-tight text-slate-900">{cert.code}</p>
              <p className="text-sm font-semibold text-slate-500">{cert.title}</p>

              <p className="mt-4 text-sm leading-relaxed text-slate-500">{cert.description}</p>

              <span className="mt-6 h-px w-full bg-slate-200" aria-hidden="true" />

              <ul className="mt-6 grid w-full grid-cols-1 gap-3 text-left sm:grid-cols-2">
                {cert.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
