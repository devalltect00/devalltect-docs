import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * ============================================================================
 * PatternTable Types
 * ============================================================================
 */

/**
 * Represents a software design pattern entry.
 */
export interface PatternTableItem {

    /**
     * Pattern name.
     *
     * Example:
     * Builder
     */
    pattern: string;

    /**
     * Purpose of the pattern.
     */
    purpose: ReactNode;

    /**
     * Where the pattern is implemented.
     */
    implementation: ReactNode;

}

/**
 * PatternTable component properties.
 */
export interface PatternTableProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Optional section title.
     *
     * @default "Design Patterns"
     */
    title?: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Pattern list.
     */
    patterns: PatternTableItem[];

}