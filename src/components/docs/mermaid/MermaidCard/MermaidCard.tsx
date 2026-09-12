/**
 * ============================================================================
 * Documentation Component
 * Component: MermaidCard
 * ============================================================================
 *
 * A generic container for Mermaid diagrams.
 *
 * This component intentionally does not render Mermaid itself.
 * Instead, it provides a consistent layout for documentation pages
 * regardless of how Mermaid is rendered.
 *
 * Supported diagrams include:
 *
 * • Flowchart
 * • Sequence Diagram
 * • Class Diagram
 * • ER Diagram
 * • Git Graph
 * • State Diagram
 * • Journey Diagram
 * • Architecture Diagram
 * • Timeline
 * ============================================================================
 */

import clsx from "clsx";

import { Card, Divider, Heading, Icon } from "../../";

import styles from "./MermaidCard.module.css";

import type { MermaidCardProps } from "./types";

/**
 * Displays a Mermaid diagram inside a documentation card.
 */
export default function MermaidCard({
  title,
  description,
  children,
  footer,
  className,
  ...props
}: MermaidCardProps) {
  return (
    <Card className={clsx(styles.card, className)} {...props}>
      {(title || description) && (
        <Heading
          level={2}
          title={title}
          subtitle={description}
          icon={<Icon name="diagram" />}
        />
      )}

      <Divider />

      <div className={styles.diagram}>{children}</div>

      {footer && (
        <>
          <Divider />

          <div className={styles.footer}>{footer}</div>
        </>
      )}
    </Card>
  );
}
