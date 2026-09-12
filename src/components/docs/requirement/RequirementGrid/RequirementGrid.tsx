/**
 * ============================================================================
 * Documentation Component
 * Component: RequirementGrid
 * ============================================================================
 *
 * Displays multiple RequirementCard components inside
 * a responsive grid layout.
 *
 * Typical usage:
 *
 * • Installation requirements
 * • Command prerequisites
 * • Environment requirements
 * * Runtime dependencies
 * ============================================================================
 */

import clsx from "clsx";

import { Grid, Heading, Icon } from "../../";

import RequirementCard from "../RequirementCard";

import styles from "./RequirementGrid.module.css";

import type { RequirementGridProps } from "./types";

/**
 * Displays a responsive requirement grid.
 */
export default function RequirementGrid({
  title = "Requirements",
  description,
  items,
  columns = 2,
  className,
  ...props
}: RequirementGridProps) {
  return (
    <section className={clsx(styles.grid, className)} {...props}>
      <Heading
        level={2}
        title={title}
        subtitle={description}
        icon={<Icon name="requirement" />}
      />

      <Grid columns={columns}>
        {items.map((item) => (
          <RequirementCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            level={item.level}
          >
            {item.children}
          </RequirementCard>
        ))}
      </Grid>
    </section>
  );
}
