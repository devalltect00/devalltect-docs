/**
 * ============================================================================
 * Documentation Component
 * Component: WorkflowTimeline
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import { Heading, Icon } from "../../";

import WorkflowStep from "../WorkflowStep";

import styles from "./WorkflowTimeline.module.css";

import type { WorkflowTimelineProps } from "./types";

export default function WorkflowTimeline({
  title,
  description,
  items,
  className,
  ...props
}: WorkflowTimelineProps) {
  const resolvedTitle =
    title ??
    translate({
      id: "docs.workflow.timeline.title",
      message: "Workflow Timeline",
    });

  return (
    <section className={clsx(styles.timeline, className)} {...props}>
      <Heading
        level={2}
        title={resolvedTitle}
        subtitle={description}
        icon={<Icon name="timeline" />}
      />

      <div className={styles.steps}>
        {items.map((item, index) => (
          <div key={item.title} className={styles.row}>
            <WorkflowStep
              number={index + 1}
              title={item.title}
              description={item.description}
              status={item.status}
            />

            {index < items.length - 1 && <div className={styles.connector} />}
          </div>
        ))}
      </div>
    </section>
  );
}
