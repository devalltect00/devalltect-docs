/**
 * ============================================================================
 * Documentation Component
 * Component: FeatureCard
 * ============================================================================
 *
 * Displays a single feature or capability.
 *
 * Examples:
 *
 * • Automatic Versioning
 * • Release Automation
 * • Dry Run Mode
 * • Changelog Generation
 * • Git Integration
 *
 * ============================================================================
 */

import clsx from "clsx";

import { Card, Heading } from "../..";

import styles from "./FeatureCard.module.css";

import type { FeatureCardProps } from "./types";

/**
 * Displays a documentation feature card.
 */
export default function FeatureCard({
  title,
  subtitle,
  icon,
  children,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card className={clsx(styles.card, className)} {...props}>
      <Heading level={3} title={title} subtitle={subtitle} icon={icon} />

      <div className={styles.content}>{children}</div>
    </Card>
  );
}
