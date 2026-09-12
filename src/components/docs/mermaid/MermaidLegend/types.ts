import { HTMLAttributes, ReactNode } from "react";

/**
 * ============================================================================
 * MermaidLegend Types
 * ============================================================================
 */

/**
 * Represents a legend entry.
 */
export interface MermaidLegendItem {
  /**
   * Symbol, badge, or icon representing the legend item.
   */
  symbol: ReactNode;

  /**
   * Legend title.
   */
  title: string;

  /**
   * Optional description.
   */
  description?: ReactNode;
}

/**
 * MermaidLegend component properties.
 */
export interface MermaidLegendProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /**
   * Legend title.
   *
   * @default "Legend"
   */
  title?: ReactNode;

  /**
   * Optional description.
   */
  description?: ReactNode;

  /**
   * Legend entries.
   */
  items: MermaidLegendItem[];
}
