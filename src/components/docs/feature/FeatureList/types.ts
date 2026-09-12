import { HTMLAttributes, ReactNode } from "react";

/**
 * ============================================================================
 * FeatureList Types
 * ============================================================================
 */

/**
 * Represents a single feature list item.
 */
export interface FeatureListItem {
  /**
   * Feature title.
   */
  title: string;

  /**
   * Optional icon.
   */
  icon?: ReactNode;

  /**
   * Feature description.
   */
  description?: ReactNode;
}

/**
 * FeatureList component properties.
 */
export interface FeatureListProps extends HTMLAttributes<HTMLElement> {
  /**
   * Section title.
   *
   * @default "Features"
   */
  title?: string;

  /**
   * Optional section description.
   */
  description?: ReactNode;

  /**
   * Feature list.
   */
  items: FeatureListItem[];
}
