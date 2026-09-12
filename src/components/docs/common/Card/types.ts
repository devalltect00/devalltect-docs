import { HTMLAttributes, ReactNode } from "react";

/**
 * Shared documentation card.
 *
 * This component provides a consistent card layout across the
 * documentation site. It is intentionally generic and serves as the
 * visual foundation for higher-level components such as:
 *
 * - FeatureCard
 * - RequirementCard
 * - PatternCard
 * - ArchitectureCard
 * - Screenshot
 * - CommandHero
 */
export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /**
   * Card content.
   */
  children: ReactNode;

  /**
   * Optional card title.
   */
  title?: ReactNode;

  /**
   * Optional icon displayed beside the title.
   */
  icon?: ReactNode;

  /**
   * Optional subtitle.
   */
  subtitle?: ReactNode;

  /**
   * Remove the default padding.
   */
  noPadding?: boolean;

  /**
   * Display a hover animation.
   *
   * Default: true
   */
  hoverable?: boolean;

  /**
   * Render with a subtle accent border.
   */
  bordered?: boolean;
}
