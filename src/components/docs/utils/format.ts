/**
 * ============================================================================
 * Documentation Utilities
 * File: format.ts
 * ============================================================================
 */

/**
 * Formats terminal output by trimming surrounding
 * whitespace while preserving indentation.
 */
export function formatTerminalOutput(value: string): string {
  return value.trim();
}
