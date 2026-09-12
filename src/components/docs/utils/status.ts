/**
 * ============================================================================
 * Documentation Utilities
 * File: status.ts
 * ============================================================================
 */

import type {
    Variant,
} from "../types";

/**
 * Converts a semantic status into a badge variant.
 */
export function statusToVariant(
    status: "success" | "warning" | "danger" | "info",
): Variant {

    switch (status) {

        case "success":

            return "success";

        case "warning":

            return "warning";

        case "danger":

            return "danger";

        default:

            return "primary";

    }

}