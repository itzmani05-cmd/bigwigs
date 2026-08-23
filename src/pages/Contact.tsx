import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import GetInTouchSection from "@/components/home/GetInTouchSection";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function Contact() {
  const meta = getRouteMeta("/contact");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <ContactHero />
      <ContactInfo />
      <GetInTouchSection />
      <ContactMap />
    </main>
  );
}
