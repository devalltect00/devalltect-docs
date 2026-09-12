import {
    HTMLAttributes,
    ReactNode,
} from "react";

import type {
    WorkflowLegendItem,
} from "../WorkflowLegend";

import type {
    WorkflowTimelineItem,
} from "../WorkflowTimeline";

/**
 * WorkflowDiagram component props.
 */
export interface WorkflowDiagramProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Diagram title.
     *
     * @default "Workflow Diagram"
     */
    title?: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Workflow timeline.
     */
    timeline: WorkflowTimelineItem[];

    /**
     * Workflow legend.
     */
    legend?: WorkflowLegendItem[];

}