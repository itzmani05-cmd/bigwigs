import Container from "@/components/ui/Container";
import img1 from "@/assests/events/1000062813.jpg";
import img2 from "@/assests/events/1000064031.jpg";
import img3 from "@/assests/events/IMG-20241227-WA0064 - Copy.jpg";
import img4 from "@/assests/events/IMG-20241227-WA0190_1.jpg";
import img5 from "@/assests/events/IMG-20241227-WA0210_1.jpg";
import img6 from "@/assests/events/IMG20241029161613.jpg";
import img7 from "@/assests/events/IMG_20250704_161055.jpg";
import img8 from "@/assests/events/IMG_20250704_193055.jpg";
import img9 from "@/assests/events/WhatsApp Image 2025-12-18 at 10.11.40 PM.jpeg";
import img10 from "@/assests/events/WhatsApp Image 2026-08-22 at 15.21.51 (1).jpeg";
import img11 from "@/assests/events/WhatsApp Image 2026-08-22 at 15.21.51.jpeg";
import img12 from "@/assests/events/WhatsApp Image 2026-08-22 at 18.40.04.jpeg";
import img13 from "@/assests/events/WhatsApp Image 2026-08-22 at 2.45.55 PM.jpeg";
import img14 from "@/assests/events/WhatsApp Image 2026-08-22 at 2.46.57 PM.jpeg";
import img15 from "@/assests/events/WhatsApp Image 2026-08-22 at 2.49.11 PM.jpeg";
import img16 from "@/assests/events/WhatsApp Image 2026-08-22 at 2.52.33 PM.jpeg";
import img17 from "@/assests/events/WhatsApp Image 2026-08-22 at 2.56.38 PM.jpeg";

const rowOne = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const rowTwo = [img10, img11, img12, img13, img14, img15, img16, img17];

function MarqueeRow({ photos, direction }: { photos: string[]; direction: "left" | "right" }) {
  const track = [...photos, ...photos];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className={`flex w-max items-center gap-3 sm:gap-4 ${animationClass} hover:[animation-play-state:paused]`}
      >
        {track.map((photo, i) => (
          <div
            key={i}
            className="h-32 shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-200 sm:h-44 sm:rounded-2xl lg:h-56"
          >
            <img
              src={photo}
              alt="Bigwigs Technologies team event"
              loading="lazy"
              className="h-full w-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventsGallery() {
  return (
    <section id="events" className="relative w-full scroll-mt-24 overflow-hidden py-14 lg:py-20">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-brand-blue-500/40" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
              Moments & Milestones
            </span>
            <span aria-hidden className="h-px w-8 bg-brand-blue-500/40" />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Events At Bigwigs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            A look back at the celebrations, team outings, and get-togethers
            that make Bigwigs feel like home.
          </p>
        </div>

        <div className="mt-10 space-y-3 sm:mt-12 sm:space-y-4">
          <MarqueeRow photos={rowOne} direction="left" />
          <MarqueeRow photos={rowTwo} direction="right" />
        </div>
      </Container>
    </section>
  );
}
