/**
 * ============================================================================
 * Documentation Component
 * Component: PatternTable
 * ============================================================================
 *
 * Displays a summary table of software design patterns
 * used throughout the project.
 *
 * This component complements PatternCard by providing
 * a concise overview before readers explore individual
 * patterns in detail.
 * ============================================================================
 */

import clsx from "clsx";

import { Heading, Icon } from "../../";

import styles from "./PatternTable.module.css";

import type { PatternTableProps } from "./types";

/**
 * Displays a table summarizing design patterns.
 */
export default function PatternTable({
  title = "Design Patterns",
  description,
  patterns,
  className,
  ...props
}: PatternTableProps) {
  return (
    <section className={clsx(styles.tableSection, className)} {...props}>
      <Heading
        level={2}
        title={title}
        subtitle={description}
        icon={<Icon name="architecture" />}
      />

      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Pattern</th>

              <th>Purpose</th>

              <th>Implementation</th>
            </tr>
          </thead>

          <tbody>
            {patterns.map((item) => (
              <tr key={item.pattern}>
                <td>
                  <strong>{item.pattern}</strong>
                </td>

                <td>{item.purpose}</td>

                <td>{item.implementation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
