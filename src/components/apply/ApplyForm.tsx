import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { API_BASE } from "@/config/api";
import FormField from "./FormField";
import ResumeUpload from "./ResumeUpload";

const DRAFT_KEY = "bigwigs-apply-draft";

interface ApplyFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const EMPTY_FORM: ApplyFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  consent: false,
};

function FormSection({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
          <Icon size={17} strokeWidth={1.75} />
        </span>
        <h3 className="text-base font-bold text-slate-900 sm:text-lg">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function ApplyForm() {
  const [form, setForm] = useState<ApplyFormState>(EMPTY_FORM);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplyFormState, string>>>({});
  const [resumeError, setResumeError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setField = <K extends keyof ApplyFormState>(name: K, value: ApplyFormState[K]) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ApplyFormState, string>> = {};
    if (!form.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!form.email.trim()) nextErrors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.consent) nextErrors.consent = "Please accept the privacy policy to continue.";
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (resumeError) return;

    setSubmitError(null);
    setIsSubmitting(true);

    const payload = new FormData();
    payload.set("fullName", `${form.firstName} ${form.lastName}`.trim());
    payload.set("email", form.email);
    payload.set("phone", form.phone);
    if (resume) payload.set("resume", resume);

    try {
      const res = await fetch(`${API_BASE}/careers/apply`, { method: "POST", body: payload });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setSubmitError(data?.error ?? "Something went wrong submitting your application. Please try again.");
        setIsSubmitting(false);
        return;
      }
      localStorage.removeItem(DRAFT_KEY);
      setIsSubmitted(true);
    } catch {
      setSubmitError("We couldn't reach our servers. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center rounded-[28px] border border-gray-300 bg-white px-6 py-16 text-center shadow-sm sm:px-10">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600"
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 -m-3 rounded-full bg-brand-green-400/25 blur-xl"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <CheckCircle2 size={40} strokeWidth={1.5} className="relative" />
        </motion.span>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Application Submitted Successfully
        </h2>
        <p className="mt-3 max-w-md text-base font-semibold text-slate-700">Thank you for applying.</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
          Our recruitment team will review your profile and contact you if your
          qualifications match our requirements.
        </p>
        <MagneticButton
          href="/careers"
          magnetic={false}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
        >
          <span>View More Open Positions</span>
          <ArrowRight size={16} />
        </MagneticButton>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-gray-300 bg-white p-6 sm:p-10 lg:p-12 lg:pt-2 shadow-sm">

      <form noValidate onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
        <FormSection icon={User} title="Personal Information">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              label="First Name"
              name="firstName"
              required
              icon={User}
              value={form.firstName}
              onChange={(v) => setField("firstName", v)}
              placeholder="Jane"
              error={errors.firstName}
            />
            <FormField
              label="Last Name"
              name="lastName"
              required
              icon={User}
              value={form.lastName}
              onChange={(v) => setField("lastName", v)}
              placeholder="Doe"
              error={errors.lastName}
            />
            <FormField
              label="Email Address"
              name="email"
              required
              type="email"
              icon={Mail}
              value={form.email}
              onChange={(v) => setField("email", v)}
              placeholder="jane@example.com"
              error={errors.email}
            />
            <FormField
              label="Phone Number"
              name="phone"
              required
              type="tel"
              icon={Phone}
              value={form.phone}
              onChange={(v) => setField("phone", v)}
              placeholder="+1 (555) 000-0000"
              error={errors.phone}
            />
          </div>
        </FormSection>

        <FormSection icon={CheckCircle2} title="Resume">
          <ResumeUpload file={resume} onChange={setResume} error={resumeError} onError={setResumeError} />
        </FormSection>

        {submitError && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-600">
            {submitError}
          </div>
        )}

        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setField("consent", e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-blue-500 focus:ring-2 focus:ring-brand-blue-400"
            />
            <span className="text-sm leading-relaxed text-slate-600">
              I agree to the processing of my personal information for
              recruitment purposes according to the Privacy Policy.
            </span>
          </label>
          {errors.consent && <span className="mt-1.5 block text-xs font-medium text-rose-500">{errors.consent}</span>}
        </div>

        <div className="flex justify-end">
          <MagneticButton
            as="button"
            type="submit"
            disabled={isSubmitting}
            magnetic={false}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 disabled:cursor-not-allowed disabled:opacity-70 select-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Application</span>
                <ArrowRight size={16} />
              </>
            )}
          </MagneticButton>
        </div>
      </form>
    </div>
  );
}
