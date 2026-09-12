/**
 * ============================================================================
 * Documentation Component
 * Component: RelatedCommands
 * ============================================================================
 */

import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";

import {
    Card,
    Grid,
    Heading,
    Icon,
} from "../../";

import styles from "./RelatedCommands.module.css";

import type {
    RelatedCommandsProps,
} from "./types";

export default function RelatedCommands({
    commands,
    className,
    ...props
}: RelatedCommandsProps) {

    return (

        <section
            className={clsx(
                styles.related,
                className,
            )}
            {...props}
        >

            <Heading
                level={2}
                title={translate({
                    id: "docs.command.related.title",
                    message: "Related Commands",
                })}
                subtitle={translate({
                    id: "docs.command.related.description",
                    message: "Commands commonly used together with this command.",
                })}
                icon={<Icon name="command" />}
            />

            <Grid columns={2}>

                {commands.map((command) => {

                    const label = command.title ?? command.name;

                    if (!label) {
                        return null;
                    }

                    return (

                    <Card
                        key={`${label}-${command.href ?? "unlinked"}`}
                        className={styles.card}
                    >

                        {command.href ? (

                            <Link
                                to={command.href}
                                className={styles.link}
                            >

                                {label}

                            </Link>

                        ) : (

                            <span className={styles.title}>

                                {label}

                            </span>

                        )}

                        {command.description && (

                            <p className={styles.description}>

                                {command.description}

                            </p>

                        )}

                    </Card>

                    );

                })}

            </Grid>

        </section>

    );

}
