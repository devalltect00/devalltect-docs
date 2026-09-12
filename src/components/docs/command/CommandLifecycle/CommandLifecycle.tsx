/**
 * ============================================================================
 * Documentation Component
 * Component: CommandLifecycle
 * ============================================================================
 */

import clsx from "clsx";

import {
    Badge,
    Card,
    Heading,
    Icon,
} from "../../";

import styles from "./CommandLifecycle.module.css";

import type {
    CommandLifecycleProps,
} from "./types";

export default function CommandLifecycle({
    title = "Command Lifecycle",
    description,
    steps,
    className,
    ...props
}: CommandLifecycleProps) {

    return (

        <section
            className={clsx(
                styles.lifecycle,
                className,
            )}
            {...props}
        >

            <Heading
                level={2}
                title={title}
                subtitle={description}
                icon={<Icon name="workflow" />}
            />

            <Card>

                <ol className={styles.timeline}>

                    {steps.map((step, index) => (

                        <li
                            key={step.title}
                            className={clsx(
                                styles.step,
                                step.active && styles.active,
                            )}
                        >

                            <div className={styles.marker}>

                                {index + 1}

                            </div>

                            <div className={styles.content}>

                                <div className={styles.header}>

                                    <span
                                        className={styles.title}
                                    >

                                        {step.title}

                                    </span>

                                    {step.active && (

                                        <Badge
                                            variant="primary"
                                        >

                                            Current

                                        </Badge>

                                    )}

                                </div>

                                {step.description && (

                                    <p
                                        className={
                                            styles.description
                                        }
                                    >

                                        {step.description}

                                    </p>

                                )}

                            </div>

                        </li>

                    ))}

                </ol>

            </Card>

        </section>

    );

}