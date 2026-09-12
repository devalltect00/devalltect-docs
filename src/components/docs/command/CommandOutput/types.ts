import { HTMLAttributes, ReactNode } from "react";

/**
 * Represents a single command output example.
 */
export interface CommandOutputItem {

    /**
     * Output title.
     */
    title: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Terminal output.
     */
    output: string;

    /**
     * Optional notes displayed after the output.
     */
    notes?: ReactNode;
}

/**
 * CommandOutput component props.
 */
export interface CommandOutputProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Output examples.
     */
    outputs: CommandOutputItem[];
}