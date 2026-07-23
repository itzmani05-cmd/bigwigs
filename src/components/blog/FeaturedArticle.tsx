import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bookmark, Share2} from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import pic1 from "@/assests/trusted/pic1.jpg";
import annotationImg from "/data/annotationImg2.png";

export default function FeaturedArticle() {
  const [saved, setSaved] = useState(false);

  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Featured Article
        </span>

        <div className="glass-card group mt-6 grid grid-cols-1 overflow-hidden rounded-[28px] lg:grid-cols-[40%_60%]">
          <div className="relative aspect-video overflow-hidden bg-slate-100 lg:aspect-auto">
            <img
              src={annotationImg}
              alt="Elevate your data story with annotations"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="w-fit rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue-600">
              AI Annotation
            </span>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              What Is Data Annotation? The Complete Enterprise Guide
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              Data annotation is the backbone of AI. Learn how high-quality
              annotated data powers machine learning models and drives
              accurate predictions across every industry.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <img src={pic1} alt="Priya Nair" className="h-9 w-9 rounded-full object-cover ring-2 ring-white" />
              <div className="text-sm">
                <span className="font-bold text-slate-900">Priya Nair</span>
                <span className="mx-1.5 text-slate-300">&middot;</span>
                <span className="text-slate-500">May 10, 2024</span>
                <span className="mx-1.5 text-slate-300">&middot;</span>
                <span className="text-slate-500">8 min read</span>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <MagneticButton
                href="#latest-articles"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
              >
                <span>Read Article</span>
                <ArrowRight size={16} />
              </MagneticButton>
              <button
                type="button"
                onClick={() => setSaved((s) => !s)}
                aria-label={saved ? "Remove bookmark" : "Bookmark article"}
                aria-pressed={saved}
                className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-300 ${
                  saved
                    ? "border-brand-blue-500 bg-brand-blue-50 text-brand-blue-600"
                    : "border-slate-200 text-slate-500 hover:border-brand-blue-400 hover:text-brand-blue-600"
                }`}
              >
                <motion.span animate={{ rotate: saved ? -20 : 0 }} transition={{ duration: 0.3 }}>
                  <Bookmark size={17} fill={saved ? "currentColor" : "none"} />
                </motion.span>
              </button>
              <button
                type="button"
                aria-label="Share article"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:border-brand-blue-400 hover:text-brand-blue-600"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
