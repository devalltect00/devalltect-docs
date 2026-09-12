export { default } from "./CommandLifecycle";

export type {
    CommandLifecycleProps,
    CommandLifecycleStep,
} from "./types";


/** Example Usage
 * 
<Docs.CommandLifecycle
    title="Release Lifecycle"
    description="Typical lifecycle for preparing and publishing a release."
    steps={[
        {
            title: "Initialize",
            description: "Prepare the project.",
        },
        {
            title: "Validate",
            description: "Verify project readiness.",
        },
        {
            title: "Commit",
            description: "Create a structured commit.",
        },
        {
            title: "Tag",
            description: "Generate a release tag.",
            active: true,
        },
        {
            title: "Push",
            description: "Publish commits and tags.",
        },
        {
            title: "Release",
            description: "Distribute the release.",
        },
    ]}
/>
 */