import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const focusRing =
  "outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]";

interface LinkGroup {
  heading: string;
  links: { name: string; href: string }[];
}

const linkGroups: LinkGroup[] = [
  {
    heading: "Services",
    links: [
      { name: "GIS & Geospatial Mapping", href: "#services" },
      { name: "LiDAR (2D & 3D)", href: "#services" },
      { name: "GIS & Geospatial Mapping", href: "#services" },
      { name: "Medical Image Annotation", href: "#services" },
      { name: "Computer Vision", href: "#services" },
      { name: "Enterprise Automation", href: "#services" },
      { name: "Data Analytics", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "Our Team", href: "#about" },
      { name: "Blog", href: "#about" },
      { name: "Events", href: "#about" },
      { name: "Locations", href: "#about" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Whitepapers", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  },
];

const legalLinks = [
  { name: "Terms of Use", href: "#" },
  { name: "Privacy Policy", href: "#" },
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

  return (
    <footer
      ref={footerRef}
      className="relative min-h-screen bg-[#0a0a0a] text-[#8a8a8a] flex flex-col"
    >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200, 200, 200, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 200, 200, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <Container
          className="flex-1 flex flex-col justify-between pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-8 transition-[opacity,transform] duration-500 ease-out"
          style={{ opacity: reveal, transform: `translateY(${(1 - reveal) * 48}px)` }}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            <a href="#home" className={`flex items-start w-fit ${focusRing}`}>
              <img
                src="/assets/Logo.png"
                alt="BigWigs Technologies Logo"
                width={180}
                height={60}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
              />
            </a>

            {linkGroups.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h4 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-5">
                  {group.heading}
                </h4>
                <ul className="flex flex-col gap-3.5">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`text-sm font-normal text-[#8a8a8a] hover:text-white transition-colors duration-200 ${focusRing}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Row 2*/}
          <div className="flex flex-col gap-6 pt-16 sm:pt-24 lg:pt-28">
            <p className="text-[84px] sm:text-[110px] lg:text-[118px] font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
              Precision AI for the decisions enterprises rely on.
            </p>
          </div>

          {/* Row 3*/}
          <div className="border-t border-white/10 pt-6 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <button
              type="button"
              className={`text-xs text-[#6b6b6b] hover:text-white transition-colors duration-200 ${focusRing}`}
            >
              Manage cookie preferences
            </button>

            <p className="text-xs text-[#6b6b6b]">
              © {year} BigWigs Technologies. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs text-[#6b6b6b] hover:text-white transition-colors duration-200 ${focusRing}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
    </footer>
  );
}
