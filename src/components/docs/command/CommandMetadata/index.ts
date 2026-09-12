export { default } from "./CommandMetadata";

export type {
    CommandMetadataItem,
    CommandMetadataProps,
} from "./types";


/** Example Usage
 * 
<Docs.CommandMetadata
    items={[
        {
            label: "Status",
            value: "Stable",
            icon: "success",
        },
        {
            label: "Category",
            value: "Initialization",
            icon: "package",
        },
        {
            label: "Since",
            value: "v1.10",
            icon: "info",
        },
        {
            label: "Requires",
            value: "Git",
            icon: "dependency",
        },
        {
            label: "Platform",
            value: "Windows • Linux • macOS",
            icon: "project",
        },
        {
            label: "Language",
            value: "Python 3.11+",
            icon: "python",
        },
    ]}
/>
 */