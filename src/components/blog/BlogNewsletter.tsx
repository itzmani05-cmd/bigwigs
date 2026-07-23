import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles, Users, Send } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import { trendingTopics } from "./blogCategoriesData";

const topicsRowA = trendingTopics.slice(0, 5);
const topicsRowB = trendingTopics.slice(5);

function TopicMarquee({
  topics,
  direction,
}: {
  topics: string[];
  direction: "left" | "right";
}) {
  const loop = [...topics, ...topics];
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex w-max shrink-0 gap-3 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {loop.map((topic, i) => (
          <span
            key={`${topic}-${i}`}
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-200"
          >
            <Sparkles size={11} className="text-brand-blue-400" />
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-16">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mx-auto grid max-w-5xl overflow-hidden rounded-[28px] shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)] lg:grid-cols-[1.15fr_1fr]"
        >
          {/* Dark editorial panel */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-slate-950 px-8 py-10 sm:px-10 sm:py-12">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-24 h-64 w-64 rounded-full bg-brand-blue-500/25 blur-[90px]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-brand-green-500/15 blur-[90px]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                <Mail size={12} />
                The Signal
              </span>
              <h2 className="mt-5 max-w-sm text-2xl font-extrabold leading-tight tracking-tight text-white/90 sm:text-3xl">
                AI insights, delivered before everyone else has them.
              </h2>
              <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                A monthly drop of research breakdowns, industry shifts, and
                field notes from our AI engineers &mdash; no fluff.
              </p>

              <div className="relative mt-7 flex items-center gap-5 text-slate-300">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-brand-blue-400" />
                  <span className="text-sm font-semibold text-white">12K+</span>
                  <span className="text-xs text-slate-500">readers</span>
                </div>
                <span className="h-4 w-px bg-white/10" />
                <div className="flex items-center gap-2">
                  <Send size={16} className="text-brand-green-400" />
                  <span className="text-sm font-semibold text-white">Monthly</span>
                  <span className="text-xs text-slate-500">cadence</span>
                </div>
              </div>
            </div>

            <div className="relative mt-10 flex flex-col gap-3">
              <TopicMarquee topics={topicsRowA} direction="left" />
              <TopicMarquee topics={topicsRowB} direction="right" />
            </div>
          </div>

          {/* Form panel */}
          <div className="relative flex flex-col justify-center bg-white px-8 py-10 sm:px-10 sm:py-12">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-blue-500/[0.06] blur-[70px]"
            />

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative flex flex-col items-start"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-600">
                  <Mail size={20} strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  You&rsquo;re on the list
                </h3>
                <p className="mt-1.5 text-sm text-slate-500">
                  Welcome aboard &mdash; your first issue lands next cycle.
                </p>
              </motion.div>
            ) : (
              <div className="relative">
                
                <h3 className=" text-lg font-bold text-slate-900">
                  Join the newsletter
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  Drop your email below. Unsubscribe anytime, one click.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue-500 focus:bg-white focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)]"
                  />
                  <MagneticButton
                    as="button"
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
                  >
                    <span>Subscribe Free</span>
                    <ArrowRight size={16} />
                  </MagneticButton>
                </form>

                <p className="mt-4 text-xs text-slate-400">
                  No spam, ever. Just AI signal.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
