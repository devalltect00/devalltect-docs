import { HTMLAttributes, ReactNode } from "react";

/**
 * Terminal body.
 *
 * Displays terminal content while preserving
 * whitespace and line breaks.
 */
export interface TerminalBodyProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Terminal content.
     */
    children: ReactNode;

    /**
     * Show line numbers.
     *
     * Reserved for future implementation.
     *
     * @default false
     */
    lineNumbers?: boolean;
}