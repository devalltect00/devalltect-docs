/**
 * ============================================================================
 * Workflow Documentation Components
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Components                                                                  */
/* -------------------------------------------------------------------------- */

export { default as WorkflowStep } from "./WorkflowStep";

export { default as WorkflowStage } from "./WorkflowStage";

export { default as WorkflowLegend } from "./WorkflowLegend";

export { default as WorkflowTimeline } from "./WorkflowTimeline";

export { default as WorkflowDiagram } from "./WorkflowDiagram";

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

export type {
    WorkflowStepProps,
    WorkflowStepStatus,
} from "./WorkflowStep";

export type {
    WorkflowStageItem,
    WorkflowStageProps,
} from "./WorkflowStage";

export type {
    WorkflowLegendItem,
    WorkflowLegendProps,
} from "./WorkflowLegend";

export type {
    WorkflowTimelineItem,
    WorkflowTimelineProps,
} from "./WorkflowTimeline";

export type {
    WorkflowDiagramProps,
} from "./WorkflowDiagram";