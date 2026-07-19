import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Lock,
  Globe,
  Target,
  ArrowUp,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import HashLink from "@/components/ui/HashLink";

const focusRing =
  "outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-brand-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 5.5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2H21l-6.53 7.46L22 22h-6.828l-5.35-6.99L3.64 22H1l7.02-8.03L2 2h6.914l4.83 6.39L18.244 2zm-1.197 18h1.884L7.06 3.94H5.06L17.047 20z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8.5h2.85l.43-3.31h-3.28V8.05c0-.96.27-1.62 1.65-1.62h1.76V3.5A23.5 23.5 0 0 0 14.9 3.3c-2.5 0-4.2 1.52-4.2 4.32v2.57H8v3.31h2.7V22h2.8z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.5v-7l6.3 3.5-6.3 3.5z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: XIcon, label: "X (Twitter)", href: "#" },
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: YoutubeIcon, label: "YouTube", href: "#" },
];

interface ContactItem {
  icon: LucideIcon;
  lines: string[];
  href?: string;
}

const CONTACT_INFO: ContactItem[] = [
  { icon: MapPin, lines: ["Pudukkottai, Tamil Nadu, India"] },
  {
    icon: Mail,
    lines: ["info@bigwigsfolks.in "],
    href: "mailto:info@bigwigsfolks.in",
  },
  { icon: Clock, lines: ["Mon – Sat", "9:00 AM – 6:00 PM IST"] },
];

interface LinkGroup {
  heading: string;
  links: { name: string; href: string }[];
}

const linkGroups: LinkGroup[] = [
  {
    heading: "Our Services",
    links: [
      { name: "AI Data Annotation", href: "#core-services" },
      { name: "Generative AI & LLM Services", href: "#core-services" },
      { name: "Software Development", href: "#core-services" },
      { name: "Healthcare AI", href: "#core-services" },
      { name: "Language & Content Services", href: "#core-services" },
      { name: "Data Collection", href: "#core-services" },
      { name: "Data Processing", href: "#core-services" },
      { name: "Computer Vision Solutions", href: "#core-services" },
      { name: "NLP Solutions", href: "#core-services" },
      { name: "Enterprise AI Solutions", href: "#core-services" },
    ],
  },
  {
    heading: "Industries We Serve",
    links: [
      { name: "Healthcare & Life Sciences", href: "#industries" },
      { name: "Retail & E-commerce", href: "#industries" },
      { name: "Finance & FinTech", href: "#industries" },
      { name: "Automotive", href: "#industries" },
      { name: "Technology & SaaS", href: "#industries" },
      { name: "Education & E-learning", href: "#industries" },
      { name: "Media & Entertainment", href: "#industries" },
      { name: "Manufacturing", href: "#industries" },
      { name: "Logistics & Supply Chain", href: "#industries" },
      { name: "Government & Public Sector", href: "#industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About Us", href: "#about-bigwigs" },
      { name: "Careers", href: "/careers" },
      { name: "Our Team", href: "/team" },
      { name: "Case Studies", href: "#" },
      { name: "Blog & Insights", href: "/blog" },
      { name: "News & Updates", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Investor Relations", href: "#" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Knowledge Base", href: "#" },
      { name: "Datasets", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Guides & Tutorials", href: "#" },
      { name: "Whitepapers", href: "#" },
      { name: "Downloads", href: "#" },
      { name: "Glossary", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
  { name: "Sitemap", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReveal(1);
      return;
    }

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const observer = new IntersectionObserver(
      ([entry]) => setReveal(entry.intersectionRatio),
      { threshold: thresholds }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[#050505] text-[#A1A1AA]">
      {/* faint dotted grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* soft blue radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-brand-blue-500/10 blur-[140px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/5 h-96 w-96 rounded-full bg-orange-500/[0.05] blur-[130px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* faint AI network lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full opacity-[0.08]"
        viewBox="0 0 1200 200"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 120 L220 60 L460 140 L720 40 L960 110 L1200 70" stroke="#2563EB" strokeWidth="1" />
        <circle cx="220" cy="60" r="2.5" fill="#60a5fa" />
        <circle cx="720" cy="40" r="2.5" fill="#60a5fa" />
        <circle cx="960" cy="110" r="2.5" fill="#f97316" />
      </svg>

      {/* tiny floating particles */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-brand-blue-400/50"
        animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute right-[16%] top-[10%] h-1 w-1 rounded-full bg-orange-400/50"
        animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <Container
        className="relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-8 transition-[opacity,transform] duration-500 ease-out"
        style={{ opacity: reveal, transform: `translateY(${(1 - reveal) * 48}px)` }}
      >
        {/* main columns */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1 — brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <HashLink href="#home" className={`inline-flex w-fit ${focusRing}`}>
              <img
                src="/assets/Logo.png"
                alt="Bigwigs Technologies Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain brightness-150 drop-shadow-[0_0_10px_rgba(37,99,235,0.3)] sm:h-14"
              />
            </HashLink>

           

            {/* social icons */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#A1A1AA] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500/50 hover:text-brand-blue-400 hover:shadow-[0_0_20px_2px_rgba(37,99,235,0.35)] ${focusRing}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* contact info */}
            <ul className="mt-7 flex flex-col gap-4">
              {CONTACT_INFO.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-brand-blue-400">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="flex flex-col text-sm text-[#A1A1AA]">
                      {item.lines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </span>
                  </>
                );
                return (
                  <li key={i} className="flex items-center gap-3">
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`flex items-center gap-3 transition-colors duration-200 hover:text-white ${focusRing}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Columns 2–5 — link groups */}
          {linkGroups.map((group) => (
            <nav key={group.heading} aria-label={group.heading} className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white">{group.heading}</h4>
              <span aria-hidden className="mt-2 block h-0.5 w-8 rounded-full bg-brand-blue-500" />
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <HashLink
                      href={link.href}
                      className={`text-sm leading-snug text-[#A1A1AA] transition-colors duration-200 hover:text-white ${focusRing}`}
                    >
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-6 border-t border-[#1F2937] pt-4 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-[#A1A1AA] sm:text-left">
            © {year} Bigwigs Technologies.
            <br className="sm:hidden" /> All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {LEGAL_LINKS.map((link, i) => (
              <span key={link.name} className="flex items-center gap-4">
                {i > 0 && <span className="text-[#1F2937]">|</span>}
                <a
                  href={link.href}
                  className={`text-xs text-[#A1A1AA] transition-colors duration-200 hover:text-white ${focusRing}`}
                >
                  {link.name}
                </a>
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={`flex items-center gap-2 rounded-full border border-[#1F2937] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:bg-brand-blue-500 ${focusRing}`}
          >
            Back to Top
            <ArrowUp size={14} />
          </button>
        </div>
      </Container>
    </footer>
  );
}
