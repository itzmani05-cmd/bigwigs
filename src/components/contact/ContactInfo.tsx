import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import { LinkedInIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const CARDS = [
  {
    icon: Phone,
    title: "Call Us",
    rows: [
      { label: "Business Enquiries", value: "+91 93447 69914", href: "tel:+919344769914" },
      { label: "Career Enquiries", value: "+91 63824 73625", href: "tel:+916382473625" },
    ],
  },
  {
    icon: Mail,
    title: "Mail Us",
    rows: [
      { label: "Business Enquiries", value: "vignesh@bigwigstech.com", href: "mailto:vignesh@bigwigstech.com" },
      { label: "Career Enquiries", value: "hr@bigwigstech.com", href: "mailto:hr@bigwigstech.com" },
    ],
  },
];

const SOCIAL_LINKS = [
  { Icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/bigwigs-technologies" },
  { Icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/@vigneshragupathy9340" },
];

export default function ContactInfo() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 lg:pb-20">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{card.title}</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {card.rows.map((row) => (
                    <div key={row.label}>
                      <span className="block text-[11px] text-slate-400">{row.label}</span>
                      <a
                        href={row.href}
                        className="text-sm font-semibold text-slate-900 hover:text-brand-blue-600"
                      >
                        {row.value}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.215, 0.61, 0.355, 1] }}
            className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:p-8"
          >
            <h3 className="text-base font-bold text-slate-900">Follow Us</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              Stay updated with our latest news and stories.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600 transition-colors duration-300 hover:bg-brand-blue-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
