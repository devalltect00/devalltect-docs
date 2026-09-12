/**
 * ============================================================================
 * Documentation Component
 * Component: WorkflowDiagram
 * ============================================================================
 */

import clsx from "clsx";

import { Heading, Icon, Section } from "../../";

import WorkflowLegend from "../WorkflowLegend";
import WorkflowTimeline from "../WorkflowTimeline";

import styles from "./WorkflowDiagram.module.css";

import type { WorkflowDiagramProps } from "./types";

export default function WorkflowDiagram({
  title = "Workflow Diagram",
  description,
  timeline,
  legend,
  className,
  ...props
}: WorkflowDiagramProps) {
  return (
    <Section className={clsx(styles.diagram, className)} {...props}>
      <Heading
        level={2}
        title={title}
        subtitle={description}
        icon={<Icon name="workflow" />}
      />

      {legend && legend.length > 0 && <WorkflowLegend items={legend} />}

      <WorkflowTimeline items={timeline} />
    </Section>
  );
}
