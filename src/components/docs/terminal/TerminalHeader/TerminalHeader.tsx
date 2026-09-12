/**
 * ============================================================================
 * Documentation Component
 * Component: TerminalHeader
 * ============================================================================
 */

import clsx from "clsx";

import { Badge } from "../..";

import styles from "./TerminalHeader.module.css";

import type { TerminalHeaderProps } from "./types";

export default function TerminalHeader({
  title,
  language,
  className,
  ...props
}: TerminalHeaderProps) {
  return (
    <div className={clsx(styles.header, className)} {...props}>
      <div className={styles.dots}>
        <span className={styles.red} />

        <span className={styles.yellow} />

        <span className={styles.green} />
      </div>

      <div className={styles.title}>{title}</div>

      <Badge variant="secondary">{language}</Badge>
    </div>
  );
}
