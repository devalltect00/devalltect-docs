/**
 * ============================================================================
 * Documentation Component
 * Component: CommandExample
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import { Card, Divider, Heading, Icon, InfoBox, Tag } from "../../";

import styles from "./CommandExample.module.css";

import type { CommandExampleProps } from "./types";

export default function CommandExample({
  examples,
  className,
  ...props
}: CommandExampleProps) {
  return (
    <section className={clsx(styles.examples, className)} {...props}>
      <Heading
        level={2}
        icon={<Icon name="example" />}
        title={translate({
          id: "docs.command.examples.title",
          message: "Examples",
        })}
        subtitle={translate({
          id: "docs.command.examples.description",
          message: "Practical command examples.",
        })}
      />

      {examples.map((example, index) => (
        <Card key={example.title}>
          <Heading level={3} title={example.title} />

          {example.description && (
            <p className={styles.description}>{example.description}</p>
          )}

          <div className={styles.header}>
            <Tag>CLI</Tag>
          </div>

          <pre className={styles.command}>
            <code>{example.command}</code>
          </pre>

          {example.result && (
            <>
              <Divider />

              <InfoBox
                variant="success"
                title={translate({
                  id: "docs.command.examples.expectedResult",
                  message: "Expected Result",
                })}
              >
                {example.result}
              </InfoBox>
            </>
          )}

          {example.notes && (
            <>
              <Divider />

              <InfoBox
                variant="tip"
                title={translate({
                  id: "docs.common.notes",
                  message: "Notes",
                })}
              >
                {example.notes}
              </InfoBox>
            </>
          )}
        </Card>
      ))}
    </section>
  );
}
