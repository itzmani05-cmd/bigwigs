import ApplyBackground from "@/components/apply/ApplyBackground";
import ApplyIntro from "@/components/apply/ApplyIntro";
import ApplyForm from "@/components/apply/ApplyForm";
import Container from "@/components/ui/Container";

export default function Apply() {
  return (
    <main className="relative w-full overflow-x-hidden py-10 lg:py-12">
      <ApplyBackground />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-14 pr-15 lg:grid-cols-[40%_60%] lg:gap-16">
          <ApplyIntro />
          <ApplyForm />
        </div>
      </Container>
    </main>
  );
}
