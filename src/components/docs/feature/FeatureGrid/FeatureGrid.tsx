/**
 * ============================================================================
 * Documentation Component
 * Component: FeatureGrid
 * ============================================================================
 *
 * Displays multiple FeatureCard components
 * in a responsive grid.
 * ============================================================================
 */

import clsx from "clsx";

import { Grid, Heading, Icon } from "../../";

import FeatureCard from "../FeatureCard";

import styles from "./FeatureGrid.module.css";

import type { FeatureGridProps } from "./types";

/**
 * Displays a responsive grid of features.
 */
export default function FeatureGrid({
  title = "Features",
  description,
  items,
  columns = 2,
  className,
  ...props
}: FeatureGridProps) {
  return (
    <section className={clsx(styles.grid, className)} {...props}>
      <Heading
        level={2}
        title={title}
        subtitle={description}
        icon={<Icon name="feature" />}
      />

      <Grid columns={columns}>
        {items.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
          >
            {item.children}
          </FeatureCard>
        ))}
      </Grid>
    </section>
  );
}
