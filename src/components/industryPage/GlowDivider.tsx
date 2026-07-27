export default function GlowDivider() {
  return (
    <div aria-hidden className="relative z-10 w-full py-2">
      <div className="relative mx-auto h-px w-full max-w-5xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue-400/40 to-transparent" />
        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-brand-blue-400/60 to-transparent" />
      </div>
    </div>
  );
}
