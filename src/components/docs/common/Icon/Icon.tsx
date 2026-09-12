/**
 * ============================================================================
 * Documentation UI Component
 * Component: Icon
 * ============================================================================
 *
 * Renders a semantic icon used throughout the documentation component library.
 *
 * Rather than depending directly on a specific icon library, components use
 * semantic icon names (for example "warning", "workflow", or "python").
 * The actual visual representation is resolved by the central icon registry.
 *
 * This abstraction allows the documentation platform to migrate from emojis
 * to SVG icons (Lucide, Heroicons, Font Awesome, custom SVGs, etc.) without
 * changing component APIs or MDX content.
 *
 * ============================================================================
 */

import clsx from "clsx";

import styles from "./Icon.module.css";

import type {
    IconProps,
} from "./types";

import {
    getIcon,
} from "../../shared/icons";

/**
 * Displays a semantic documentation icon.
 */
export default function Icon({
    name,
    children,
    size = "md",
    className,
    ...props
}: IconProps) {

    const icon = children ?? getIcon(name);

    return (

        <span
            className={clsx(
                styles.icon,
                styles[size],
                className,
            )}
            aria-hidden="true"
            {...props}
        >
            {icon}
        </span>

    );

}