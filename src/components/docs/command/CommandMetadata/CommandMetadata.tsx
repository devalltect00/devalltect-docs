/**
 * ============================================================================
 * Documentation Component
 * Component: CommandMetadata
 * ============================================================================
 */

import clsx from "clsx";

import {
    Card,
    Grid,
    Icon,
} from "../../";

import styles from "./CommandMetadata.module.css";

import type { CommandMetadataProps } from "./types";

export default function CommandMetadata({
    items,
    metadata,
    className,
    ...props
}: CommandMetadataProps) {

    const resolvedItems = items ?? metadata ?? [];

    return (
        <section
            className={clsx(
                styles.metadata,
                className,
            )}
            {...props}
        >
            <Grid columns={2}>

                {resolvedItems.length ? (

                    resolvedItems.map(item => (

                        <Card
                            key={item.label}
                        >

                            <div className={styles.row}>

                                {item.icon && (
                                    <Icon
                                        name={item.icon}
                                    />
                                )}

                                <div className={styles.content}>

                                    <span
                                        className={styles.label}
                                    >
                                        {item.label}
                                    </span>

                                    <div
                                        className={styles.value}
                                    >
                                        {item.value}
                                    </div>

                                </div>

                            </div>

                        </Card>

                ))) : null}

            </Grid>

        </section>
    );
}
