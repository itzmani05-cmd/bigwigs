import { useState } from "react";
import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import Container from "@/components/ui/Container";
import { latestArticles } from "./blogPostsData";

function ArticleCard({ post, index }: { post: (typeof latestArticles)[number]; index: number }) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
      className="group mb-6 break-inside-avoid overflow-hidden rounded-[24px] border border-white/60 bg-white/70 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_-24px_rgba(37,99,235,0.22)]"
    >
      <div className={"relative w-full overflow-hidden h-44"}>
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/60 via-transparent to-transparent"
        />
        <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${post.categoryColor}`}>
          {post.category}
        </span>
        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          aria-label={saved ? "Remove bookmark" : "Save article"}
          aria-pressed={saved}
          className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition-colors duration-300 ${
            saved ? "bg-brand-blue-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          <motion.span animate={{ rotate: saved ? -20 : 0 }} transition={{ duration: 0.3 }}>
            <Bookmark size={14} fill={saved ? "currentColor" : "none"} />
          </motion.span>
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold leading-snug text-slate-900">{post.title}</h3>
        <div className="mt-3 flex items-center gap-2.5">
          <img src={post.author.avatar} alt={post.author.name} className="h-7 w-7 rounded-full object-cover ring-2 ring-white" />
          <span className="text-xs font-semibold text-slate-700">{post.author.name}</span>
          <span className="text-slate-300">&middot;</span>
          <span className="text-xs text-slate-400">{post.readTime}</span>
        </div>
        <span className="mt-1.5 block text-xs text-slate-400">{post.date}</span>
      </div>
    </motion.article>
  );
}

export default function LatestArticles() {
  return (
    <section id="latest-articles" className="relative w-full scroll-mt-24 overflow-hidden py-10 lg:py-4">
      <Container className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Latest Articles
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Fresh From The Newsroom
        </h2>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3">
          {latestArticles.map((post, i) => (
            <ArticleCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
