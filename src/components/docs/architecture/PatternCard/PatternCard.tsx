/**
 * ============================================================================
 * Documentation Component
 * Component: PatternCard
 * ============================================================================
 *
 * Displays a software design pattern used within the project.
 *
 * Examples:
 *
 * • Builder
 * • Strategy
 * • Factory
 * • Registry
 * • Adapter
 * • Decorator
 * • Facade
 *
 * ============================================================================
 */

import clsx from "clsx";

import {
    Card,
    Heading,
    Tag,
} from "../../";

import styles from "./PatternCard.module.css";

import type {
    PatternCardProps,
} from "./types";

/**
 * Displays a design pattern.
 */
export default function PatternCard({
    title,
    icon,
    summary,
    purpose,
    implementations,
    className,
    ...props
}: PatternCardProps) {

    return (

        <Card
            className={clsx(
                styles.card,
                className,
            )}
            {...props}
        >

            <Heading
                level={3}
                title={title}
                icon={icon}
            />

            <div className={styles.summary}>

                {summary}

            </div>

            {purpose && (

                <div className={styles.section}>

                    <h4 className={styles.heading}>

                        Purpose

                    </h4>

                    <div>

                        {purpose}

                    </div>

                </div>

            )}

            {implementations &&
                implementations.length > 0 && (

                <div className={styles.section}>

                    <h4 className={styles.heading}>

                        Implemented In

                    </h4>

                    <div className={styles.tags}>

                        {implementations.map((item) => (

                            <Tag
                                key={item.name}
                            >

                                {item.name}

                            </Tag>

                        ))}

                    </div>

                </div>

            )}

        </Card>

    );

}