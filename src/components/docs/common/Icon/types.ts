/**
 * ============================================================================
 * Icon Types
 * ============================================================================
 *
 * Shared type definitions for the documentation icon system.
 *
 * Rather than coupling components to a specific icon library (such as Lucide,
 * Heroicons, Font Awesome, or emojis), components reference semantic icon
 * names. The actual icon implementation is resolved by the icon registry.
 *
 * This abstraction allows the entire documentation platform to migrate from
 * emojis to SVG icons in the future without changing any component APIs.
 *
 * Categories
 * ----------
 *
 * Status
 * - info
 * - note
 * - tip
 * - success
 * - warning
 * - danger
 *
 * Commands
 * - command
 * - terminal
 * - workflow
 * - pipeline
 * - release
 *
 * Architecture
 * - architecture
 * - layer
 * - dependency
 * - diagram
 * - design-pattern
 *
 * Documentation
 * - feature
 * - table
 * - compare
 * - image
 * - example
 * - requirement
 *
 * Files & Projects
 * - directory
 * - file
 * - configuration
 * - package
 * - project
 *
 * Development
 * - python
 * - docker
 * - git
 * - github
 * - testing
 * - security
 * - network
 *
 * Actions
 * - copy
 * - play
 *
 * ============================================================================
 */

import type { HTMLAttributes, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Icon Name                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Semantic icon names supported by the documentation platform.
 *
 * Components should always reference these names rather than depending on
 * a specific icon implementation.
 */

/**
 * Built-in documentation icons.
 *
 * These names represent concepts rather than a specific icon library.
 * The underlying icon implementation can change in the future
 * without affecting MDX documentation.
 */
export type IconName =

    /* ---------------------------------------------------------------------- */
    /* Status                                                                 */
    /* ---------------------------------------------------------------------- */

    | "info"
    | "note"
    | "tip"
    | "success"
    | "warning"
    | "danger"

    /* ---------------------------------------------------------------------- */
    /* Commands                                                               */
    /* ---------------------------------------------------------------------- */

    | "command"
    | "terminal"
    | "workflow"
    | "pipeline"
    | "release"

    /* ---------------------------------------------------------------------- */
    /* Architecture                                                           */
    /* ---------------------------------------------------------------------- */

    | "architecture"
    | "layer"
    | "dependency"
    | "diagram"
    | "design-pattern"

    /* ---------------------------------------------------------------------- */
    /* Documentation                                                          */
    /* ---------------------------------------------------------------------- */

    | "feature"
    | "table"
    | "compare"
    | "image"
    | "example"
    | "requirement"

    /* ---------------------------------------------------------------------- */
    /* Files & Projects                                                       */
    /* ---------------------------------------------------------------------- */

    | "directory"
    | "file"
    | "configuration"
    | "package"
    | "project"

    /* ---------------------------------------------------------------------- */
    /* Development                                                            */
    /* ---------------------------------------------------------------------- */

    | "python"
    | "docker"
    | "git"
    | "github"
    | "testing"
    | "security"
    | "network"

    /* ---------------------------------------------------------------------- */
    /* Actions                                                                */
    /* ---------------------------------------------------------------------- */

    | "copy"
    | "play"
    // | "rocket";

    /* ---------------------------------------------------------------------- */
    /* Additional                                                                */
    /* ---------------------------------------------------------------------- */

    | "timeline"
    ;

/* -------------------------------------------------------------------------- */
/* Props                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Properties for the Icon component.
 * 
 * Documentation icon component.
 */
export interface IconProps
    extends HTMLAttributes<HTMLSpanElement> {

    /**
     * Semantic icon name.
     */
    name: IconName;

    /**
     * Optional size.
     *
     * @default "md"
     */
    size?: "sm" | "md" | "lg";

    /**
     * Override the rendered icon.
     *
     * When provided, this value takes precedence over the icon registry.
     */
    children?: ReactNode;

}