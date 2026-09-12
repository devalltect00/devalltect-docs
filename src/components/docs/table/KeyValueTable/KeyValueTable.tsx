/**
 * ============================================================================
 * Documentation Component
 * Component: KeyValueTable
 * ============================================================================
 *
 * Displays simple key-value information.
 *
 * Typical usage:
 *
 * • Command metadata
 * • Configuration overview
 * • Environment information
 * • Project information
 * • Release metadata
 * ============================================================================
 */

import clsx from "clsx";

import { Heading, Icon } from "../../";

import styles from "./KeyValueTable.module.css";

import type { KeyValueTableProps } from "./types";

/**
 * Displays a key-value table.
 */
export default function KeyValueTable({
  title = "Information",
  description,
  items,
  className,
  ...props
}: KeyValueTableProps) {
  return (
    <section className={clsx(styles.section, className)} {...props}>
      <Heading
        level={2}
        title={title}
        subtitle={description}
        icon={<Icon name="info" />}
      />

      <div className={styles.wrapper}>
        <table className={styles.table}>
          <tbody>
            {items.map((item) => (
              <tr key={String(item.key)}>
                <th>{item.key}</th>

                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
