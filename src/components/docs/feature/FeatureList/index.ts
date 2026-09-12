/**
 * ============================================================================
 * FeatureList
 * ============================================================================
 */

export { default } from "./FeatureList";

export type {
    FeatureListItem,
    FeatureListProps,
} from "./types";


/** Example Usage
 * 
<Docs.FeatureList
    title="Key Features"
    description="Highlights of the Custy platform."
    items={[
        {
            title: "Version Management",
            icon: <Docs.Icon name="package" />,
            description:
                "Automatically synchronizes project versions.",
        },
        {
            title: "Release Automation",
            icon: <Docs.Icon name="rocket" />,
            description:
                "Automates release pipelines from commit to push.",
        },
        {
            title: "Pipeline Profiles",
            icon: <Docs.Icon name="workflow" />,
            description:
                "Provides reusable development and release workflows.",
        },
        {
            title: "Dry Run Support",
            icon: <Docs.Icon name="play" />,
            description:
                "Preview workflow execution without modifying the project.",
        },
    ]}
/>
 */