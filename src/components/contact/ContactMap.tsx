import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal } from "@/components/scroll";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5382.623926218913!2d78.72139737484088!3d10.712436618850697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf367fcdc2acf%3A0xaaccd02b1697ce3!2sBigwigs%20Technologies!5e0!3m2!1sen!2sin!4v1787309795759!5m2!1sen!2sin";

export default function ContactMap() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 lg:pb-20">
      <Container className="relative z-10">
        <ScrollReveal
          direction="none"
          scale
          duration={0.7}
          amount={0.2}
          className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_70px_-30px_rgba(15,23,42,0.2)]"
        >
          <div className="flex items-center gap-3 border-b border-slate-100 p-6 sm:p-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
              <MapPin size={18} strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-slate-900">Visit Our Office</h3>
              <p className="text-sm text-slate-500">
                2nd Floor, Vijaya Mini Hall, 206, Mathur, Tamil Nadu – 622515, India.
              </p>
            </div>
          </div>

          <div className="aspect-[16/9] w-full sm:aspect-[16/7]">
            <iframe
              src={MAP_EMBED_SRC}
              title="Bigwigs Technologies location on Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
