/**
 * ============================================================================
 * ScreenshotGrid
 * ============================================================================
 */

export { default } from "./ScreenshotGrid";

export type { ScreenshotGridItem, ScreenshotGridProps } from "./types";

/** Example Usage
 *
<Docs.ScreenshotGrid
    title="Initialization Workflow"
    description="Screenshots captured while initializing a project."
    columns={2}
    items={[
        {
            src: "/img/init-01.png",
            alt: "Initialize project",
            title: "Step 1",
            caption: "Run custy init",
        },
        {
            src: "/img/init-02.png",
            alt: "Initialization completed",
            title: "Step 2",
            caption: "Initialization summary",
        },
    ]}
/>
 */
