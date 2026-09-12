/**
 * ============================================================================
 * Documentation Component
 * Component: Terminal
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import Card from "../../common/Card";
import TerminalHeader from "../TerminalHeader";
import TerminalBody from "../TerminalBody";

import styles from "./Terminal.module.css";

import type { TerminalProps } from "./types";

export default function Terminal({
  children,
  title,
  language = "bash",
  showHeader = true,
  className,
  ...props
}: TerminalProps) {
  const resolvedTitle =
    title ??
    translate({
      id: "docs.terminal.title",
      message: "Terminal",
    });

  return (
    <Card noPadding className={clsx(styles.terminal, className)} {...props}>
      {showHeader && <TerminalHeader title={resolvedTitle} language={language} />}

      <TerminalBody>{children}</TerminalBody>
    </Card>
  );
}
