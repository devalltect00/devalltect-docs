/**
 * ============================================================================
 * Documentation Utilities
 * File: object.ts
 * ============================================================================
 *
 * Object helper functions.
 * ============================================================================
 */

/**
 * Removes object properties whose value is undefined.
 */
export function removeUndefined<
    T extends Record<string, unknown>,
>(
    object: T,
): Partial<T> {

    return Object.fromEntries(

        Object.entries(object)
            .filter(([, value]) => value !== undefined),

    ) as Partial<T>;

}
