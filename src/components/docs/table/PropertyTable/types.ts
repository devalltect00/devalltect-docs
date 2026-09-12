import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * ============================================================================
 * PropertyTable Types
 * ============================================================================
 */

/**
 * Represents a property displayed in the table.
 */
export interface PropertyTableItem {

    /**
     * Property name.
     */
    property: ReactNode;

    /**
     * Property type.
     */
    type?: ReactNode;

    /**
     * Property description.
     */
    description: ReactNode;

    /**
     * Default value.
     */
    defaultValue?: ReactNode;

    /**
     * Indicates whether the property is required.
     *
     * @default false
     */
    required?: boolean;

}

/**
 * PropertyTable component properties.
 */
export interface PropertyTableProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {

    /**
     * Table title.
     *
     * @default "Properties"
     */
    title?: ReactNode;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Table entries.
     */
    items: PropertyTableItem[];

}
