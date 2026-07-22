export default function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Layer 2: atmospheric gradient glows, flowing lower-left (green) to upper-right (blue) */}
      <div className="absolute -bottom-60 -left-40 w-[560px] h-[560px] rounded-full bg-brand-green-400/25 blur-[110px] animate-drift-a" />
      <div className="absolute top-[38%] left-[26%] w-[420px] h-[420px] rounded-full bg-cyan-400/20 blur-[120px] animate-drift-b" />
      <div className="absolute -top-28 -right-28 w-[520px] h-[520px] rounded-full bg-brand-blue-500/20 blur-[130px] animate-drift-c" />
      <div className="absolute top-[8%] right-[30%] w-[300px] h-[300px] rounded-full bg-brand-green-500/10 blur-[100px] animate-drift-b" />

      {/* Layer 3: abstract signal lines — flowing intelligence, not literal AI iconography */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="about-signal-a" x1="0" y1="600" x2="1200" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="about-signal-b" x1="0" y1="680" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <path
          d="M -40 560 C 220 500, 380 430, 560 360 S 920 180, 1260 70"
          stroke="url(#about-signal-a)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.32"
        />
        <path
          d="M -40 640 C 260 600, 460 480, 660 420 S 980 240, 1260 140"
          stroke="url(#about-signal-b)"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.22"
          className="animate-signal-pulse"
          style={{ animationDuration: "9s" }}
        />
        <path
          d="M -40 480 C 200 440, 340 340, 520 280 S 860 140, 1260 20"
          stroke="url(#about-signal-a)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.16"
          className="animate-signal-pulse"
          style={{ animationDuration: "11s", animationDelay: "1.5s" }}
        />
        <path
          d="M -40 690 C 300 660, 520 540, 740 470 S 1040 300, 1260 220"
          stroke="url(#about-signal-b)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.14"
        />
      </svg>

      {/* Layer 4: subtle local dot matrix, masked so it fades rather than tiling visibly */}
      <div
        className="absolute top-10 right-10 w-56 h-56"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,42,0.5) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(circle, black 25%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle, black 25%, transparent 72%)",
          opacity: 0.35,
        }}
      />
      <div
        className="absolute bottom-16 left-16 w-48 h-48"
        style={{
          backgroundImage: "radial-gradient(rgba(15,23,42,0.5) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(circle, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 70%)",
          opacity: 0.3,
        }}
      />
    </div>
  );
}
