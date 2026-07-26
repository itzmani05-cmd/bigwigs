import Container from "@/components/ui/Container";

export default function SectionDivider() {
  return (
    <div aria-hidden className="w-full py-1">
      <Container>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </Container>
    </div>
  );
}
