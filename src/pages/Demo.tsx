import DemoIntro from "@/components/demo/DemoIntro";
import DemoForm from "@/components/demo/DemoForm";
import Container from "@/components/ui/Container";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function Demo() {
  const meta = getRouteMeta("/demo");

  return (
    <main className="relative w-full overflow-x-hidden bg-white py-10 lg:py-12">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <Container className="relative z-10">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-14 lg:grid-cols-[40%_60%] lg:gap-16">
          <DemoIntro />
          <DemoForm />
        </div>
      </Container>
    </main>
  );
}
