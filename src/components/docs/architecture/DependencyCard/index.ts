/**
 * ============================================================================
 * DependencyCard
 * ============================================================================
 */

export { default } from "./DependencyCard";

export type {
    DependencyCardProps,
    DependencyItem,
} from "./types";


/** Example Usage
 * 
<Docs.DependencyCard
    title="Release Pipeline Dependencies"
    description="Main execution flow for the release pipeline."
    dependencies={[
        {
            source: "CLI",
            target: "Workflow Builder",
            description:
                "Converts command-line arguments into a workflow configuration.",
        },
        {
            source: "Workflow Builder",
            target: "Workflow Engine",
            description:
                "Builds and starts the execution pipeline.",
        },
        {
            source: "Workflow Engine",
            target: "Git Service",
            description:
                "Delegates Git operations such as commits, tags, and pushes.",
        },
    ]}
/>
 */
