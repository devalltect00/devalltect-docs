/**
 * ============================================================================
 * Documentation Utilities
 * File: text.ts
 * ============================================================================
 */

/**
 * Removes duplicate whitespace.
 */
export function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/**
 * Removes empty lines.
 */
export function removeEmptyLines(value: string): string {
  return value
    .split("\n")
    .filter((line) => line.trim())
    .join("\n");
}
