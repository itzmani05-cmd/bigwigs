import Container from "@/components/ui/Container";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import IconGrid from "@/components/servicePage/IconGrid";
import { agentWorkflowFlow, agentWorkflowFeatures } from "./agentWorkflowData";

export default function WorkflowAutomationSection() {
  return (
    <>
      <ProcessTimeline
        eyebrow="Workflow Automation"
        heading="One request, an entire process automated"
        steps={agentWorkflowFlow}
        desktopColumnsClassName="grid-cols-8"
      />
      <Container>
        <div className="mx-auto max-w-4xl pb-16 lg:pb-20">
          <IconGrid items={agentWorkflowFeatures} columnsClassName="grid-cols-2 sm:grid-cols-4" align="center" />
        </div>
      </Container>
    </>
  );
}
