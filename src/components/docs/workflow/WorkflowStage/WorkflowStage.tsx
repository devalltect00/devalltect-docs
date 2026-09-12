/**
 * ============================================================================
 * Documentation Component
 * Component: WorkflowStage
 * ============================================================================
 */

import clsx from "clsx";

import { Card, Heading, Icon } from "../../";

import WorkflowStep from "../WorkflowStep";

import styles from "./WorkflowStage.module.css";

import type { WorkflowStageProps } from "./types";

export default function WorkflowStage({
  title,
  description,
  steps,
  className,
  ...props
}: WorkflowStageProps) {
  return (
    <section className={clsx(styles.stage, className)} {...props}>
      <Heading
        level={2}
        title={title}
        subtitle={description}
        icon={<Icon name="workflow" />}
      />

      <Card>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <WorkflowStep
              key={step.title}
              number={index + 1}
              title={step.title}
              description={step.description}
              status={step.status}
            />
          ))}
        </div>
      </Card>
    </section>
  );
}
