import clsx from "clsx";

import styles from "./Badge.module.css";

import type { BadgeProps } from "./types";

/**
 * Generic documentation badge.
 *
 * Used for:
 *
 * • Status
 * • Platform
 * • Version
 * • Category
 * • Tags
 * • Requirements
 */
export default function Badge({
    children,
    icon,
    variant = "primary",
    size = "md",
    outlined = false,
    pill = true,
    className,
    ...props
}: BadgeProps) {
    return (
        <span
            className={clsx(
                styles.badge,
                styles[variant],
                styles[size],
                outlined && styles.outlined,
                pill && styles.pill,
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