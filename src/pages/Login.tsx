import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle, LogIn } from "lucide-react";
import { useAuth, roleHome } from "@/context/AuthContext";
import MagneticButton from "@/components/ui/MagneticButton";

const TITLE = "Log in | BigWigs Technologies";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-brand-green-500 focus:ring-4 focus:ring-brand-green-500/10";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    if (user) {
      const redirectTo = (location.state as { from?: string } | null)?.from ?? roleHome(user.role);
      navigate(redirectTo, { replace: true });
    }
  }, [user, location.state, navigate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      await login(email, password);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center bg-white py-20">
      <div className="w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-2 text-slate-600 text-sm">Log in to your BigWigs account</p>
        </motion.div>

        <div className="rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.2)] p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-xs font-semibold text-slate-600">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                <AlertCircle size={16} className="shrink-0" />
                {errorMessage}
              </div>
            )}

            <MagneticButton
              as="button"
              type="submit"
              disabled={status === "submitting"}
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-white font-semibold bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/15 hover:shadow-lg transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed select-none"
            >
              {status === "submitting" ? "Logging in..." : "Log in"}
              <LogIn size={16} />
            </MagneticButton>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold text-brand-green-600 hover:text-brand-green-700">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
