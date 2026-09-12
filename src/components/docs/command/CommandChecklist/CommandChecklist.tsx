/**
 * ============================================================================
 * Documentation Component
 * Component: CommandChecklist
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import { Badge, Card, Heading, Icon } from "../../";

import styles from "./CommandChecklist.module.css";

import type { CommandChecklistProps } from "./types";

export default function CommandChecklist({
  title,
  description,
  items,
  className,
  ...props
}: CommandChecklistProps) {
  const resolvedTitle =
    title ??
    translate({
      id: "docs.command.checklist.title",
      message: "Before You Begin",
    });

  return (
    <section className={clsx(styles.checklist, className)} {...props}>
      <Heading
        level={2}
        title={resolvedTitle}
        subtitle={description}
        icon={<Icon name="requirement" />}
      />

      <Card>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.header}>
                <span className={styles.title}>{item.title}</span>

                <Badge variant={item.required === false ? "secondary" : "warning"}>
                  {item.required === false
                    ? translate({
                        id: "docs.common.optional",
                        message: "Optional",
                      })
                    : translate({
                        id: "docs.common.required",
                        message: "Required",
                      })}
                </Badge>
              </div>

              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
