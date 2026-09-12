import { ReactNode } from "react";

export interface SectionProps {
  /**
   * Section title.
   */
  title?: ReactNode;

  /**
   * Optional subtitle displayed below the title.
   */
  subtitle?: ReactNode;

  /**
   * Optional icon shown before the title.
   */
  icon?: ReactNode;

  /**
   * Section identifier.
   * Used for anchor links.
   */
  id?: string;

  /**
   * Content inside the section.
   */
  children: ReactNode;

  /**
   * Remove top spacing.
   */
  compact?: boolean;

  /**
   * Center align header.
   */
  centered?: boolean;
  /**
   * Optional custom class name.
   */
  className?: string;
}
