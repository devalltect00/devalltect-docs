import {
    HTMLAttributes,
    ReactNode,
} from "react";

import type {
    RequirementLevel,
} from "../RequirementCard";

/**
 * ============================================================================
 * RequirementGrid Types
 * ============================================================================
 */

/**
 * Represents a requirement displayed within the grid.
 */
export interface RequirementGridItem {

    /**
     * Requirement title.
     */
    title: string;

    /**
     * Optional icon.
     */
    icon?: ReactNode;

    /**
     * Requirement importance.
     *
     * @default "required"
     */
    level?: RequirementLevel;

    /**
     * Optional subtitle.
     */
    subtitle?: ReactNode;

    /**
     * Requirement description.
     */
    children: ReactNode;

}

/**
 * RequirementGrid component properties.
 */
export interface RequirementGridProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Section title.
     *
     * @default "Requirements"
     */
    title?: string;

    /**
     * Optional section description.
     */
    description?: ReactNode;

    /**
     * Grid items.
     */
    items: RequirementGridItem[];

    /**
     * Number of columns.
     *
     * @default 2
     */
    columns?: 1 | 2 | 3 | 4;

}