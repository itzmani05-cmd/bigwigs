import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { softwareChips, softwareBenefits } from "./customSoftwareData";
import customSoftwareImg from "@/assests/software-dev/custom-software.png";

export default function CustomSoftwareSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[48%_52%] lg:gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-[480px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
          >
            <img src={customSoftwareImg} alt="Custom software" className="w-full h-auto object-cover" />
          </motion.div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              Custom Software
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Tailored software for every business
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              No off-the-shelf compromises. We design and build the exact system your
              operations need — then connect it to everything else you already run.
            </p>

            <ChipList items={softwareChips} className="mt-6" />
          </div>
        </div>

        {/* benefit cards */}
        <div className="mx-auto mt-14 max-w-5xl">
          <IconGrid items={softwareBenefits} columnsClassName="grid-cols-2 lg:grid-cols-4" />
        </div>
      </Container>
    </section>
  );
}
