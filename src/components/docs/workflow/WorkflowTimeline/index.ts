export { default } from "./WorkflowTimeline";

export type {
    WorkflowTimelineItem,
    WorkflowTimelineProps,
} from "./types";


/** Example Usage
 * 
<Docs.WorkflowTimeline
    title="Release Workflow"
    description="Typical release workflow in Custy."
    items={[
        {
            title: "Initialize",
            description: "Prepare project resources.",
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
            description: "Create a release tag.",
        },
        {
            title: "Push",
            description: "Push commits and tags.",
        },
    ]}
/>
 */
