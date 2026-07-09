import type { ReactNode } from "react";

interface MarqueeRowProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  direction: "left" | "right";
  className?: string;
}

export default function MarqueeRow<T>({
  items,
  renderItem,
  direction,
  className = "",
}: MarqueeRowProps<T>) {
  const track = [...items, ...items];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`group relative w-full overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className={`flex w-max items-stretch gap-5 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}>
        {track.map((item, i) => (
          <div key={i} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}
