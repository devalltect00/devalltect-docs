/**
 * ============================================================================
 * KeyValueTable
 * ============================================================================
 */

export { default } from "./KeyValueTable";

export type {
    KeyValueTableItem,
    KeyValueTableProps,
} from "./types";


/** Example Usage
 * 
<Docs.KeyValueTable
    title="Project Information"
    description="Basic information about the Custy project."
    items={[
        {
            key: "Language",
            value: "Python",
        },
        {
            key: "License",
            value: "MIT",
        },
        {
            key: "Version",
            value: "1.10.14.post1",
        },
        {
            key: "Documentation",
            value: "Docusaurus",
        },
    ]}
/>
 */