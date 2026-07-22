import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import { jobs } from "./jobsData";

export default function OpenPositions() {
  return (
    <section id="open-positions" className="relative w-full scroll-mt-24 overflow-hidden py-14 lg:py-8">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-0 h-72 w-72 rounded-full bg-brand-blue-500/[0.07] blur-[110px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
              Open Positions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Open Positions
            </h2>
          </div>
          <MagneticButton
            href="#open-positions"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:text-brand-blue-600 select-none"
          >
            <span>View All Jobs</span>
            <ArrowRight size={15} />
          </MagneticButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card flex flex-col gap-3 rounded-[24px] p-6"
            >
              <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
              <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-bold ${job.departmentColor}`}>
                {job.department}
              </span>
              <div className="flex flex-col gap-1.5 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} strokeWidth={1.75} />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={13} strokeWidth={1.75} />
                  {job.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap size={13} strokeWidth={1.75} />
                  {job.experience}
                </span>
              </div>
              <Link
                to={`/apply?position=${encodeURIComponent(job.title)}`}
                className="group mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue-600 transition-colors duration-300 hover:text-brand-blue-700"
              >
                Apply Now
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
