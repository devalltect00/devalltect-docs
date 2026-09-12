/**
 * ============================================================================
 * Shared Documentation Types
 * File: common.ts
 * ============================================================================
 *
 * Common reusable type definitions shared throughout the
 * documentation component library.
 *
 * These types intentionally remain generic so they can be reused
 * across all documentation components.
 * ============================================================================
 */

import { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Content                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Represents any renderable content.
 */
export type Content = ReactNode;

/**
 * Represents optional renderable content.
 */
export type OptionalContent = ReactNode | undefined;

/* -------------------------------------------------------------------------- */
/* Generic Object                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Represents a generic key-value object.
 */
export type Dictionary<T = unknown> = Record<string, T>;
