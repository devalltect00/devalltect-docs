/**
 * ============================================================================
 * MermaidLegend
 * ============================================================================
 */

export { default } from "./MermaidLegend";

export type {
    MermaidLegendItem,
    MermaidLegendProps,
} from "./types";


/** Example Usage
 * 
<Docs.MermaidLegend
    items={[
        {
            symbol: <Docs.Badge variant="primary">CLI</Docs.Badge>,
            title: "CLI Layer",
            description: "Receives user input.",
        },
        {
            symbol: <Docs.Badge variant="success">Core</Docs.Badge>,
            title: "Core Layer",
            description: "Business logic.",
        },
        {
            symbol: <Docs.Badge variant="warning">Service</Docs.Badge>,
            title: "Service Layer",
            description: "External integrations.",
        },
        {
            symbol: <Docs.Badge variant="secondary">UI</Docs.Badge>,
            title: "Presentation Layer",
            description: "Rich output and rendering.",
        },
    ]}
/>
 */