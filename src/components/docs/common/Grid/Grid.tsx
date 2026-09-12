import clsx from "clsx";

import styles from "./Grid.module.css";

import type { GridProps } from "./types";

/**
 * Responsive documentation grid.
 *
 * This component should be used as the primary layout primitive
 * for arranging cards, screenshots, examples, feature lists,
 * requirement blocks, and similar content.
 */
export default function Grid({
  children,
  columns = 2,
  equalHeight = true,
  responsive = true,
  className,
  style,
  ...props
}: GridProps) {
  return (
    <div
      className={clsx(
        styles.grid,
        styles[`columns${columns}`],
        equalHeight && styles.equalHeight,
        responsive && styles.responsive,
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
