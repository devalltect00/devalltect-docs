/**
 * ============================================================================
 * PropertyTable
 * ============================================================================
 */

export { default } from "./PropertyTable";

export type { PropertyTableItem, PropertyTableProps } from "./types";

/** Example Usage
 *
<Docs.PropertyTable
    title="Command Options"
    description="Supported options for the init command."
    items={[
        {
            property: "--force",
            type: "boolean",
            description: "Overwrite existing files.",
            defaultValue: "false",
        },
        {
            property: "--mode",
            type: '"all" | "config"',
            description: "Initialization mode.",
            defaultValue: "all",
            required: true,
        },
    ]}
/>
 */
