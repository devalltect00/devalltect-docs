import { HTMLAttributes, ReactNode } from "react";

/**
 * ============================================================================
 * MermaidTitle Types
 * ============================================================================
 */

/**
 * MermaidTitle component properties.
 */
export interface MermaidTitleProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /**
   * Diagram title.
   */
  title: ReactNode;

  /**
   * Optional subtitle.
   */
  subtitle?: ReactNode;

  /**
   * Optional icon displayed before the title.
   */
  icon?: ReactNode;
}
