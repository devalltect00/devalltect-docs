/**
 * ============================================================================
 * Documentation Component
 * Component: MermaidLegend
 * ============================================================================
 *
 * Displays a reusable legend for any diagram.
 *
 * Supported diagrams include:
 *
 * • Mermaid
 * • PlantUML
 * • Draw.io
 * • Excalidraw
 * • SVG
 * • PNG
 * • Architecture diagrams
 * ============================================================================
 */

import clsx from "clsx";

import { Card, Grid, Heading, Icon } from "../../";

import styles from "./MermaidLegend.module.css";

import type { MermaidLegendProps } from "./types";

/**
 * Displays a reusable diagram legend.
 */
export default function MermaidLegend({
  title = "Legend",
  description,
  items,
  className,
  ...props
}: MermaidLegendProps) {
  return (
    <section className={clsx(styles.legend, className)} {...props}>
      <Heading
        level={3}
        title={title}
        subtitle={description}
        icon={<Icon name="info" />}
      />

      <Grid columns={2}>
        {items.map((item) => (
          <Card key={item.title} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.symbol}>{item.symbol}</div>

              <strong>{item.title}</strong>
            </div>

            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}
          </Card>
        ))}
      </Grid>
    </section>
  );
}
