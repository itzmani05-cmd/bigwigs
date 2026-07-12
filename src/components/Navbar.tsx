import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, UserPlus } from "lucide-react";
import { MotionConfig } from "framer-motion";
import { navItems, ctaItem, demoItem } from "./navbar/navConfig";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";
import UserMenu from "./navbar/UserMenu";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const { pathname } = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) {
      setHeroVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <header
        className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ease-out ${
          heroVisible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "border-b border-slate-100 shadow-[0_1px_0_0_rgba(15,23,42,0.05)]" : "border-b border-transparent"}`}
      >
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8 flex items-center justify-between h-18 lg:h-20">
          <a href="#home" className="flex items-center group shrink-0">
            <img
              src="/assets/Logo.png"
              alt="BigWigs Technologies Logo"
              width={196}
              height={72}
              className="h-11 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          <DesktopNav items={navItems} pathname={pathname} />

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {user ? (
              <UserMenu />
            ) : (
              <Link
                to="/signup"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <UserPlus size={16} />
                Sign up
              </Link>
            )}
            <a
              href={demoItem.href}
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-neutral-800"
            >
              {demoItem.name}
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-full text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors duration-200 focus:outline-none"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileNav
          id="mobile-nav-panel"
          items={navItems}
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </header>
    </MotionConfig>
  );
}
