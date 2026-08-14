import DemoIntro from "@/components/demo/DemoIntro";
import DemoForm from "@/components/demo/DemoForm";
import Container from "@/components/ui/Container";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Demo() {
  useDocumentTitle("Book a Demo | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden bg-white py-10 lg:py-12">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[40%_60%] lg:gap-16">
          <DemoIntro />
          <DemoForm />
        </div>
      </Container>
    </main>
  );
}
