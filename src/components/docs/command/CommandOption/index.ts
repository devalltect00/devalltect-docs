export { default } from "./CommandOption";

export type {
    CommandOptionItem,
    CommandOptionProps,
} from "./types";


/** Example Usage
 * 
<Docs.CommandOption
    options={[
        {
            name: "--dry-run",
            shorthand: "-dr",
            description:
                "Preview the initialization without creating files.",
            defaultValue: "false",
        },
        {
            name: "--config",
            description:
                "Generate only configuration files.",
            example: "custy init --config",
        },
        {
            name: "--force",
            description:
                "Overwrite existing files.",
            required: false,
        },
    ]}
/>
 */