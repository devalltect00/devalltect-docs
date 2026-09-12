import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * ============================================================================
 * RequirementCard Types
 * ============================================================================
 */

/**
 * Requirement importance.
 */
export type RequirementLevel =
    | "required"
    | "recommended"
    | "optional";

/**
 * RequirementCard component properties.
 */
export interface RequirementCardProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Requirement title.
     */
    title: string;

    /**
     * Optional icon.
     */
    icon?: ReactNode;

    /**
     * Requirement level.
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