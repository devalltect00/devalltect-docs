/**
 * ============================================================================
 * Screenshot Documentation Components
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Components                                                                  */
/* -------------------------------------------------------------------------- */

export { default as Screenshot } from "./Screenshot";

export { default as ScreenshotGrid } from "./ScreenshotGrid";

export { default as ImageCompare } from "./ImageCompare";

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

export type {
    ScreenshotProps,
} from "./Screenshot";

export type {
    ScreenshotGridItem,
    ScreenshotGridProps,
} from "./ScreenshotGrid";

export type {
    ImageCompareProps,
    ImageCompareSide,
} from "./ImageCompare";