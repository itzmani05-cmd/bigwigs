"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, ctaItem, demoItem } from "./navbar/navConfig";
import MegaMenu from "./navbar/MegaMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = (name: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMega(name);
  };

  const scheduleClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setOpenMega(null), 150);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <div
        className={`mx-auto flex items-center justify-between transition-[max-width,padding,margin,border-radius,background-color,box-shadow] duration-500 ease-out ${
          scrolled
            ? "max-w-[1040px] mt-3 px-5 py-2.5 rounded-2xl border border-white/60 bg-white/75 backdrop-blur-xl shadow-[0_12px_40px_-16px_rgba(15,23,42,0.25)]"
            : "max-w-[1240px] mt-0 px-6 lg:px-[15px] py-4 rounded-none border border-transparent bg-transparent shadow-none"
        }`}
      >
        <a href="#home" className="flex items-center group shrink-0">
          <Image
            src="/assets/Logo.png"
            alt="BigWigs Technologies Logo"
            width={196}
            height={72}
            priority
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1 relative">
          {navItems.map((item, index) => {
            const isActive = item.href !== "#" && pathname === item.href;
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  if (item.mega) openMenu(item.name);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  if (item.mega) scheduleClose();
                }}
              >
                <a
                  href={item.href}
                  className={`relative z-10 flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-full transition-colors duration-200 ${
                    isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                  {item.mega && (
                    <motion.span
                      animate={{ rotate: openMega === item.name ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  )}
                </a>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full bg-slate-100/80"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}

                <AnimatePresence>
                  {item.mega && openMega === item.name && (
                    <MegaMenu content={item.mega} />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={demoItem.href}
            className="relative overflow-hidden border-2 border-brand-green-500 text-brand-green-500 hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ease-out group select-none"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10">{demoItem.name}</span>
          </a>
          <a
            href={ctaItem.href}
            className="group flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/15 hover:shadow-lg hover:shadow-brand-green-500/25 transition-all duration-300 hover:-translate-y-0.5 select-none"
          >
            {ctaItem.name}
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-slate-600 hover:text-slate-950 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden mx-4 mt-2 rounded-2xl border border-slate-100 bg-white shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      onClick={() => !item.mega && setMobileMenuOpen(false)}
                      className="flex-1 text-base font-semibold text-slate-700 hover:text-brand-green-500 py-2.5 transition-colors"
                    >
                      {item.name}
                    </a>
                    {item.mega && (
                      <button
                        aria-label={`Toggle ${item.name} submenu`}
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.name ? null : item.name)
                        }
                        className="p-2 text-slate-400"
                      >
                        <motion.span
                          animate={{ rotate: mobileExpanded === item.name ? 180 : 0 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.mega && mobileExpanded === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-l-2 border-slate-100 ml-1 pl-4 mb-2"
                      >
                        {item.mega.links.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                          >
                            {link.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="border-b border-slate-50" />
                </motion.div>
              ))}
              <a
                href={demoItem.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold border-2 border-brand-green-500 text-brand-green-500 select-none"
              >
                {demoItem.name}
              </a>
              <a
                href={ctaItem.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-green-500 to-brand-blue-500 select-none"
              >
                {ctaItem.name}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
