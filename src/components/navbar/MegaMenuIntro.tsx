import { ArrowUpRight } from "lucide-react";
import type { MegaContent } from "./navConfig";

export default function MegaMenuIntro({ content }: { content: MegaContent }) {
  return (
    <div className="flex flex-col h-full">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        Overview
      </span>
      <h3 className="mt-3 text-2xl font-bold text-slate-900 tracking-tight">{content.title}</h3>
      <p className="mt-3 text-sm text-slate-500 leading-relaxed">{content.description}</p>
      <a
        href={content.cta.href}
        className="group mt-8 lg:mt-auto lg:pt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-600 hover:text-brand-green-700 transition-colors w-fit"
      >
        {content.cta.label}
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </div>
  );
}
