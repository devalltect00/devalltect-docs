import { HTMLAttributes, ReactNode } from "react";

/**
 * Supported badge variants.
 *
 * Variants communicate semantic meaning rather than color.
 * This allows the documentation theme to evolve without
 * changing component usage.
 */
export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

/**
 * Badge size.
 */
export type BadgeSize = "sm" | "md" | "lg";

/**
 * Documentation badge.
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge content.
   */
  children: ReactNode;

  /**
   * Optional icon.
   */
  icon?: ReactNode;

  /**
   * Badge style.
   *
   * @default "primary"
   */
  variant?: BadgeVariant;

  /**
   * Badge size.
   *
   * @default "md"
   */
  size?: BadgeSize;

  /**
   * Render with outlined appearance.
   *
   * @default false
   */
  outlined?: boolean;

  /**
   * Rounded pill style.
   *
   * @default true
   */
  pill?: boolean;
}
