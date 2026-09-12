import { HTMLAttributes, ReactNode } from "react";

/**
 * ============================================================================
 * ArchitectureCard Types
 * ============================================================================
 */

/**
 * Properties for the ArchitectureCard component.
 */
export interface ArchitectureCardProps extends HTMLAttributes<HTMLElement> {
  /**
   * Card title.
   */
  title: string;

  /**
   * Optional icon displayed beside the title.
   */
  icon?: ReactNode;

  /**
   * Optional subtitle.
   */
  subtitle?: ReactNode;

  /**
   * Main card content.
   */
  children: ReactNode;
}
