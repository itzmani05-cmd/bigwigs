import { useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import Container from "@/components/ui/Container";
import AboutStats from "./AboutStats";
import AboutBackground from "./AboutBackground";

export default function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [unmuted, setUnmuted] = useState(false);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.controls = true;
    setUnmuted(true);
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-20 sm:py-28 scroll-mt-24"
      style={{ backgroundColor: "#F8FCFB" }}
    >
      <AboutBackground />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green-500/25 bg-brand-green-50 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-green-600 uppercase">
            About Us
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Building the AI backbone{" "}
            <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              for modern enterprises.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From geospatial intelligence to medical imaging, BigWigs Technologies designs and
            ships production-grade AI systems that enterprises trust with their hardest
            problems. Here&apos;s a quick look at who we are and how we work.
          </p>
        </div>

        <AboutStats />

        <div className="relative mt-12 sm:mt-16 mx-auto max-w-5xl rounded-3xl overflow-hidden bg-slate-950 shadow-[0_40px_100px_-30px_rgba(15,23,42,0.35)] aspect-video">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/assets/BigWigs-Technologies.mp4" type="video/mp4" />
          </video>

          {!unmuted && (
            <button
              type="button"
              onClick={handleUnmute}
              aria-label="Unmute video"
              className="group absolute inset-0 flex items-center justify-center bg-slate-950/15 transition-colors duration-300 hover:bg-slate-950/25"
            >
              <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Volume2 size={26} />
              </span>
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
