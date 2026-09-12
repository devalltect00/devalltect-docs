/**
 * ============================================================================
 * Documentation Utilities
 * File: validation.ts
 * ============================================================================
 *
 * Common validation helper functions.
 * ============================================================================
 */

/**
 * Determines whether a value is null or undefined.
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Determines whether a string is empty after trimming.
 */
export function isBlank(value: string | null | undefined): boolean {
  return value == null || value.trim().length === 0;
}

/**
 * Determines whether a value exists.
 */
export function isPresent<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
