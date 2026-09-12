/**
 * ============================================================================
 * Command Documentation Components
 * ============================================================================
 *
 * Public exports for all command-related documentation components.
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Components                                                                  */
/* -------------------------------------------------------------------------- */

export { default as CommandHero } from "./CommandHero";

export { default as CommandMetadata } from "./CommandMetadata";

export { default as CommandSyntax } from "./CommandSyntax";

export { default as CommandOption } from "./CommandOption";

export { default as CommandExample } from "./CommandExample";

export { default as CommandOutput } from "./CommandOutput";

export { default as RelatedCommands } from "./RelatedCommands";

export { default as CommandChecklist } from "./CommandChecklist";

export { default as CommandLifecycle } from "./CommandLifecycle";

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

export type { CommandHeroLink, CommandHeroProps } from "./CommandHero";

export type { CommandMetadataItem, CommandMetadataProps } from "./CommandMetadata";

export type { CommandSyntaxExample, CommandSyntaxProps } from "./CommandSyntax";

export type { CommandOptionItem, CommandOptionProps } from "./CommandOption";

export type { CommandExampleItem, CommandExampleProps } from "./CommandExample";

export type { CommandOutputItem, CommandOutputProps } from "./CommandOutput";

export type { RelatedCommandItem, RelatedCommandsProps } from "./RelatedCommands";

export type { CommandChecklistItem, CommandChecklistProps } from "./CommandChecklist";

export type { CommandLifecycleProps, CommandLifecycleStep } from "./CommandLifecycle";
