export { default } from "./CommandSyntax";

export type { CommandSyntaxExample, CommandSyntaxProps } from "./types";

/** Example Usage
 *
<Docs.CommandSyntax
    examples={[
        {
            command: "custy init",
        },
        {
            title: "Initialize only configuration",
            command: "custy init --config",
            description:
                "Generate only the configuration files.",
        },
        {
            title: "Dry Run",
            command: "custy init --dry-run",
            description:
                "Preview the initialization without writing files.",
        },
    ]}
/>
 */
