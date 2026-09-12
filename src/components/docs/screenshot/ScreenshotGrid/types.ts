import { HTMLAttributes, ReactNode } from "react";

/**
 * ============================================================================
 * ScreenshotGrid Types
 * ============================================================================
 */

/**
 * Represents a screenshot displayed within the grid.
 */
export interface ScreenshotGridItem {
  /**
   * Image source.
   */
  src: string;

  /**
   * Alternative text.
   */
  alt: string;

  /**
   * Optional title.
   */
  title?: ReactNode;

  /**
   * Optional caption.
   */
  caption?: ReactNode;
}

/**
 * ScreenshotGrid component properties.
 */
export interface ScreenshotGridProps extends HTMLAttributes<HTMLElement> {
  /**
   * Section title.
   *
   * @default "Screenshots"
   */
  title?: string;

  /**
   * Optional section description.
   */
  description?: ReactNode;

  /**
   * Screenshots.
   */
  items: ScreenshotGridItem[];

  /**
   * Number of columns.
   *
   * @default 2
   */
  columns?: 1 | 2 | 3 | 4;
}
