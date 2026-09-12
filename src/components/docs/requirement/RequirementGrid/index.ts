/**
 * ============================================================================
 * RequirementGrid
 * ============================================================================
 */

export { default } from "./RequirementGrid";

export type { RequirementGridItem, RequirementGridProps } from "./types";

/** Example Usage
 *
<Docs.RequirementGrid
    title="Before Running custy init"
    description="Make sure your environment is ready before initializing your project."
    columns={2}
    items={[
        {
            title: "Python 3.11+",
            level: "required",
            icon: <Docs.Icon name="python" />,
            children: (
                <>
                    Custy requires Python 3.11 or newer.
                </>
            ),
        },
        {
            title: "Git",
            level: "required",
            icon: <Docs.Icon name="git" />,
            children: (
                <>
                    Required for commit, tag, and release workflows.
                </>
            ),
        },
        {
            title: "Docker",
            level: "recommended",
            icon: <Docs.Icon name="docker" />,
            children: (
                <>
                    Recommended when using the containerized environment.
                </>
            ),
        },
        {
            title: "Internet Connection",
            level: "optional",
            icon: <Docs.Icon name="network" />,
            children: (
                <>
                    Needed only when interacting with remote repositories.
                </>
            ),
        },
    ]}
/>
 */
