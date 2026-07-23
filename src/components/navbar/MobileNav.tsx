import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LogOut, ShieldCheck, Briefcase, User, UserPlus, Phone } from "lucide-react";

import HashLink from "@/components/ui/HashLink";
import type { NavItem } from "./navConfig";
import { ctaItem, demoItem } from "./navConfig";

function initialsOf(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

interface MobileNavProps {
  id: string;
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ id, items, isOpen, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden mx-4 mt-2 rounded-2xl border border-slate-100 bg-white shadow-lg overflow-hidden"
        >
          <div className="px-6 py-6 flex flex-col gap-1">
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <HashLink
                    href={item.href}
                    onClick={() => !item.mega && onClose()}
                    className="flex-1 text-base font-semibold text-slate-700 hover:text-brand-green-500 py-2.5 transition-colors"
                  >
                    {item.name}
                  </HashLink>
                  {item.mega && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.name} submenu`}
                      aria-expanded={expanded === item.name}
                      aria-controls={`mobile-submenu-${index}`}
                      onClick={() => setExpanded(expanded === item.name ? null : item.name)}
                      className="p-2 text-slate-400 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green-500"
                    >
                      <motion.span animate={{ rotate: expanded === item.name ? 180 : 0 }}>
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                  )}
                </div>
                <AnimatePresence>
                  {item.mega && expanded === item.name && (
                    <motion.div
                      id={`mobile-submenu-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-l-2 border-slate-100 ml-1 pl-4 mb-2"
                    >
                      {item.mega.links.map((link) =>
                        link.href.startsWith("/") ? (
                          <Link
                            key={link.name}
                            to={link.href}
                            onClick={onClose}
                            className="block py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <HashLink
                            key={link.name}
                            href={link.href}
                            onClick={onClose}
                            className="block py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                          >
                            {link.name}
                          </HashLink>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="border-b border-slate-50" />
              </motion.div>
            ))}

            <HashLink
              href={ctaItem.href}
              onClick={onClose}
              className="mt-3 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors select-none"
            >
              <Phone size={16} />
              {ctaItem.name}
            </HashLink>
            <HashLink
              href={demoItem.href}
              onClick={onClose}
              className="mt-3 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-blue-500/20 transition-all duration-300 select-none"
            >
              {demoItem.name}
            </HashLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
