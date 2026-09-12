/**
 * ============================================================================
 * Architecture Documentation Components
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Components                                                                  */
/* -------------------------------------------------------------------------- */

export { default as ArchitectureCard } from "./ArchitectureCard";

export { default as LayerCard } from "./LayerCard";

export { default as DependencyCard } from "./DependencyCard";

export { default as PatternCard } from "./PatternCard";

export { default as PatternTable } from "./PatternTable";

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

export type {
    ArchitectureCardProps,
} from "./ArchitectureCard";

export type {
    LayerCardProps,
} from "./LayerCard";

export type {
    DependencyCardProps,
    DependencyItem,
} from "./DependencyCard";

export type {
    PatternCardProps,
    PatternImplementation,
} from "./PatternCard";

export type {
    PatternTableProps,
    PatternTableItem,
} from "./PatternTable";