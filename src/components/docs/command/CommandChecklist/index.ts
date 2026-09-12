export { default } from "./CommandChecklist";

export type { CommandChecklistItem, CommandChecklistProps } from "./types";

/** Example Usage
 *
<Docs.CommandChecklist
    title="Before Running custy init"
    description="Make sure your environment is ready before initializing the project."
    items={[
        {
            title: "Python is installed",
            description:
                "Python 3.11 or newer is recommended.",
        },
        {
            title: "Working inside a project directory",
            description:
                "Run the command from the root of your project.",
        },
        {
            title: "Git repository initialized",
            description:
                "Required if you plan to use release automation.",
        },
        {
            title: "Configuration file already exists",
            description:
                "Not required. Existing files will be preserved.",
            required: false,
        },
    ]}
/>
 */
