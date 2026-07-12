import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import { blogPosts } from "./blogPosts";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function BlogGrid() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <Container>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => {
            const tint =
              post.tint === "green"
                ? "from-brand-green-400 via-brand-green-500 to-brand-blue-500"
                : "from-brand-blue-500 via-brand-blue-600 to-brand-green-400";
            return (
              <motion.a
                key={post.title}
                href="#"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-[0_16px_40px_-28px_rgba(15,23,42,0.2)] hover:border-brand-green-500/25 hover:shadow-[0_24px_50px_-20px_rgba(16,185,129,0.22)] transition-shadow duration-300"
              >
                <div className={`relative h-36 w-full bg-gradient-to-br ${tint} overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-slate-800">
                    {post.category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="absolute bottom-4 right-4 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-brand-green-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-xs font-medium text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
