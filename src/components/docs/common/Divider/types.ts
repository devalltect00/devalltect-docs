import { HTMLAttributes } from "react";

/**
 * Divider orientation.
 */
export type DividerOrientation = "horizontal" | "vertical";

/**
 * Divider style.
 */
export type DividerVariant = "solid" | "dashed" | "dotted";

/**
 * Documentation divider component.
 */
export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * Divider orientation.
   *
   * @default "horizontal"
   */
  orientation?: DividerOrientation;

  /**
   * Divider style.
   *
   * @default "solid"
   */
  variant?: DividerVariant;

  /**
   * Optional spacing.
   *
   * @default "md"
   */
  spacing?: "sm" | "md" | "lg";
}
