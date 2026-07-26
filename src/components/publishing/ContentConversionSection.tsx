import Container from "@/components/ui/Container";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import ChipList from "@/components/servicePage/ChipList";
import { conversionFlowSteps, conversionPairs } from "./conversionData";

export default function ContentConversionSection() {
  return (
    <>
      <ProcessTimeline
        eyebrow="Content Conversion"
        heading="Every format, converted without losing structure"
        steps={conversionFlowSteps}
        desktopColumnsClassName="grid-cols-6"
      />
      <Container>
        <div className="mx-auto max-w-3xl pb-16 lg:pb-20">
          <ChipList items={conversionPairs} tone="blue" className="justify-center" />
        </div>
      </Container>
    </>
  );
}
