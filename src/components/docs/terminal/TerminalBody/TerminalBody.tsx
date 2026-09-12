/**
 * ============================================================================
 * Documentation Component
 * Component: TerminalBody
 * ============================================================================
 */

import clsx from "clsx";

import styles from "./TerminalBody.module.css";

import type { TerminalBodyProps } from "./types";

/**
 * Terminal body.
 */
export default function TerminalBody({
  children,
  lineNumbers = false,
  className,
  ...props
}: TerminalBodyProps) {
  return (
    <pre
      className={clsx(styles.body, lineNumbers && styles.lineNumbers, className)}
      {...props}
    >
      <code>{children}</code>
    </pre>
  );
}
