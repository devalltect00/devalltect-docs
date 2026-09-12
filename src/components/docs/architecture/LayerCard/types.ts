import { HTMLAttributes, ReactNode } from "react";

/**
 * ============================================================================
 * LayerCard Types
 * ============================================================================
 */

/**
 * LayerCard component properties.
 */
export interface LayerCardProps extends HTMLAttributes<HTMLElement> {
  /**
   * Layer name.
   *
   * Examples:
   * - CLI Layer
   * - Core Layer
   * - Service Layer
   */
  title: string;

  /**
   * Optional icon.
   */
  icon?: ReactNode;

  /**
   * Optional short description.
   */
  subtitle?: ReactNode;

  /**
   * Layer responsibilities.
   */
  children: ReactNode;
}
