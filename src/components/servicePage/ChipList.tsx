const TONES = {
  slate: "border-slate-200 text-slate-600",
  blue: "border-brand-blue-500/20 bg-brand-blue-50 text-brand-blue-600",
  orange: "border-orange-200 bg-orange-50/50 text-orange-700",
} as const;

interface ChipListProps {
  items: string[];
  tone?: keyof typeof TONES;
  className?: string;
}

export default function ChipList({ items, tone = "slate", className = "" }: ChipListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue-300 hover:shadow-sm ${TONES[tone]}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
