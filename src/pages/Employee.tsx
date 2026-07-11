import { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const TITLE = "Employee Portal | BigWigs Technologies";

export default function Employee() {
  const { user } = useAuth();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  if (!user) return null;

  return (
    <section className="relative min-h-[calc(100vh-72px)] bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600">
            <Briefcase size={22} />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Employee portal
            </h1>
            <p className="text-sm text-slate-500">Signed in as {user.email}</p>
          </div>
        </motion.div>

        <div className="rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.2)] p-8">
          <p className="text-slate-600 text-sm leading-relaxed">
            Welcome, {user.name}. This is your internal workspace — only employees and admins can
            see this page.
          </p>
        </div>
      </div>
    </section>
  );
}
