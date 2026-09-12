/**
 * -----------------------------------------------------------------------------
 * Docs UI Component
 * Component: Heading
 * -----------------------------------------------------------------------------
 */

import clsx from "clsx";
import DocusaurusHeading from "@theme/Heading";

import styles from "./Heading.module.css";

import type { HeadingProps } from "./types";

/**
 * Documentation heading.
 *
 * Provides a consistent heading style across the documentation.
 */
export default function Heading({
    title,
    subtitle,
    icon,
    badge,
    level = 2,
    centered = false,
    className,
    id,
    ...props
}: HeadingProps) {

    const Tag = `h${level}` as
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6";

    return (
        <header
            id={id}
            className={clsx(
                styles.heading,
                centered && styles.centered,
                className,
            )}
            {...props}
        >
            <div className={styles.titleRow}>

                <DocusaurusHeading
                    as={Tag}
                    className={styles.title}
                >

                    {icon && (
                        <span className={styles.icon}>
                            {icon}
                        </span>
                    )}

                    {title}

                </DocusaurusHeading>

                {badge && (
                    <div className={styles.badge}>
                        {badge}
                    </div>
                )}

            </div>

            {subtitle && (
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
            )}

        </header>
    );
}