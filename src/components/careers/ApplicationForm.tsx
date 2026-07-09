"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileText,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";
import { roles } from "./roles";

const positionOptions = ["General Application", ...roles.map((r) => r.title)];
const experienceOptions = ["Entry-level", "1–3 years", "3–6 years", "6+ years"];

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
} as const;

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-brand-green-500 focus:ring-4 focus:ring-brand-green-500/10";

interface ApplicationFormProps {
  selectedRole: string;
  onSelectedRoleChange: (role: string) => void;
}

export default function ApplicationForm({
  selectedRole,
  onSelectedRoleChange,
}: ApplicationFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResumeFile(e.target.files?.[0] ?? null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleReset = () => {
    formRef.current?.reset();
    setResumeFile(null);
    setStatus("idle");
    onSelectedRoleChange("General Application");
  };

  return (
    <section id="apply" className="relative bg-white py-20 lg:py-28 scroll-mt-24">
      <div className="max-w-2xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Apply now
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Tell us about yourself — we review every application.
          </p>
        </motion.div>

        <div className="relative rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.2)] p-6 sm:p-10 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="flex flex-col items-center text-center gap-4 py-10"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-green-50 text-brand-green-600"
                >
                  <CheckCircle2 size={32} strokeWidth={1.75} />
                </motion.span>
                <h3 className="text-xl font-bold text-slate-900">Application received</h3>
                <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
                  Thank you for applying to BigWigs Technologies. Our team will review your
                  application and reach out if there&apos;s a fit.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-sm font-semibold text-brand-green-600 hover:text-brand-green-700 underline underline-offset-2"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid sm:grid-cols-2 gap-5"
                >
                  <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs font-semibold text-slate-600">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-600">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-600">
                      Phone <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className={inputClass}
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                    <label htmlFor="portfolioUrl" className="text-xs font-semibold text-slate-600">
                      LinkedIn / Portfolio <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="portfolioUrl"
                      name="portfolioUrl"
                      type="url"
                      placeholder="https://"
                      className={inputClass}
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                    <label htmlFor="position" className="text-xs font-semibold text-slate-600">
                      Position
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={selectedRole}
                      onChange={(e) => onSelectedRoleChange(e.target.value)}
                      className={`${inputClass} appearance-none`}
                    >
                      {positionOptions.map((title) => (
                        <option key={title} value={title}>
                          {title}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                    <label htmlFor="experience" className="text-xs font-semibold text-slate-600">
                      Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      defaultValue={experienceOptions[0]}
                      className={`${inputClass} appearance-none`}
                    >
                      {experienceOptions.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </motion.div>

                <motion.div variants={fieldVariants} initial="hidden" animate="visible" className="flex flex-col gap-1.5">
                  <label htmlFor="coverLetter" className="text-xs font-semibold text-slate-600">
                    Why BigWigs? <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    placeholder="Tell us what draws you to this role..."
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>

                <motion.div variants={fieldVariants} initial="hidden" animate="visible" className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">Resume / CV</label>
                  <input
                    ref={fileInputRef}
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {resumeFile ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-3 rounded-xl border border-brand-green-500/30 bg-brand-green-50 px-4 py-3"
                    >
                      <FileText size={18} className="text-brand-green-600 shrink-0" />
                      <span className="flex-1 min-w-0 truncate text-sm text-slate-700">
                        {resumeFile.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setResumeFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        aria-label="Remove file"
                        className="shrink-0 text-slate-400 hover:text-slate-700 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 hover:border-brand-green-500/50 hover:bg-brand-green-50/40 px-4 py-5 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors duration-200"
                    >
                      <Upload size={17} />
                      Upload PDF, DOC, or DOCX (max 5MB)
                    </motion.button>
                  )}
                </motion.div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    {errorMessage}
                  </motion.div>
                )}

                <motion.button
                  variants={fieldVariants}
                  initial="hidden"
                  animate="visible"
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={status === "submitting" ? undefined : { y: -2 }}
                  whileTap={status === "submitting" ? undefined : { scale: 0.98 }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-white font-semibold bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/15 hover:shadow-lg hover:shadow-brand-green-500/25 transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed select-none"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
