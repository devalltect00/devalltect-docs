export { default } from "./CommandOutput";

export type {
    CommandOutputItem,
    CommandOutputProps,
} from "./types";


/** Example Usage
 * 
<Docs.CommandOutput
    outputs={[
        {
            title: "Successful Initialization",
            description:
                "Typical output after running the initialization command.",
            output: `✔ Configuration files created
✔ Templates generated
✔ Version file added

Initialization completed successfully.`,
        },
        {
            title: "Existing Project",
            description:
                "When files already exist.",
            output: `Skipped config.toml
Skipped templates
Skipped version.py

Initialization completed successfully.`,
            notes:
                "Existing files are preserved unless overwrite options are enabled.",
        },
    ]}
/>
 */