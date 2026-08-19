import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CONTACT_GROUPS = [
  {
    heading: "Business Enquiries",
    details: [
      { icon: Phone, text: "+91 93447 69914", href: "tel:+919344769914" },
      { icon: Mail, text: "info@bigwigsfolks.in", href: "mailto:info@bigwigsfolks.in" },
      { icon: Clock, text: "Monday – Sunday | 24/7" },
    ],
  },
];

export default function DemoIntro() {
  return (
    <div className="lg:sticky lg:top-18">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Book Your Demo
        </span>
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          See Bigwigs Technologies in Action
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-500">
          Tell us about your project and we'll walk you through how our AI, data, and
          automation solutions can fit your business — tailored to your industry and goals.
        </p>

        <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
          Contact Us
        </h3>
        <div className="mt-4 flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white text-brand-blue-600">
            <MapPin size={16} strokeWidth={1.75} />
          </span>
          <p className="text-sm leading-relaxed text-slate-500">
            <span className="block font-semibold text-slate-900">
              Bigwigs Technologies Private Limited
            </span>
            2nd Floor, Vijaya Mini Hall, 206, Mathur, Tamil Nadu – 622515, India.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-5">
          {CONTACT_GROUPS.map((group) => (
            <div key={group.heading}>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                {group.heading}
              </span>
              <ul className="mt-2 flex flex-col gap-1.5">
                {group.details.map((item, i) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <Icon size={14} strokeWidth={1.75} className="shrink-0 text-brand-blue-600" />
                      <span className="text-sm text-slate-600">{item.text}</span>
                    </>
                  );
                  return (
                    <li key={i}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-2 transition-colors duration-200 hover:text-brand-blue-600"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-2">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
