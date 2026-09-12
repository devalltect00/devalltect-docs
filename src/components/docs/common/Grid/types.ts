import { HTMLAttributes, ReactNode } from "react";

/**
 * Number of columns to display.
 */
export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Generic documentation grid.
 *
 * This component provides a responsive CSS Grid layout used throughout
 * the documentation site.
 */
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Grid items.
   */
  children: ReactNode;

  /**
   * Number of desktop columns.
   *
   * @default 2
   */
  columns?: GridColumns;

  /**
   * Stretch items to equal height.
   *
   * @default true
   */
  equalHeight?: boolean;

  /**
   * Collapse into a single column on mobile.
   *
   * @default true
   */
  responsive?: boolean;
}
