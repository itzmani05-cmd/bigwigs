import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const TITLE = "Admin | BigWigs Technologies";

export default function Admin() {
  const { user, token } = useAuth();
  const [userCount, setUserCount] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    if (!token) return;
    fetch("/api/auth/admin/overview", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load admin overview.");
        return res.json();
      })
      .then((data: { userCount: number }) => setUserCount(data.userCount))
      .catch((err) => setError(err instanceof Error ? err.message : "Something went wrong."));
  }, [token]);

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
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-500/10 text-brand-blue-600">
            <ShieldCheck size={22} />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Admin dashboard
            </h1>
            <p className="text-sm text-slate-500">Signed in as {user.email}</p>
          </div>
        </motion.div>

        <div className="rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.2)] p-8">
          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : (
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green-600">
                <Users size={22} />
              </span>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">
                  {userCount ?? "…"}
                </p>
                <p className="text-sm text-slate-500">Registered accounts</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
