/**
 * ============================================================================
 * PatternTable
 * ============================================================================
 */

export { default } from "./PatternTable";

export type { PatternTableItem, PatternTableProps } from "./types";

/** Example Usage
 *
<Docs.PatternTable
    description="Summary of the primary design patterns used throughout Custy."
    patterns={[
        {
            pattern: "Builder",
            purpose: "Construct complex workflow objects.",
            implementation: "WorkflowEngineBuilder, PipelineBuilder",
        },
        {
            pattern: "Strategy",
            purpose: "Support multiple versioning strategies.",
            implementation: "SemVer, PEP440, Date Strategy",
        },
        {
            pattern: "Factory",
            purpose: "Create Git service implementations.",
            implementation: "GitService Factory",
        },
        {
            pattern: "Registry",
            purpose: "Register reusable workflow steps.",
            implementation: "StepRegistry",
        },
        {
            pattern: "Decorator",
            purpose: "Add logging around workflow execution.",
            implementation: "log_step",
        },
    ]}
/>
 */
