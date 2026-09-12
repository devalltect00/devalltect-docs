/**
 * ============================================================================
 * ImageCompare
 * ============================================================================
 */

export { default } from "./ImageCompare";

export type { ImageCompareProps, ImageCompareSide } from "./types";

/** Example Usage
 *
 * # Before / After
 *
<Docs.ImageCompare
    title="Initialization Result"
    description="Project state before and after running custy init."
    left={{
        src: "/img/before.png",
        alt: "Before initialization",
        title: "Before",
        caption: "Empty project",
    }}
    right={{
        src: "/img/after.png",
        alt: "After initialization",
        title: "After",
        caption: "Custy templates generated",
    }}
/>
 *
 * # Windows vs Docker
 *
<Docs.ImageCompare
    title="Execution Environment"
    left={{
        src: "/img/windows.png",
        alt: "Windows",
        title: "Windows",
    }}
    right={{
        src: "/img/docker.png",
        alt: "Docker",
        title: "Docker",
    }}
/>
 */
