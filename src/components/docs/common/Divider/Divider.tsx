/**
 * -----------------------------------------------------------------------------
 * Docs UI Component
 * Component: Divider
 * -----------------------------------------------------------------------------
 */

import clsx from "clsx";

import styles from "./Divider.module.css";

import type { DividerProps } from "./types";

/**
 * Generic documentation divider.
 *
 * Used to visually separate sections of documentation
 * without relying on Markdown horizontal rules.
 */
export default function Divider({
    orientation = "horizontal",
    variant = "solid",
    spacing = "md",
    className,
    ...props
}: DividerProps) {

    return (
        <hr
            className={clsx(
                styles.divider,
                styles[orientation],
                styles[variant],
                styles[spacing],
                className,
            )}
            {...props}
        />
    );
}