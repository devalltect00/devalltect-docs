export { default } from "./RelatedCommands";

export type {
    RelatedCommandItem,
    RelatedCommandsProps,
} from "./types";


/** Example Usage
 * 
<Docs.RelatedCommands
    commands={[
        {
            title: "custy validate",
            description:
                "Validate the project before running other workflows.",
            href: "/docs/custy/commands/validate",
        },
        {
            title: "custy commit",
            description:
                "Create a structured Git commit.",
            href: "/docs/custy/commands/commit",
        },
        {
            title: "custy run release",
            description:
                "Execute the complete release workflow.",
            href: "/docs/custy/commands/run",
        },
    ]}
/>
 */