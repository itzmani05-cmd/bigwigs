import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface IconGridItem {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const ICON_TONES = {
  slate: "bg-slate-50 text-slate-700",
  blue: "bg-brand-blue-50 text-brand-blue-600",
} as const;

interface IconGridProps {
  items: IconGridItem[];
  /** Tailwind grid-cols classes, responsive. */
  columnsClassName?: string;
  align?: "left" | "center";
  iconTone?: keyof typeof ICON_TONES;
  iconShape?: "circle" | "square";
  titleSize?: "sm" | "md";
  hoverable?: boolean;
}

export default function IconGrid({
  items,
  columnsClassName = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  align = "left",
  iconTone = "slate",
  iconShape = "square",
  titleSize = "sm",
  hoverable = false,
}: IconGridProps) {
  const isCenter = align === "center";
  const toneClass = ICON_TONES[iconTone];
  const shapeClass = iconShape === "circle" ? "rounded-full" : "rounded-lg";

  return (
    <div className={`grid gap-px border border-slate-200 bg-slate-200 ${columnsClassName}`}>
      {items.map((item, i) => {
        const Icon = item.icon;
        const hasDescription = Boolean(item.description);
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
            className={`relative bg-white transition-all duration-300 hover:z-10 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
              hoverable ? "hover:bg-slate-50" : ""
            } ${isCenter ? "flex flex-col items-center gap-2.5 px-3 py-6 text-center" : "flex flex-col gap-3 p-6"}`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center text-blue-500 justify-center ${shapeClass} ${toneClass}`}
            >
              <Icon size={18} strokeWidth={1.75} />
            </span>

            {hasDescription ? (
              <div>
                <h3 className={`font-semibold text-slate-900 ${titleSize === "md" ? "text-base" : "text-sm"}`}>
                  {item.title}
                </h3>
                <p className={`mt-1.5 leading-relaxed text-slate-500 ${titleSize === "md" ? "text-sm" : "text-xs"}`}>
                  {item.description}
                </p>
              </div>
            ) : (
              <span className="text-xs font-medium leading-tight text-slate-600">{item.title}</span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
