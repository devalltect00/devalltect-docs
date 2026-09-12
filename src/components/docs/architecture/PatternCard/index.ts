/**
 * ============================================================================
 * PatternCard
 * ============================================================================
 */

export { default } from "./PatternCard";

export type {
    PatternCardProps,
    PatternImplementation,
} from "./types";


/** Example Usage
 * 
<Docs.PatternCard
    title="Builder Pattern"
    icon={<Docs.Icon name="builder" />}
    summary={
        <>
            Constructs complex workflow objects
            through a fluent builder interface.
        </>
    }
    purpose={
        <>
            Separates workflow construction
            from workflow execution while
            keeping the API readable.
        </>
    }
    implementations={[
        {
            name: "WorkflowEngineBuilder",
        },
        {
            name: "PipelineBuilder",
        },
        {
            name: "InitBuilder",
        },
    ]}
/>
 */
