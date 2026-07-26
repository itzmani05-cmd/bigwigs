import Container from "@/components/ui/Container";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import IconGrid from "@/components/servicePage/IconGrid";
import { promptFlowSteps, promptEngineeringFeatures } from "./promptEngineeringData";

export default function PromptEngineeringSection() {
  return (
    <>
      <ProcessTimeline
        eyebrow="Prompt Engineering"
        heading="Every prompt designed, tested, and evaluated"
        steps={promptFlowSteps}
        desktopColumnsClassName="grid-cols-4"
      />
      <Container>
        <div className="mx-auto max-w-4xl pb-16 lg:pb-20">
          <IconGrid items={promptEngineeringFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3" align="center" />
        </div>
      </Container>
    </>
  );
}
