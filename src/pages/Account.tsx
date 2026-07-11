import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, ShieldCheck, Briefcase } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import MagneticButton from "@/components/ui/MagneticButton";

const TITLE = "My Account | BigWigs Technologies";

export default function Account() {
  const { user, logout } = useAuth();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  if (!user) return null;

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center bg-white py-20">
      <div className="w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.2)] p-6 sm:p-10 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600 text-xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
            Welcome, {user.name}
          </h1>
          <p className="mt-1 text-sm text-slate-500">{user.email}</p>
          {user.role === "admin" && (
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-blue-500/10 px-3 py-1 text-xs font-semibold text-brand-blue-600">
              <ShieldCheck size={14} />
              Admin
            </span>
          )}
          {user.role === "employee" && (
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-green-500/10 px-3 py-1 text-xs font-semibold text-brand-green-600">
              <Briefcase size={14} />
              Employee
            </span>
          )}

          <div className="mt-8 flex flex-col gap-3">
            {user.role === "admin" && (
              <Link
                to="/admin"
                className="w-full rounded-full border-2 border-brand-green-500 text-brand-green-600 px-6 py-3 text-sm font-semibold hover:bg-brand-green-50 transition-colors"
              >
                Go to admin dashboard
              </Link>
            )}
            {(user.role === "admin" || user.role === "employee") && (
              <Link
                to="/employee"
                className="w-full rounded-full border-2 border-slate-200 text-slate-700 px-6 py-3 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Go to employee portal
              </Link>
            )}
            <MagneticButton
              as="button"
              type="button"
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/15 hover:shadow-lg hover:shadow-brand-green-500/25 transition-shadow duration-300 select-none"
            >
              <LogOut size={16} />
              Log out
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
