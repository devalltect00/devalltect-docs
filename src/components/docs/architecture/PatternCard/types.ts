import { HTMLAttributes, ReactNode } from "react";

/**
 * ============================================================================
 * PatternCard Types
 * ============================================================================
 */

/**
 * Represents an implementation location.
 */
export interface PatternImplementation {
  /**
   * File, class, or module.
   *
   * Example:
   * WorkflowEngineBuilder
   */
  name: string;

  /**
   * Optional description.
   */
  description?: ReactNode;
}

/**
 * PatternCard component properties.
 */
export interface PatternCardProps extends HTMLAttributes<HTMLElement> {
  /**
   * Pattern name.
   *
   * Example:
   * Builder Pattern
   */
  title: string;

  /**
   * Optional icon.
   */
  icon?: ReactNode;

  /**
   * Short description.
   */
  summary: ReactNode;

  /**
   * Why this pattern is used.
   */
  purpose?: ReactNode;

  /**
   * Implementation locations.
   */
  implementations?: PatternImplementation[];
}
