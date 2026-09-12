/**
 * ============================================================================
 * Documentation Component
 * Component: DependencyCard
 * ============================================================================
 *
 * Displays dependencies between architectural components.
 *
 * Typical usage:
 *
 * CLI Layer
 *      ↓
 * Workflow Builder
 *      ↓
 * Workflow Engine
 *      ↓
 * Git Service
 *
 * This component focuses on documenting relationships,
 * not rendering dependency graphs.
 * ============================================================================
 */

import clsx from "clsx";

import {
    Card,
    Divider,
    Heading,
    Icon,
} from "../../";

import styles from "./DependencyCard.module.css";

import type {
    DependencyCardProps,
} from "./types";

/**
 * Displays architecture dependencies.
 */
export default function DependencyCard({
    title = "Dependencies",
    description,
    dependencies,
    className,
    ...props
}: DependencyCardProps) {

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
                subtitle={description}
                icon={<Icon name="dependency" />}
            />

            <div className={styles.list}>

                {dependencies.map((dependency, index) => (

                    <div
                        key={`${dependency.source}-${dependency.target}`}
                    >

                        <div className={styles.item}>

                            <div className={styles.connection}>

                                <span className={styles.source}>

                                    {dependency.source}

                                </span>

                                <span className={styles.arrow}>

                                    →

                                </span>

                                <span className={styles.target}>

                                    {dependency.target}

                                </span>

                            </div>

                            {dependency.description && (

                                <p
                                    className={
                                        styles.description
                                    }
                                >

                                    {dependency.description}

                                </p>

                            )}

                        </div>

                        {index < dependencies.length - 1 && (

                            <Divider spacing="md" />

                        )}

                    </div>

                ))}

            </div>

        </Card>

    );

}