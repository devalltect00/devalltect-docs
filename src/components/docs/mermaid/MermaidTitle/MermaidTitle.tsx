/**
 * ============================================================================
 * Documentation Component
 * Component: MermaidTitle
 * ============================================================================
 *
 * Displays a standardized heading for documentation diagrams.
 *
 * Although placed inside the Mermaid package, this component is
 * intentionally generic and may be used for:
 *
 * • Mermaid
 * • PlantUML
 * • Draw.io
 * • Excalidraw
 * • SVG diagrams
 * • Architecture diagrams
 * • Flowcharts
 * • UML
 * ============================================================================
 */

import clsx from "clsx";

import { Heading, Icon } from "../../";

import styles from "./MermaidTitle.module.css";

import type { MermaidTitleProps } from "./types";

/**
 * Displays a standardized diagram title.
 */
export default function MermaidTitle({
  title,
  subtitle,
  icon,
  className,
  ...props
}: MermaidTitleProps) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      <Heading
        level={2}
        title={title}
        subtitle={subtitle}
        icon={icon ?? <Icon name="diagram" />}
      />
    </div>
  );
}
