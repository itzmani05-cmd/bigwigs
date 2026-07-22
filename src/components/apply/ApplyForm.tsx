import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  BarChart3,
  Building2,
  IdCard,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { jobs } from "@/components/careers/jobsData";
import FormField from "./FormField";
import ResumeUpload from "./ResumeUpload";

const API_BASE = "http://localhost:3001/api";
const DRAFT_KEY = "bigwigs-apply-draft";

function LinkedinIcon({ size = 24, strokeWidth: _strokeWidth, className }: { size?: number | string; strokeWidth?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 5.5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z" />
    </svg>
  );
}

interface ApplyFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  position: string;
  experience: string;
  company: string;
  jobTitle: string;
  coverLetter: string;
  whyJoin: string;
  consent: boolean;
}

const EMPTY_FORM: ApplyFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  portfolio: "",
  position: "",
  experience: "",
  company: "",
  jobTitle: "",
  coverLetter: "",
  whyJoin: "",
  consent: false,
};

const POSITION_OPTIONS = [...jobs.map((j) => ({ value: j.title, label: j.title })), { value: "Other", label: "Other" }];

const EXPERIENCE_OPTIONS = [
  { value: "0-1 Years", label: "0-1 Years" },
  { value: "1-3 Years", label: "1-3 Years" },
  { value: "3-5 Years", label: "3-5 Years" },
  { value: "5-8 Years", label: "5-8 Years" },
  { value: "8+ Years", label: "8+ Years" },
];

function FormSection({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <div>
      <div className="flex items-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-500">
          <Icon size={17} strokeWidth={1.75} />
        </span>
        <h3 className="text-base font-bold text-slate-900 sm:text-lg">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function ApplyForm() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<ApplyFormState>(EMPTY_FORM);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplyFormState, string>>>({});
  const [resumeError, setResumeError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) setForm((prev) => ({ ...prev, ...JSON.parse(saved) }));
    } catch {
    }
  }, []);

  useEffect(() => {
    const positionFromUrl = searchParams.get("position");
    if (positionFromUrl) {
      setForm((prev) => (prev.position ? prev : { ...prev, position: positionFromUrl }));
    }
  }, [searchParams]);

  const setField = <K extends keyof ApplyFormState>(name: K, value: ApplyFormState[K]) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSaveDraft = () => {
    const { ...draft } = form;
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 2500);
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ApplyFormState, string>> = {};
    if (!form.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!form.email.trim()) nextErrors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.location.trim()) nextErrors.location = "Current location is required.";
    if (!form.position) nextErrors.position = "Please select a position.";
    if (!form.experience) nextErrors.experience = "Please select your experience.";
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

    const appendix = [
      form.linkedin && `LinkedIn: ${form.linkedin}`,
      `Current Location: ${form.location}`,
      form.company && `Current Company: ${form.company}`,
      form.jobTitle && `Current Job Title: ${form.jobTitle}`,
      form.whyJoin && `Why join Bigwigs Technologies: ${form.whyJoin}`,
    ]
      .filter(Boolean)
      .join("\n");

    const coverLetter = [form.coverLetter, appendix].filter(Boolean).join("\n\n---\n\n");

    const payload = new FormData();
    payload.set("fullName", `${form.firstName} ${form.lastName}`.trim());
    payload.set("email", form.email);
    payload.set("phone", form.phone);
    payload.set("position", form.position);
    payload.set("experience", form.experience);
    if (form.portfolio) payload.set("portfolioUrl", form.portfolio);
    if (coverLetter) payload.set("coverLetter", coverLetter);
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
      <div className="glass-card flex flex-col items-center rounded-[28px] px-6 py-16 text-center sm:px-10">
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
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
        >
          <span>View More Open Positions</span>
          <ArrowRight size={16} />
        </MagneticButton>
      </div>
    );
  }

  return (
    <div className="glass-card overflow-hidden rounded-[28px] p-6 sm:p-10 lg:p-12">
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Application Form
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Apply Now</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-500">
          Fill in your details and our recruitment team will get back to you shortly.
        </p>
      </div>

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
            <FormField
              label="Current Location"
              name="location"
              required
              icon={MapPin}
              value={form.location}
              onChange={(v) => setField("location", v)}
              placeholder="City, Country"
              error={errors.location}
            />
            <FormField
              label="LinkedIn Profile"
              name="linkedin"
              icon={LinkedinIcon}
              value={form.linkedin}
              onChange={(v) => setField("linkedin", v)}
              placeholder="linkedin.com/in/janedoe"
            />
            <FormField
              label="Portfolio / GitHub / Website"
              name="portfolio"
              icon={Globe}
              value={form.portfolio}
              onChange={(v) => setField("portfolio", v)}
              placeholder="https://"
              className="sm:col-span-2"
            />
          </div>
        </FormSection>

        <FormSection icon={Briefcase} title="Professional Information">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              as="select"
              label="Position Applying For"
              name="position"
              required
              icon={Briefcase}
              value={form.position}
              onChange={(v) => setField("position", v)}
              options={POSITION_OPTIONS}
              error={errors.position}
            />
            <FormField
              as="select"
              label="Years of Experience"
              name="experience"
              required
              icon={BarChart3}
              value={form.experience}
              onChange={(v) => setField("experience", v)}
              options={EXPERIENCE_OPTIONS}
              error={errors.experience}
            />
            <FormField
              label="Current Company"
              name="company"
              icon={Building2}
              value={form.company}
              onChange={(v) => setField("company", v)}
              placeholder="Company name"
            />
            <FormField
              label="Current Job Title"
              name="jobTitle"
              icon={IdCard}
              value={form.jobTitle}
              onChange={(v) => setField("jobTitle", v)}
              placeholder="e.g. Software Engineer"
            />
          </div>
        </FormSection>

        <FormSection icon={CheckCircle2} title="Resume">
          <ResumeUpload file={resume} onChange={setResume} error={resumeError} />
        </FormSection>

        <FormSection icon={MessageSquare} title="Additional Information">
          <div className="flex flex-col gap-5">
            <FormField
              as="textarea"
              label="Cover Letter"
              name="coverLetter"
              value={form.coverLetter}
              onChange={(v) => setField("coverLetter", v)}
              placeholder="Tell us a bit about yourself..."
            />
            <FormField
              as="textarea"
              label="Why do you want to join Bigwigs Technologies?"
              name="whyJoin"
              value={form.whyJoin}
              onChange={(v) => setField("whyJoin", v)}
              placeholder="Share what excites you about this opportunity..."
            />
          </div>
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

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <MagneticButton
            as="button"
            type="button"
            onClick={handleSaveDraft}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:text-brand-blue-600 select-none"
          >
            <span>{draftSaved ? "Draft Saved" : "Save & Continue Later"}</span>
          </MagneticButton>

          <MagneticButton
            as="button"
            type="submit"
            disabled={isSubmitting}
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
