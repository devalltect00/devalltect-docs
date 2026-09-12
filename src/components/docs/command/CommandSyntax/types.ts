import { HTMLAttributes } from "react";

/**
 * Single command example.
 */
export interface CommandSyntaxExample {

    /**
     * Example title.
     */
    title?: string;

    /**
     * Command string.
     */
    command: string;

    /**
     * Optional explanation.
     */
    description?: string;
}

/**
 * Command syntax component.
 */
export interface CommandSyntaxProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Syntax examples.
     */
    examples: CommandSyntaxExample[];

    /**
     * Programming language.
     *
     * @default "bash"
     */
    language?: string;
}