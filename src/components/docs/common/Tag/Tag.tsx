/**
 * -----------------------------------------------------------------------------
 * Docs UI Component
 * Component: Tag
 * -----------------------------------------------------------------------------
 */

import clsx from "clsx";

import styles from "./Tag.module.css";

import type { TagProps } from "./types";

/**
 * Metadata tag component.
 *
 * Used for:
 *
 * • Languages
 * • Platforms
 * • Technologies
 * • Categories
 * • Frameworks
 * • Specifications
 */
export default function Tag({
    children,
    icon,
    hoverable = true,
    className,
    ...props
}: TagProps) {
    return (
        <span
            className={clsx(
                styles.tag,
                hoverable && styles.hoverable,
                className,
            )}
            {...props}
        >
            {icon && (
                <span className={styles.icon}>
                    {icon}
                </span>
            )}

            {children}
        </span>
    );
}