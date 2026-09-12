/**
 * ============================================================================
 * Shared Documentation Types
 * File: component.ts
 * ============================================================================
 *
 * Shared component interfaces.
 * ============================================================================
 */

import { HTMLAttributes, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Base Interfaces                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Adds a title.
 */
export interface WithTitle {
  /**
   * Display title.
   */
  title?: ReactNode;
}

/**
 * Adds a subtitle.
 */
export interface WithSubtitle {
  /**
   * Display subtitle.
   */
  subtitle?: ReactNode;
}

/**
 * Adds a description.
 */
export interface WithDescription {
  /**
   * Description.
   */
  description?: ReactNode;
}

/**
 * Adds children.
 */
export interface WithChildren {
  /**
   * Child elements.
   */
  children: ReactNode;
}

/**
 * Base props shared by most documentation components.
 */
export interface BaseComponentProps extends HTMLAttributes<HTMLElement> {
  /**
   * Additional CSS class.
   */
  className?: string;
}
