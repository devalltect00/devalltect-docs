import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * ============================================================================
 * FeatureGrid Types
 * ============================================================================
 */

/**
 * Grid item.
 */
export interface FeatureGridItem {

    /**
     * Feature title.
     */
    title: string;

    /**
     * Optional icon.
     */
    icon?: ReactNode;

    /**
     * Optional summary.
     */
    subtitle?: ReactNode;

    /**
     * Feature content.
     */
    children: ReactNode;

}

/**
 * FeatureGrid component properties.
 */
export interface FeatureGridProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Section title.
     *
     * @default "Features"
     */
    title?: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Grid items.
     */
    items: FeatureGridItem[];

    /**
     * Number of columns.
     *
     * @default 2
     */
    columns?: 1 | 2 | 3 | 4;

}