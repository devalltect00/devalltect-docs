/**
 * ============================================================================
 * Documentation Component
 * Component: LayerCard
 * ============================================================================
 *
 * Displays a software architecture layer.
 *
 * Typical usage includes:
 *
 * • CLI Layer
 * • Core Layer
 * • Service Layer
 * • UI Layer
 * • Infrastructure Layer
 * ============================================================================
 */

import clsx from "clsx";

import { Card, Heading } from "../../";

import styles from "./LayerCard.module.css";

import type { LayerCardProps } from "./types";

/**
 * Displays an architecture layer.
 */
export default function LayerCard({
  title,
  subtitle,
  icon,
  children,
  className,
  ...props
}: LayerCardProps) {
  return (
    <Card className={clsx(styles.card, className)} {...props}>
      <Heading level={3} title={title} subtitle={subtitle} icon={icon} />

      <div className={styles.content}>{children}</div>
    </Card>
  );
}
