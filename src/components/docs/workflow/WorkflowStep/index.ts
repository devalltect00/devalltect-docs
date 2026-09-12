export { default } from "./WorkflowStep";

export type { WorkflowStepProps, WorkflowStepStatus } from "./types";

/** Example Usage
 *
<Docs.WorkflowStep
    number={1}
    title="Initialize Project"
    description="Generate the initial Custy configuration and templates."
    status="completed"
/>

<Docs.WorkflowStep
    number={2}
    title="Validate Project"
    description="Verify that the project is ready for release."
    status="current"
/>

<Docs.WorkflowStep
    number={3}
    title="Commit Changes"
    description="Create a structured Git commit."
/>
 */
