import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building2,
  IdCard,
  Factory,
  Sparkles,
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import FormField from "@/components/apply/FormField";
import { API_BASE } from "@/config/api";

interface DemoFormState {
  firstName: string;
  lastName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  jobTitle: string;
  industry: string;
  serviceInterested: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
}

const EMPTY_FORM: DemoFormState = {
  firstName: "",
  lastName: "",
  companyName: "",
  businessEmail: "",
  phoneNumber: "",
  jobTitle: "",
  industry: "",
  serviceInterested: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
  consent: false,
};

const INDUSTRY_OPTIONS = [
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Banking",
  "Education",
  "Government",
  "Others",
].map((value) => ({ value, label: value }));

const SERVICE_OPTIONS = [
  "AI Data Annotation",
  "Generative AI",
  "AI Agents",
  "Software Development",
  "Healthcare AI",
  "Translation & Localization",
  "Other",
].map((value) => ({ value, label: value }));

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

export default function DemoForm() {
  const [form, setForm] = useState<DemoFormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setField = <K extends keyof DemoFormState>(name: K, value: DemoFormState[K]) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof DemoFormState, string>> = {};
    if (!form.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!form.companyName.trim()) nextErrors.companyName = "Company name is required.";
    if (!form.businessEmail.trim()) nextErrors.businessEmail = "Business email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) nextErrors.businessEmail = "Enter a valid email address.";
    if (!form.phoneNumber.trim()) nextErrors.phoneNumber = "Phone number is required.";
    if (!form.consent) nextErrors.consent = "Please accept the privacy policy to continue.";
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/demo/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setSubmitError(data?.error ?? "Something went wrong submitting your request. Please try again.");
        setIsSubmitting(false);
        return;
      }
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
          Demo Request Received
        </h2>
        <p className="mt-3 max-w-md text-base font-semibold text-slate-700">
          Thank you, {form.firstName}.
        </p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
          Our team will reach out shortly to confirm your preferred date and time and get your
          personalized demo scheduled.
        </p>
        <MagneticButton
          href="/"
          magnetic={false}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
        >
          <span>Back To Home</span>
          <ArrowRight size={16} />
        </MagneticButton>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-gray-300 bg-white p-6 sm:p-10 lg:p-12 lg:pt-2 shadow-sm">
      <form noValidate onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
        <FormSection icon={User} title="Your Details">
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
              label="Company Name"
              name="companyName"
              required
              icon={Building2}
              value={form.companyName}
              onChange={(v) => setField("companyName", v)}
              placeholder="Acme Inc."
              error={errors.companyName}
            />
            <FormField
              label="Business Email"
              name="businessEmail"
              required
              type="email"
              icon={Mail}
              value={form.businessEmail}
              onChange={(v) => setField("businessEmail", v)}
              placeholder="jane@company.com"
              error={errors.businessEmail}
            />
            <FormField
              label="Phone Number"
              name="phoneNumber"
              required
              type="tel"
              icon={Phone}
              value={form.phoneNumber}
              onChange={(v) => setField("phoneNumber", v)}
              placeholder="+1 (555) 000-0000"
              error={errors.phoneNumber}
            />
            <FormField
              label="Job Title"
              name="jobTitle"
              icon={IdCard}
              value={form.jobTitle}
              onChange={(v) => setField("jobTitle", v)}
              placeholder="e.g. VP of Operations"
            />
          </div>
        </FormSection>

        <FormSection icon={Sparkles} title="Project Details">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              as="select"
              label="Industry"
              name="industry"
              icon={Factory}
              value={form.industry}
              onChange={(v) => setField("industry", v)}
              options={INDUSTRY_OPTIONS}
            />
            <FormField
              as="select"
              label="Service Interested In"
              name="serviceInterested"
              icon={Sparkles}
              value={form.serviceInterested}
              onChange={(v) => setField("serviceInterested", v)}
              options={SERVICE_OPTIONS}
            />
            <FormField
              label="Preferred Demo Date"
              name="preferredDate"
              type="date"
              icon={Calendar}
              value={form.preferredDate}
              onChange={(v) => setField("preferredDate", v)}
            />
            <FormField
              label="Preferred Time"
              name="preferredTime"
              type="time"
              icon={Clock}
              value={form.preferredTime}
              onChange={(v) => setField("preferredTime", v)}
            />
          </div>
        </FormSection>

        <FormSection icon={MessageSquare} title="Message">
          <FormField
            as="textarea"
            label="Tell Us About Your Project"
            name="message"
            value={form.message}
            onChange={(v) => setField("message", v)}
            placeholder="Tell us about your project..."
          />
        </FormSection>

        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setField("consent", e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-blue-500 focus:ring-2 focus:ring-brand-blue-400"
            />
            <span className="text-sm leading-relaxed text-slate-600">
              I agree to the <a href="#" className="font-semibold text-brand-blue-600 hover:underline">Privacy Policy</a>.
            </span>
          </label>
          {errors.consent && <span className="mt-1.5 block text-xs font-medium text-rose-500">{errors.consent}</span>}
        </div>

        {submitError && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-600">
            {submitError}
          </div>
        )}

        <MagneticButton
          as="button"
          type="submit"
          disabled={isSubmitting}
          magnetic={false}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 disabled:cursor-not-allowed disabled:opacity-70 select-none sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Schedule My Demo</span>
              <ArrowRight size={16} />
            </>
          )}
        </MagneticButton>
      </form>
    </div>
  );
}
