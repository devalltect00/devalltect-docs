import {
    HTMLAttributes,
    ReactNode,
} from "react";

import type {
    WorkflowStepStatus,
} from "../WorkflowStep";

/**
 * Represents a workflow stage.
 */
export interface WorkflowStageItem {

    /**
     * Stage title.
     */
    title: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Stage status.
     */
    status?: WorkflowStepStatus;

}

/**
 * WorkflowStage component props.
 */
export interface WorkflowStageProps
    extends HTMLAttributes<HTMLElement> {

    /**
     * Stage heading.
     */
    title: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Stage steps.
     */
    steps: WorkflowStageItem[];

}