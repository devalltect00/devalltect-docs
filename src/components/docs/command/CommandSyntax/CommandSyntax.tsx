/**
 * ============================================================================
 * Documentation Component
 * Component: CommandSyntax
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import { Card, Divider, Heading, Icon, Tag } from "../../";

import styles from "./CommandSyntax.module.css";

import type { CommandSyntaxProps } from "./types";

export default function CommandSyntax({
  examples,
  language = "bash",
  className,
  ...props
}: CommandSyntaxProps) {
  return (
    <section className={clsx(styles.syntax, className)} {...props}>
      <Card>
        <Heading
          level={2}
          icon={<Icon name="command" />}
          title={translate({
            id: "docs.command.syntax.title",
            message: "Command Syntax",
          })}
          subtitle={translate({
            id: "docs.command.syntax.description",
            message: "Available command syntax and usage examples.",
          })}
        />

        {examples.map((example, index) => (
          <div key={`${example.command}-${index}`}>
            {index > 0 && <Divider />}

            {example.title && <Heading level={4} title={example.title} />}

            {example.description && (
              <p className={styles.description}>{example.description}</p>
            )}

            <div className={styles.codeHeader}>
              <Tag>{language}</Tag>
            </div>

            <pre className={styles.code}>
              <code>{example.command}</code>
            </pre>
          </div>
        ))}
      </Card>
    </section>
  );
}
