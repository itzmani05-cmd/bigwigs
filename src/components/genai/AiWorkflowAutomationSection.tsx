import Container from "@/components/ui/Container";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import IconGrid from "@/components/servicePage/IconGrid";
import { automationFlowSteps, automationFeatures } from "./workflowAutomationData";

export default function AiWorkflowAutomationSection() {
  return (
    <>
      <ProcessTimeline
        eyebrow="AI Workflow Automation"
        heading="Repetitive work, automated end-to-end"
        steps={automationFlowSteps}
        desktopColumnsClassName="grid-cols-5"
      />
      <Container>
        <div className="mx-auto max-w-4xl pb-16 lg:pb-20">
          <IconGrid items={automationFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3" align="center" />
        </div>
      </Container>
    </>
  );
}
