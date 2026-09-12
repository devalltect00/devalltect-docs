export { default } from "./CommandExample";

export type { CommandExampleItem, CommandExampleProps } from "./types";

/** Example Usage
 *
<Docs.CommandExample
    examples={[
        {
            title: "Initialize a project",
            description:
                "Generate all required configuration files.",
            command: "custy init",
            result:
                "Configuration files and templates are created.",
        },
        {
            title: "Preview initialization",
            description:
                "Simulate the initialization process.",
            command: "custy init --dry-run",
            result:
                "Displays planned operations without creating files.",
            notes:
                "Recommended before running in an existing project.",
        },
    ]}
/>
 */
