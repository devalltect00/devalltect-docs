import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * ============================================================================
 * DependencyCard Types
 * ============================================================================
 */

/**
 * Represents a dependency between two modules.
 */
export interface DependencyItem {

    /**
     * Source component.
     */
    source: string;

    /**
     * Target component.
     */
    target: string;

    /**
     * Optional dependency description.
     */
    description?: ReactNode;

}

/**
 * DependencyCard component properties.
 */
export interface DependencyCardProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Card title.
     */
    title?: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Dependency list.
     */
    dependencies: DependencyItem[];

}