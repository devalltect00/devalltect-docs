import { HTMLAttributes, ReactNode } from "react";

/**
 * Represents a related command.
 */
export interface RelatedCommandItem {
  /**
   * Command title.
   *
   * Example:
   * custy validate
   */
  title?: string;

  /**
   * Backward-compatible command label used by existing documentation.
   * Prefer `title` in new pages.
   */
  name?: string;

  /**
   * Short description.
   */
  description?: ReactNode;

  /**
   * Documentation URL.
   *
   * Example:
   * /docs/custy/commands/validate
   */
  href?: string;
}

/**
 * RelatedCommands component props.
 */
export interface RelatedCommandsProps extends HTMLAttributes<HTMLElement> {
  /**
   * Related commands.
   */
  commands: RelatedCommandItem[];
}
