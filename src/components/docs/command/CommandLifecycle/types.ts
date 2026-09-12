import { HTMLAttributes, ReactNode } from "react";

/**
 * Represents a lifecycle step.
 */
export interface CommandLifecycleStep {
  /**
   * Step title.
   */
  title: string;

  /**
   * Optional description.
   */
  description?: ReactNode;

  /**
   * Indicates the current step.
   *
   * @default false
   */
  active?: boolean;
}

/**
 * CommandLifecycle component props.
 */
export interface CommandLifecycleProps extends HTMLAttributes<HTMLElement> {
  /**
   * Lifecycle title.
   *
   * @default "Command Lifecycle"
   */
  title?: string;

  /**
   * Optional description.
   */
  description?: ReactNode;

  /**
   * Ordered lifecycle steps.
   */
  steps: CommandLifecycleStep[];
}
