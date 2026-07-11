import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle, UserPlus } from "lucide-react";
import { useAuth, roleHome } from "@/context/AuthContext";
import MagneticButton from "@/components/ui/MagneticButton";

const TITLE = "Sign up | BigWigs Technologies";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-brand-green-500 focus:ring-4 focus:ring-brand-green-500/10";

export default function Signup() {
  const { user, signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    if (user) navigate(roleHome(user.role), { replace: true });
  }, [user, navigate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (password.length < 8) {
      setStatus("error");
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setStatus("error");
      setErrorMessage("Passwords do not match.");
      return;
    }

    setStatus("submitting");
    try {
      await signup(name, email, password);
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
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Create your account</h1>
          <p className="mt-2 text-slate-600 text-sm">Join BigWigs Technologies</p>
        </motion.div>

        <div className="rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.2)] p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-slate-600">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

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
                autoComplete="new-password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="confirmPassword" className="text-xs font-semibold text-slate-600">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                autoComplete="new-password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-white font-semibold bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/15 hover:shadow-lg hover:shadow-brand-green-500/25 transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed select-none"
            >
              {status === "submitting" ? "Creating account..." : "Sign up"}
              <UserPlus size={16} />
            </MagneticButton>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-brand-green-600 hover:text-brand-green-700">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
