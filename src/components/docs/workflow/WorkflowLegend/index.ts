export { default } from "./WorkflowLegend";

export type {
    WorkflowLegendItem,
    WorkflowLegendProps,
} from "./types";


/** Example Usage
 * 
<Docs.WorkflowLegend
    items={[
        {
            status: "completed",
            title: "Completed",
            description:
                "This workflow step has already been completed.",
        },
        {
            status: "current",
            title: "Current",
            description:
                "This is the active step in the workflow.",
        },
        {
            status: "pending",
            title: "Pending",
            description:
                "The step has not been executed yet.",
        },
        {
            status: "optional",
            title: "Optional",
            description:
                "This step is optional and may be skipped.",
        },
    ]}
/>
 */
