import { HTMLAttributes, ReactNode } from "react";

export interface CommandOptionItem {
  /**
   * Option name.
   *
   * Example:
   * --dry-run
   */
  name: string;

  /**
   * Optional shorthand.
   *
   * Example:
   * -dr
   */
  shorthand?: string;

  /**
   * Description.
   */
  description: ReactNode;

  /**
   * Whether the option is required.
   *
   * Default: false
   */
  required?: boolean;

  /**
   * Default value.
   */
  defaultValue?: ReactNode;

  /**
   * Example value.
   */
  example?: ReactNode;
}

export interface CommandOptionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Available command options.
   */
  options: CommandOptionItem[];
}
