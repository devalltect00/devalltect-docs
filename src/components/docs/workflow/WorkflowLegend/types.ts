import {
    HTMLAttributes,
    ReactNode,
} from "react";

import type {
    WorkflowStepStatus,
} from "../WorkflowStep";

/**
 * Legend item.
 */
export interface WorkflowLegendItem {

    /**
     * Status represented by the legend.
     */
    status: WorkflowStepStatus;

    /**
     * Display title.
     */
    title: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

}

/**
 * WorkflowLegend component props.
 */
export interface WorkflowLegendProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Legend title.
     *
     * @default "Legend"
     */
    title?: string;

    /**
     * Legend items.
     */
    items: WorkflowLegendItem[];

}