import clsx from "clsx";
import Heading from "@theme/Heading";

import styles from "./Card.module.css";

import type { CardProps } from "./types";

/**
 * Generic documentation card.
 *
 * This component is the visual foundation of the documentation
 * component library. Specialized cards should compose this component
 * instead of duplicating layout and styling.
 */
export default function Card({
    title,
    subtitle,
    icon,
    children,
    className,
    noPadding = false,
    hoverable = true,
    bordered = false,
    ...props
}: CardProps) {
    return (
        <article
            className={clsx(
                styles.card,
                hoverable && styles.hoverable,
                bordered && styles.bordered,
                noPadding && styles.noPadding,
                className,
            )}
            {...props}
        >
            {(title || subtitle) && (
                <header className={styles.header}>
                    {title && (
                        <Heading
                            as="h3"
                            className={styles.title}
                        >
                            {icon && (
                                <span className={styles.icon}>
                                    {icon}
                                </span>
                            )}

                            {title}
                        </Heading>
                    )}

                    {subtitle && (
                        <p className={styles.subtitle}>
                            {subtitle}
                        </p>
                    )}
                </header>
            )}

            <div className={styles.body}>
                {children}
            </div>
        </article>
    );
}