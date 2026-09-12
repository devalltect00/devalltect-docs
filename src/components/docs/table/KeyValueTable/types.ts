import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * ============================================================================
 * KeyValueTable Types
 * ============================================================================
 */

/**
 * Represents a key-value entry.
 */
export interface KeyValueTableItem {

    /**
     * Entry key.
     */
    key: ReactNode;

    /**
     * Entry value.
     */
    value: ReactNode;

}

/**
 * KeyValueTable component properties.
 */
export interface KeyValueTableProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {

    /**
     * Optional section title.
     *
     * @default "Information"
     */
    title?: ReactNode;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Entries.
     */
    items: KeyValueTableItem[];

}
