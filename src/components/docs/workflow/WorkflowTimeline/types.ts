import {
    HTMLAttributes,
    ReactNode,
} from "react";

import type {
    WorkflowStepStatus,
} from "../WorkflowStep";

/**
 * Timeline item.
 */
export interface WorkflowTimelineItem {

    /**
     * Timeline title.
     */
    title: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Workflow status.
     */
    status?: WorkflowStepStatus;

}

/**
 * WorkflowTimeline component props.
 */
export interface WorkflowTimelineProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Timeline title.
     *
     * @default "Workflow Timeline"
     */
    title?: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Timeline steps.
     */
    items: WorkflowTimelineItem[];

}