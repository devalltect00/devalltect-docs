/**
 * ============================================================================
 * Documentation Utilities
 * File: copy.ts
 * ============================================================================
 *
 * Clipboard helper functions.
 * ============================================================================
 */

/**
 * Copies text to the system clipboard.
 *
 * @param value Text to copy.
 *
 * @returns True when successful.
 */
export async function copyToClipboard(value: string): Promise<boolean> {
  if (!navigator.clipboard) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(value);

    return true;
  } catch {
    return false;
  }
}
