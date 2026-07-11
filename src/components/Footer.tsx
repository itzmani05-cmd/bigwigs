import { Globe, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { navItems, ctaItem, demoItem } from "@/components/navbar/navConfig";

const socialLinks = [
  { name: "Website", href: "#", icon: Globe },
  { name: "Email", href: "#", icon: Mail },
  { name: "Contact", href: "#contact", icon: MessageCircle },
];

const servicesLinks =
  navItems.find((item) => item.name === "Services")?.mega?.links ?? [];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      {/* small square grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      {/* soft brand glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-16 w-96 h-96 rounded-full bg-brand-green-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-[120px]" />

      <div className="relative">
        <Container className="py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8">
            <div className="lg:col-span-4 flex flex-col gap-5 lg:pr-8">
              <a href="#home" className="flex items-center w-fit">
                <img
                  src="/assets/Logo.png"
                  alt="BigWigs Technologies Logo"
                  width={160}
                  height={58}
                  className="h-10 w-auto object-contain"
                />
              </a>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Empowering modern enterprises with state-of-the-art AI infrastructures,
                intelligent agents, and next-generation software architectures.
              </p>
              <div className="flex items-center gap-2 mt-1">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      aria-label={link.name}
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-brand-green-500/50 hover:bg-white/[0.06] transition-colors duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="text-xs font-semibold text-white tracking-[0.12em] uppercase mb-5">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-green-500"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold text-white tracking-[0.12em] uppercase mb-5">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-green-500"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold text-white tracking-[0.12em] uppercase mb-5">
                Get in touch
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={ctaItem.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {ctaItem.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-green-500"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={demoItem.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {demoItem.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-green-500"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>

        <div className="border-t border-white/10">
          <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              © {year} BigWigs Technologies. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">Powering AI with Precision.</p>
          </Container>
        </div>
      </div>
    </footer>
  );
}
