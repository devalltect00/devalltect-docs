import { HTMLAttributes } from "react";

import type { BadgeVariant } from "../../common/Badge";

export interface CommandHeroLink {
    /**
     * Link label.
     */
    label: string;

    /**
     * Target URL or anchor.
     */
    href: string;
}

export interface CommandHeroProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * CLI command.
     *
     * Example:
     *
     * custy init
     */
    command: string;

    /**
     * Human-readable page title.
     *
     * Example:
     *
     * "Initialize a Project"
     */
    title: string;

    /**
     * Short description.
     */
    description: string;

    /**
     * Command category.
     */
    category: string;

    /**
     * Command status.
     *
     * Example:
     *
     * Stable
     * Beta
     * Experimental
     */
    status: string;

    /**
     * Override the semantic badge style inferred from the status text.
     */
    statusVariant?: BadgeVariant;

    /**
     * Quick syntax.
     */
    syntax: string;

    /**
     * Metadata tags.
     */
    tags?: string[];

    /**
     * Quick navigation.
     */
    links?: CommandHeroLink[];
}
