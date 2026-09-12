/**
 * ============================================================================
 * Documentation Component
 * Component: WorkflowLegend
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import { Badge, Card, Grid, Heading, Icon } from "../../";

import styles from "./WorkflowLegend.module.css";

import type { WorkflowLegendProps } from "./types";

export default function WorkflowLegend({
  title,
  items,
  className,
  ...props
}: WorkflowLegendProps) {
  const resolvedTitle =
    title ??
    translate({
      id: "docs.workflow.legend.title",
      message: "Legend",
    });

  return (
    <section className={clsx(styles.legend, className)} {...props}>
      <Heading
        level={2}
        title={resolvedTitle}
        subtitle={translate({
          id: "docs.workflow.legend.description",
          message: "Meaning of workflow statuses.",
        })}
        icon={<Icon name="info" />}
      />

      <Grid columns={2}>
        {items.map((item) => (
          <Card key={item.status} className={styles.card}>
            <div className={styles.header}>
              <Badge
                variant={
                  item.status === "completed"
                    ? "success"
                    : item.status === "current"
                      ? "primary"
                      : item.status === "optional"
                        ? "secondary"
                        : "warning"
                }
              >
                {item.title}
              </Badge>
            </div>

            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}
          </Card>
        ))}
      </Grid>
    </section>
  );
}
