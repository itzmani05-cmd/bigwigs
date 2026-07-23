import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useHashLink } from "@/hooks/useHashLink";
import type { NavItem } from "./navConfig";
import MegaMenu from "./MegaMenu";

function slug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

interface NavTriggerProps {
  item: NavItem;
  isActive: boolean;
  isOpen: boolean;
  onFocus: () => void;
}

function NavTrigger({ item, isActive, isOpen, onFocus }: NavTriggerProps) {
  const { href, onClick } = useHashLink(item.href);

  return (
    <a
      href={href}
      onClick={onClick}
      onFocus={onFocus}
      aria-haspopup={item.mega ? "true" : undefined}
      aria-expanded={item.mega ? isOpen : undefined}
      aria-controls={item.mega ? `mega-${slug(item.name)}` : undefined}
      className={`relative z-10 flex items-center gap-1 px-3 py-2.5 text-[15px] font-semibold tracking-[-0.01em] rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue-500 focus-visible:outline-offset-2 ${
        isActive ? "text-brand-blue-600" : isOpen ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
      }`}
    >
      {item.name}
      {item.mega && (
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ChevronDown size={14} />
        </motion.span>
      )}
    </a>
  );
}

interface DesktopNavProps {
  items: NavItem[];
  pathname: string;
  activeHash: string;
}

export default function DesktopNav({ items, pathname, activeHash }: DesktopNavProps) {
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMega) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMega(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openMega]);

  const activeItem = items.find((item) => item.name === openMega);

  return (
    <div
      ref={containerRef}
      className="hidden lg:block"
      onMouseLeave={() => {
        setOpenMega(null);
        setHoveredIndex(null);
      }}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          setOpenMega(null);
        }
      }}
    >
      <nav aria-label="Primary" className="flex items-center gap-1.5 relative">
        {items.map((item, index) => {
          const isActive =
            item.href !== "#" &&
            (pathname === item.href ||
              (pathname === "/" && item.href.startsWith("#") && activeHash === item.href));
          const isOpen = openMega === item.name;
          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                setHoveredIndex(index);
                setOpenMega(item.mega ? item.name : null);
              }}
            >
              <NavTrigger
                item={item}
                isActive={isActive}
                isOpen={isOpen}
                onFocus={() => {
                  setHoveredIndex(index);
                  if (item.mega) setOpenMega(item.name);
                }}
              />
              {isActive && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute left-2 right-2 -bottom-0.5 h-[2.5px] rounded-full bg-brand-blue-500"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {hoveredIndex === index && (
                <motion.span
                  layoutId="navbar-pill"
                  className="absolute inset-0 rounded-full bg-slate-100/80"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </div>
          );
        })}
      </nav>

      <AnimatePresence>
        {activeItem?.mega && <MegaMenu content={activeItem.mega} id={`mega-${slug(activeItem.name)}`} />}
      </AnimatePresence>
    </div>
  );
}
