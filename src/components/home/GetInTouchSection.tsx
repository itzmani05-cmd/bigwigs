import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  User,
  Building2,
  Mail,
  Phone,
  PenLine,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import FormField from "@/components/apply/FormField";
import { API_BASE } from "@/config/api";

interface GetInTouchState {
  name: string;
  companyName: string;
  email: string;
  contactNumber: string;
  message: string;
}

const EMPTY_FORM: GetInTouchState = {
  name: "",
  companyName: "",
  email: "",
  contactNumber: "",
  message: "",
};

export default function GetInTouchSection() {
  const [form, setForm] = useState<GetInTouchState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof GetInTouchState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setField = <K extends keyof GetInTouchState>(name: K, value: GetInTouchState[K]) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof GetInTouchState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.contactNumber.trim()) nextErrors.contactNumber = "Contact number is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setSubmitError(data?.error ?? "Something went wrong sending your message. Please try again.");
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

  return (
    <section id="contact" className="relative w-full scroll-mt-24 overflow-hidden bg-slate-50 py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-transparent to-transparent"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_70px_-30px_rgba(15,23,42,0.2)]"
        >
          <div className="p-6 sm:p-10 lg:p-12">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600"
                >
                  <CheckCircle2 size={32} strokeWidth={1.5} />
                </motion.span>
                <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                  Thanks, {form.name.split(" ")[0]}!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
                  Your message has been received. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600">
                    Get In Touch
                  </span>
                  <span aria-hidden className="h-px w-8 bg-brand-blue-500/40" />
                </div>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Share Your Details
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
                  Fill in the form and our team will get back to you shortly to discuss how we
                  can help your business grow.
                </p>

                <form noValidate onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      label="Name"
                      name="name"
                      required
                      icon={User}
                      value={form.name}
                      onChange={(v) => setField("name", v)}
                      placeholder="Enter your full name"
                      error={errors.name}
                    />
                    <FormField
                      label="Company Name"
                      name="companyName"
                      icon={Building2}
                      value={form.companyName}
                      onChange={(v) => setField("companyName", v)}
                      placeholder="Enter company name"
                      error={errors.companyName}
                    />
                    <FormField
                      label="Email"
                      name="email"
                      required
                      type="email"
                      icon={Mail}
                      value={form.email}
                      onChange={(v) => setField("email", v)}
                      placeholder="Enter your email address"
                      error={errors.email}
                    />
                    <FormField
                      label="Contact Number"
                      name="contactNumber"
                      required
                      type="tel"
                      icon={Phone}
                      value={form.contactNumber}
                      onChange={(v) => setField("contactNumber", v)}
                      placeholder="Enter your contact number"
                      error={errors.contactNumber}
                    />
                  </div>

                  <FormField
                    as="textarea"
                    label="Message"
                    name="message"
                    required
                    icon={PenLine}
                    value={form.message}
                    onChange={(v) => setField("message", v)}
                    placeholder="Write your message here..."
                    rows={2}
                    error={errors.message}
                  />

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
                    className="mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-brand-blue-500 py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 disabled:cursor-not-allowed disabled:opacity-70 select-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Submitting...</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue-600">
                          <Loader2 size={16} className="animate-spin" />
                        </span>
                      </>
                    ) : (
                      <>
                        <span>Submit Now</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue-600">
                          <ArrowRight size={16} />
                        </span>
                      </>
                    )}
                  </MagneticButton>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
