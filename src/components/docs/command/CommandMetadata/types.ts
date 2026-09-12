import { HTMLAttributes, ReactNode } from "react";

import type { IconName } from "../../common/Icon";

/**
 * Metadata item displayed inside the CommandMetadata component.
 */
export interface CommandMetadataItem {

    /**
     * Metadata label.
     *
     * Example:
     * Status
     * Since
     * Category
     */
    label: string;

    /**
     * Metadata value.
     */
    value: ReactNode;

    /**
     * Optional icon.
     */
    icon?: IconName;
}

/**
 * Command metadata component.
 */
export interface CommandMetadataProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Metadata items.
     */
    items?: CommandMetadataItem[];

    /**
     * Backward-compatible alias used by existing Custy pages.
     * Prefer `items` in new documentation.
     */
    metadata?: CommandMetadataItem[];
}
