/**
 * ============================================================================
 * Documentation Utilities
 * File: slug.ts
 * ============================================================================
 *
 * Slug generation helpers.
 * ============================================================================
 */

/**
 * Converts text into a URL slug.
 *
 * @example
 *
 * "Getting Started"
 *
 * becomes
 *
 * "getting-started"
 */
export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
