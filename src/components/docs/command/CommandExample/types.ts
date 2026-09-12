import { HTMLAttributes, ReactNode } from "react";

/**
 * A single command example.
 */
export interface CommandExampleItem {
  /**
   * Example title.
   */
  title: string;

  /**
   * Optional explanation.
   */
  description?: ReactNode;

  /**
   * CLI command.
   */
  command: string;

  /**
   * Optional expected result.
   */
  result?: ReactNode;

  /**
   * Optional notes.
   */
  notes?: ReactNode;
}

/**
 * Command example component.
 */
export interface CommandExampleProps extends HTMLAttributes<HTMLElement> {
  /**
   * Example list.
   */
  examples: CommandExampleItem[];
}
