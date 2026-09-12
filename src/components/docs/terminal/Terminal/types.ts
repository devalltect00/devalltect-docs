import { HTMLAttributes, ReactNode } from "react";

/**
 * Documentation terminal.
 */
export interface TerminalProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {

    /**
     * Terminal content.
     */
    children: ReactNode;

    /**
     * Terminal title.
     *
     * Example:
     *
     * Bash
     * PowerShell
     * CMD
     */
    title?: ReactNode;

    /**
     * Optional language badge.
     *
     * Example:
     *
     * bash
     * shell
     * powershell
     */
    language?: string;

    /**
     * Show terminal header.
     *
     * Default: true
     */
    showHeader?: boolean;
}
