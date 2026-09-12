/**
 * ============================================================================
 * Documentation Component
 * Component: CommandOption
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import { Badge, Card, Divider, Grid, Heading, Icon } from "../../";

import styles from "./CommandOption.module.css";

import type { CommandOptionProps } from "./types";

export default function CommandOption({
  options,
  className,
  ...props
}: CommandOptionProps) {
  return (
    <section className={clsx(styles.options, className)} {...props}>
      <Heading
        level={2}
        title={translate({
          id: "docs.command.options.title",
          message: "Command Options",
        })}
        subtitle={translate({
          id: "docs.command.options.description",
          message: "Available command-line options.",
        })}
        icon={<Icon name="configuration" />}
      />

      <Grid columns={1}>
        {options.map((option) => (
          <Card key={option.name}>
            <div className={styles.header}>
              <div>
                <code className={styles.option}>{option.name}</code>

                {option.shorthand && (
                  <code className={styles.short}>{option.shorthand}</code>
                )}
              </div>

              {option.required ? (
                <Badge variant="danger">
                  {translate({
                    id: "docs.common.required",
                    message: "Required",
                  })}
                </Badge>
              ) : (
                <Badge variant="success">
                  {translate({
                    id: "docs.common.optional",
                    message: "Optional",
                  })}
                </Badge>
              )}
            </div>

            <Divider spacing="sm" />

            <div className={styles.description}>{option.description}</div>

            {(option.defaultValue || option.example) && (
              <div className={styles.footer}>
                {option.defaultValue && (
                  <div>
                    <strong>
                      {translate({
                        id: "docs.common.default",
                        message: "Default",
                      })}
                    </strong>

                    <code>{option.defaultValue}</code>
                  </div>
                )}

                {option.example && (
                  <div>
                    <strong>
                      {translate({
                        id: "docs.common.example",
                        message: "Example",
                      })}
                    </strong>

                    <code>{option.example}</code>
                  </div>
                )}
              </div>
            )}
          </Card>
        ))}
      </Grid>
    </section>
  );
}
