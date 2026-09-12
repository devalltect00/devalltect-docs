import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * ============================================================================
 * Screenshot Types
 * ============================================================================
 */

/**
 * Screenshot component properties.
 */
export interface ScreenshotProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {

    /**
     * Image source.
     */
    src: string;

    /**
     * Alternative text.
     */
    alt: string;

    /**
     * Optional title.
     */
    title?: ReactNode;

    /**
     * Optional caption.
     */
    caption?: ReactNode;

    /**
     * Content displayed when the image cannot be loaded.
     *
     * The alternative text is used when no custom content is provided.
     */
    fallback?: ReactNode;

    /**
     * Display an accessible placeholder when loading fails.
     *
     * @default true
     */
    showFallback?: boolean;

    /**
     * Display shadow.
     *
     * @default true
     */
    shadow?: boolean;

    /**
     * Display border.
     *
     * @default true
     */
    border?: boolean;

}
