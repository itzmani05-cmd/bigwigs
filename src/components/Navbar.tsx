import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight, LogOut, ShieldCheck, Briefcase, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, demoItem } from "./navbar/navConfig";
import MegaMenu from "./navbar/MegaMenu";
import UserMenu from "./navbar/UserMenu";
import MagneticButton from "@/components/ui/MagneticButton";
import { useAuth } from "@/context/AuthContext";

function initialsOf(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show the navbar while the hero section is in view; hide it for
  // the rest of the page. Re-observed on route change; routes without a
  // "#home" hero (e.g. /careers) have no such section, so the navbar just
  // stays visible there.
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

  const openMenu = (name: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMega(name);
  };

  const scheduleClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setOpenMega(null), 150);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        heroVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-[max-width,padding,margin,border-radius,background-color,box-shadow] duration-500 ease-out ${
          scrolled
            ? "max-w-[1040px] mt-3 px-3 py-2 rounded-2xl border border-white/60 bg-white/75 backdrop-blur-xl shadow-[0_12px_40px_-16px_rgba(15,23,42,0.25)]"
            : "max-w-[1240px] px-3 lg:px-[15px] py-2.5 rounded-none border border-transparent bg-white/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(15,23,42,0.06)]"
        }`}
      >
        <a href="#home" className="flex items-center group shrink-0">
          <img
            src="/assets/Logo.png"
            alt="BigWigs Technologies Logo"
            width={196}
            height={72}
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
                  className={`relative z-10 flex items-center gap-1 px-4 py-2 text-[14.5px] font-semibold tracking-[-0.01em] rounded-full transition-colors duration-200 ${
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
                {isActive && (
                  <span className="absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-green-500" />
                )}
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
          {user ? (
            <UserMenu />
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Log in
            </Link>
          )}
          <span className="h-6 w-px bg-slate-200" aria-hidden="true" />
          <MagneticButton
            href={demoItem.href}
            className="relative overflow-hidden border-2 border-brand-green-500 text-brand-green-500 hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ease-out group select-none hover:shadow-md hover:shadow-brand-green-500/20"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10">{demoItem.name}</span>
          </MagneticButton>
        </div>

        <button
          className="lg:hidden p-2 rounded-full text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors duration-200 focus:outline-none"
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
              {user ? (
                <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/60 overflow-hidden">
                  <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-green-500 to-brand-blue-500 text-white text-xs font-bold shrink-0">
                      {initialsOf(user.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">{user.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user.email}</p>
                    </div>
                  </div>
                  <div className="p-1.5 flex flex-col">
                    <Link
                      to="/account"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
                    >
                      <User size={16} className="text-slate-400" />
                      My account
                    </Link>
                    {user.role === "admin" && (
                      <Link
                        to="/admin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
                      >
                        <ShieldCheck size={16} className="text-slate-400" />
                        Admin dashboard
                      </Link>
                    )}
                    {(user.role === "admin" || user.role === "employee") && (
                      <Link
                        to="/employee"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
                      >
                        <Briefcase size={16} className="text-slate-400" />
                        Employee portal
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={16} />
                      Log out
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors select-none"
                >
                  Log in
                </Link>
              )}
              <a
                href={demoItem.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-50 transition-colors select-none"
              >
                {demoItem.name}
              </a>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
