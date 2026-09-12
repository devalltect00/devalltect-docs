import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * Workflow step status.
 */
export type WorkflowStepStatus =
    | "pending"
    | "current"
    | "completed"
    | "optional";

/**
 * WorkflowStep component props.
 */
export interface WorkflowStepProps
    extends HTMLAttributes<HTMLDivElement> {

    /**
     * Step title.
     */
    title: string;

    /**
     * Optional description.
     */
    description?: ReactNode;

    /**
     * Step number.
     */
    number?: number;

    /**
     * Current step status.
     *
     * @default "pending"
     */
    status?: WorkflowStepStatus;

}