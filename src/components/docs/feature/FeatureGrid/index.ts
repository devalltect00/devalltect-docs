/**
 * ============================================================================
 * FeatureGrid
 * ============================================================================
 */

export { default } from "./FeatureGrid";

export type {
    FeatureGridItem,
    FeatureGridProps,
} from "./types";


/** Example Usage
 * 
<Docs.FeatureGrid
    title="Core Features"
    description="Major capabilities provided by Custy."
    columns={2}
    items={[
        {
            title: "Release Automation",
            icon: <Docs.Icon name="rocket" />,
            children: (
                <>
                    Automates versioning, tagging,
                    changelog generation and Git
                    operations.
                </>
            ),
        },
        {
            title: "Pipeline Execution",
            icon: <Docs.Icon name="workflow" />,
            children: (
                <>
                    Execute reusable release
                    pipelines with a single command.
                </>
            ),
        },
        {
            title: "Dry Run",
            icon: <Docs.Icon name="play" />,
            children: (
                <>
                    Preview changes before
                    modifying the repository.
                </>
            ),
        },
        {
            title: "Project Initialization",
            icon: <Docs.Icon name="package" />,
            children: (
                <>
                    Generate configuration,
                    templates and example files.
                </>
            ),
        },
    ]}
/>
 */