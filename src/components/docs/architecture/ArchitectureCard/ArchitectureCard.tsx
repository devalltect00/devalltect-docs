/**
 * ============================================================================
 * Documentation Component
 * Component: ArchitectureCard
 * ============================================================================
 *
 * A reusable card for documenting architectural concepts,
 * modules, layers, services, design decisions, or packages.
 *
 * This component serves as the base building block for the
 * Architecture documentation package.
 * ============================================================================
 */

import clsx from "clsx";

import { Card, Heading } from "../../";

import styles from "./ArchitectureCard.module.css";

import type { ArchitectureCardProps } from "./types";

/**
 * Displays an architecture documentation card.
 */
export default function ArchitectureCard({
  title,
  subtitle,
  icon,
  children,
  className,
  ...props
}: ArchitectureCardProps) {
  return (
    <Card className={clsx(styles.card, className)} {...props}>
      <Heading level={3} title={title} subtitle={subtitle} icon={icon} />

      <div className={styles.content}>{children}</div>
    </Card>
  );
}
