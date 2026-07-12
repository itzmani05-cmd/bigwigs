import { useState } from "react";
import { motion } from "framer-motion";
import type { MegaContent } from "./navConfig";
import MegaMenuIntro from "./MegaMenuIntro";
import MegaMenuLinks from "./MegaMenuLinks";
import FeaturePreview from "./FeaturePreview";

const panelVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
} as const;

interface MegaMenuProps {
  content: MegaContent;
  id: string;
}

export default function MegaMenu({ content, id }: MegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = content.features[activeIndex] ?? content.features[0];

  return (
    <motion.div
      id={id}
      role="region"
      aria-label={`${content.title} menu`}
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute left-0 right-0 top-full w-full max-h-[600px] overflow-y-auto bg-white border-t border-slate-100 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.2)]"
    >
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8">
          <div className="lg:col-span-4 xl:col-span-3">
            <MegaMenuIntro content={content} />
          </div>
          <div className="lg:col-span-8 xl:col-span-4 lg:border-l lg:border-slate-100 lg:pl-10">
            <MegaMenuLinks content={content} activeIndex={activeIndex} onHoverLink={setActiveIndex} />
          </div>
          <div className="hidden xl:block xl:col-span-5">
            {activeFeature && <FeaturePreview feature={activeFeature} index={activeIndex} />}
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-green-500/30 to-transparent" aria-hidden="true" />
    </motion.div>
  );
}
