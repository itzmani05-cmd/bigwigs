import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LogOut, ShieldCheck, Briefcase, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function UserMenu({ onNavigate }: { onNavigate?: () => void }) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  const close = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border transition-colors duration-200 ${
          open ? "border-slate-200 bg-slate-50" : "border-transparent hover:border-slate-200 hover:bg-slate-50"
        }`}
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-brand-green-500 to-brand-blue-500 text-white text-[11px] font-bold tracking-wide shadow-sm shrink-0">
          {getInitials(user.name)}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-slate-100 bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.28)] overflow-hidden z-50"
            role="menu"
          >
            <div className="px-4 py-3.5 border-b border-slate-50 bg-slate-50/60">
              <p className="text-sm font-semibold text-slate-900 truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate mt-0.5">{user.email}</p>
              {user.role !== "user" && (
                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-600 capitalize">
                  {user.role}
                </span>
              )}
            </div>

            <div className="p-1.5 flex flex-col">
              <Link
                to="/account"
                onClick={close}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                <User size={16} className="text-slate-400" />
                My account
              </Link>
              {user.role === "admin" && (
                <Link
                  to="/admin"
                  onClick={close}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <ShieldCheck size={16} className="text-slate-400" />
                  Admin dashboard
                </Link>
              )}
              {(user.role === "admin" || user.role === "employee") && (
                <Link
                  to="/employee"
                  onClick={close}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <Briefcase size={16} className="text-slate-400" />
                  Employee portal
                </Link>
              )}
            </div>

            <div className="p-1.5 border-t border-slate-50">
              <button
                type="button"
                onClick={() => {
                  logout();
                  close();
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut size={16} />
                Log out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
