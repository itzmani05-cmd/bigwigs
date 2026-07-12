import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LogOut, ShieldCheck, Briefcase, User, UserPlus } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
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
  const { user, logout } = useAuth();

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
                  <a
                    href={item.href}
                    onClick={() => !item.mega && onClose()}
                    className="flex-1 text-base font-semibold text-slate-700 hover:text-brand-green-500 py-2.5 transition-colors"
                  >
                    {item.name}
                  </a>
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
                      {item.mega.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={onClose}
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
                    onClick={onClose}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
                  >
                    <User size={16} className="text-slate-400" />
                    My account
                  </Link>
                  {user.role === "admin" && (
                    <Link
                      to="/admin"
                      onClick={onClose}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
                    >
                      <ShieldCheck size={16} className="text-slate-400" />
                      Admin dashboard
                    </Link>
                  )}
                  {(user.role === "admin" || user.role === "employee") && (
                    <Link
                      to="/employee"
                      onClick={onClose}
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
                      onClose();
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
                to="/signup"
                onClick={onClose}
                className="mt-4 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors select-none"
              >
                <UserPlus size={16} />
                Sign up
              </Link>
            )}

            <a
              href={ctaItem.href}
              onClick={onClose}
              className="mt-3 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors select-none"
            >
              {ctaItem.name}
            </a>
            <a
              href={demoItem.href}
              onClick={onClose}
              className="mt-3 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-50 transition-colors select-none"
            >
              {demoItem.name}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
