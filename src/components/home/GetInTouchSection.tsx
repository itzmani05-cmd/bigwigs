import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  User,
  Building2,
  Mail,
  Phone,
  PenLine,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import FormField from "@/components/apply/FormField";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setIsSubmitted(true);
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
          className="mx-auto max-w-[1300px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_70px_-30px_rgba(15,23,42,0.2)] lg:grid lg:grid-cols-[1.6fr_1fr]"
        >
          {/* left: form */}
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

                  <MagneticButton
                    as="button"
                    type="submit"
                    magnetic={false}
                    className="mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-brand-blue-500 py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
                  >
                    <span>Submit Now</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue-600">
                      <ArrowRight size={16} />
                    </span>
                  </MagneticButton>
                </form>
              </>
            )}
          </div>

          {/* right: contact info */}
          <div className="border-t border-slate-100 bg-slate-50/60 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-10">
            <h3 className="text-xl font-bold text-slate-900">Let&apos;s Connect</h3>
            <span aria-hidden className="mt-2 block h-0.5 w-8 rounded-full bg-brand-blue-500" />
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              We&apos;re here to answer your questions and help you find the right solutions.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Phone size={18} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-brand-blue-600">Call Us</p>
                <div className="mt-1.5 flex flex-wrap items-start gap-x-4 gap-y-2">
                  <div>
                    <span className="block text-[11px] text-slate-400">Business Enquiries</span>
                    <a
                      href="tel:+919344769914"
                      className="text-xs font-semibold text-slate-900 hover:text-brand-blue-600"
                    >
                      +91 93447 69914
                    </a>
                  </div>
                  <span aria-hidden className="mt-1 h-7 w-px bg-slate-200" />
                  <div>
                    <span className="block text-[11px] text-slate-400">Career Enquiries</span>
                    <a
                      href="tel:+916382473625"
                      className="text-xs font-semibold text-slate-900 hover:text-brand-blue-600"
                    >
                      +91 63824 73625
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <Mail size={18} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-brand-blue-600">Mail Us</p>
                <a
                  href="mailto:vignesh@bigwigstech.com"
                  className="mt-1 block text-xs font-semibold text-slate-900 hover:text-brand-blue-600 sm:text-sm"
                >
                  vignesh@bigwigstech.com
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-brand-blue-50/70 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-blue-600 shadow-sm">
                <Headphones size={18} strokeWidth={1.75} />
              </span>
              <p className="mt-3 text-sm font-bold text-slate-900">We&apos;re Ready to Help!</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                Welcome to Bigwigs Technologies. If you need any information regarding our
                services, feel free to reach out. For job related queries, please visit our
                Careers page.
              </p>
              <MagneticButton
                href="/careers"
                magnetic={false}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-blue-500 bg-white px-5 py-2.5 text-xs font-semibold text-brand-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-500 hover:text-white select-none"
              >
                <span>Visit Careers Page</span>
                <ArrowRight size={14} />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
