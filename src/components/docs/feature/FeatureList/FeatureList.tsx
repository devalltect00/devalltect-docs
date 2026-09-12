/**
 * ============================================================================
 * Documentation Component
 * Component: FeatureList
 * ============================================================================
 *
 * Displays a compact list of project features.
 *
 * Unlike FeatureGrid, this component is optimized for
 * documentation pages that require concise feature summaries.
 * ============================================================================
 */

import clsx from "clsx";

import { Card, Heading, Icon } from "../../";

import styles from "./FeatureList.module.css";

import type { FeatureListProps } from "./types";

/**
 * Displays a list of project features.
 */
export default function FeatureList({
  title = "Features",
  description,
  items,
  className,
  ...props
}: FeatureListProps) {
  return (
    <section className={clsx(styles.list, className)} {...props}>
      <Heading
        level={2}
        title={title}
        subtitle={description}
        icon={<Icon name="feature" />}
      />

      <Card>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.header}>
                {item.icon && <span className={styles.icon}>{item.icon}</span>}

                <span className={styles.title}>{item.title}</span>
              </div>

              {item.description && (
                <div className={styles.description}>{item.description}</div>
              )}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
