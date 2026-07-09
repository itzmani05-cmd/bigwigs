interface ScrollingTextProps {
  items: string[];
  direction?: "left" | "right";
  separator?: string;
  className?: string;
}

export default function ScrollingText({
  items,
  direction = "left",
  separator = "•",
  className = "",
}: ScrollingTextProps) {
  const track = [...items, ...items];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className={`flex w-max items-center gap-6 whitespace-nowrap ${animationClass}`}>
        {track.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-6 text-sm sm:text-base font-semibold tracking-[0.2em] uppercase"
          >
            {text}
            <span aria-hidden className="text-brand-green-500">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
