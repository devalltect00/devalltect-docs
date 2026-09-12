/**
 * ============================================================================
 * Documentation Utilities
 * File: array.ts
 * ============================================================================
 *
 * Array helper functions.
 * ============================================================================
 */

/**
 * Removes duplicate values while preserving order.
 */
export function unique<T>(values: readonly T[]): T[] {
  return [...new Set(values)];
}

/**
 * Groups array items by key.
 */
export function groupBy<T, K extends PropertyKey>(
  values: readonly T[],
  selector: (value: T) => K
): Record<K, T[]> {
  return values.reduce(
    (groups, value) => {
      const key = selector(value);

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(value);

      return groups;
    },

    {} as Record<K, T[]>
  );
}
