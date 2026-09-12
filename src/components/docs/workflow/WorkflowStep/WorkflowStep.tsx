/**
 * ============================================================================
 * Documentation Component
 * Component: WorkflowStep
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import { Badge, Card } from "../../";

import styles from "./WorkflowStep.module.css";

import type { WorkflowStepProps, WorkflowStepStatus } from "./types";

/** Return an extractable localized label for a workflow-step status. */
function getStatusLabel(status: WorkflowStepStatus): string {
  switch (status) {
    case "completed":
      return translate({
        id: "docs.workflow.status.completed",
        message: "completed",
        description: "Badge label for a completed documentation workflow step.",
      });
    case "current":
      return translate({
        id: "docs.workflow.status.current",
        message: "current",
        description: "Badge label for the current documentation workflow step.",
      });
    case "optional":
      return translate({
        id: "docs.workflow.status.optional",
        message: "optional",
        description: "Badge label for an optional documentation workflow step.",
      });
    case "pending":
      return translate({
        id: "docs.workflow.status.pending",
        message: "pending",
        description: "Badge label for a pending documentation workflow step.",
      });
  }
}

export default function WorkflowStep({
  title,
  description,
  number,
  status = "pending",
  className,
  ...props
}: WorkflowStepProps) {
  return (
    <Card className={clsx(styles.step, styles[status], className)} {...props}>
      <div className={styles.header}>
        <div className={styles.left}>
          {number !== undefined && <div className={styles.number}>{number}</div>}

          <div>
            <div className={styles.title}>{title}</div>

            {description && <div className={styles.description}>{description}</div>}
          </div>
        </div>

        <Badge
          variant={
            status === "completed"
              ? "success"
              : status === "current"
                ? "primary"
                : status === "optional"
                  ? "secondary"
                  : "warning"
          }
        >
          {getStatusLabel(status)}
        </Badge>
      </div>
    </Card>
  );
}
