import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * ============================================================================
 * FeatureCard Types
 * ============================================================================
 */

/**
 * Properties for the FeatureCard component.
 */
export interface FeatureCardProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Feature title.
     */
    title: string;

    /**
     * Optional icon displayed before the title.
     */
    icon?: ReactNode;

    /**
     * Optional short summary.
     */
    subtitle?: ReactNode;

    /**
     * Feature content.
     */
    children: ReactNode;

}