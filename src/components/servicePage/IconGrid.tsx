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
  iconTone = "blue",
  iconShape = "circle",
  titleSize = "sm",
  hoverable = false,
}: IconGridProps) {
  const isCenter = align === "center";
  const toneClass = ICON_TONES[iconTone];
  const shapeClass = iconShape === "circle" ? "rounded-full" : "rounded-xl";

  return (
    <div className={`grid gap-5 ${columnsClassName}`}>
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
            className={`glass-card rounded-[24px] ${hoverable ? "hover:bg-slate-50" : ""} ${
              isCenter ? "flex flex-col items-center gap-3 px-5 py-7 text-center" : "flex flex-col gap-4 p-6"
            }`}
          >
            <span
              className={`flex h-14 w-14 shrink-0 items-center justify-center ${shapeClass} ${toneClass}`}
            >
              <Icon size={22} strokeWidth={1.75} />
            </span>

            {hasDescription ? (
              <div>
                <h3 className={`font-bold text-slate-900 ${titleSize === "md" ? "text-lg" : "text-base"}`}>
                  {item.title}
                </h3>
                <p className={`mt-2 leading-relaxed text-slate-500 ${titleSize === "md" ? "text-sm" : "text-xs"}`}>
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
