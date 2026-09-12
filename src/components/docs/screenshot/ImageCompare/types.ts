import { HTMLAttributes, ReactNode } from "react";

/**
 * ============================================================================
 * ImageCompare Types
 * ============================================================================
 */

/**
 * Represents one side of the comparison.
 */
export interface ImageCompareSide {
  /**
   * Image source.
   */
  src: string;

  /**
   * Alternative text.
   */
  alt: string;

  /**
   * Panel title.
   */
  title: ReactNode;

  /**
   * Optional caption.
   */
  caption?: ReactNode;
}

/**
 * ImageCompare component properties.
 */
export interface ImageCompareProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /**
   * Optional section title.
   */
  title?: ReactNode;

  /**
   * Optional description.
   */
  description?: ReactNode;

  /**
   * Left comparison panel.
   */
  left: ImageCompareSide;

  /**
   * Right comparison panel.
   */
  right: ImageCompareSide;
}
