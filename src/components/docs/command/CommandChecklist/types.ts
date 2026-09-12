import { HTMLAttributes, ReactNode } from "react";

/**
 * Represents a single checklist item.
 */
export interface CommandChecklistItem {

    /**
     * Checklist title.
     */
    title: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Indicates whether the item is required.
     *
     * @default true
     */
    required?: boolean;

}

/**
 * CommandChecklist component props.
 */
export interface CommandChecklistProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Checklist heading.
     *
     * @default "Before You Begin"
     */
    title?: string;

    /**
     * Optional section description.
     */
    description?: ReactNode;

    /**
     * Checklist items.
     */
    items: CommandChecklistItem[];

}