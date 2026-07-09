import { Globe, Mail, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { navItems, ctaItem, demoItem } from "@/components/navbar/navConfig";

const socialLinks = [
  { name: "Website", href: "#", icon: Globe },
  { name: "Email", href: "#", icon: Mail },
  { name: "Contact", href: "#contact", icon: MessageCircle },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#home" className="flex items-center w-fit">
              <img
                src="/assets/Logo.png"
                alt="BigWigs Technologies Logo"
                width={160}
                height={58}
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Enterprise AI systems across GIS, LiDAR, Medical AI, Computer
              Vision, Enterprise Automation, and Data Analytics.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-brand-green-400/50 hover:bg-white/10 transition-colors duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Get in touch
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={ctaItem.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {ctaItem.name}
                </a>
              </li>
              <li>
                <a
                  href={demoItem.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {demoItem.name}
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
    </footer>
  );
}
