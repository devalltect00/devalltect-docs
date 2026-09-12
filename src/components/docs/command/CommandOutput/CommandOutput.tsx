/**
 * ============================================================================
 * Documentation Component
 * Component: CommandOutput
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import {
    Heading,
    Icon,
    InfoBox,
    Divider,
    Terminal,
} from "../../";

import styles from "./CommandOutput.module.css";

import type {
    CommandOutputProps,
} from "./types";

export default function CommandOutput({
    outputs,
    className,
    ...props
}: CommandOutputProps) {

    return (

        <section
            className={clsx(
                styles.output,
                className,
            )}
            {...props}
        >

            <Heading
                level={2}
                title={translate({
                    id: "docs.command.output.title",
                    message: "Command Output",
                })}
                subtitle={translate({
                    id: "docs.command.output.description",
                    message: "Example output produced after running the command.",
                })}
                icon={<Icon name="terminal" />}
            />

            {outputs.map((item) => (

                <div
                    key={item.title}
                    className={styles.item}
                >

                    <Heading
                        level={3}
                        title={item.title}
                    />

                    {item.description && (

                        <p className={styles.description}>
                            {item.description}
                        </p>

                    )}

                    <Terminal
                        title={translate({
                            id: "docs.terminal.title",
                            message: "Terminal",
                        })}
                        language="text"
                    >

                        {item.output}

                    </Terminal>

                    {item.notes && (

                        <>
                            <Divider spacing="sm" />

                            <InfoBox
                                variant="tip"
                                title={translate({
                                    id: "docs.common.notes",
                                    message: "Notes",
                                })}
                            >

                                {item.notes}

                            </InfoBox>

                        </>

                    )}

                </div>

            ))}

        </section>

    );

}
