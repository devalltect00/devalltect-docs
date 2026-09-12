export { default } from "./WorkflowStage";

export type { WorkflowStageItem, WorkflowStageProps } from "./types";

/** Example Usage
 *
<Docs.WorkflowStage
    title="Release Preparation"
    description="Prepare the project before creating a release."
    steps={[
        {
            title: "Initialize",
            description: "Generate the initial configuration.",
            status: "completed",
        },
        {
            title: "Validate",
            description: "Verify project readiness.",
            status: "completed",
        },
        {
            title: "Commit",
            description: "Create a structured commit.",
            status: "current",
        },
        {
            title: "Tag",
            description: "Create a version tag.",
        },
    ]}
/>
 */
