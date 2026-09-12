/**
 * ============================================================================
 * Documentation Hook
 * Hook: useClipboard
 * ============================================================================
 *
 * Provides clipboard copy functionality together with the
 * current copy state.
 *
 * Used by:
 *
 * • CopyButton
 * • Terminal
 * • CommandSyntax
 * • CommandExample
 * ============================================================================
 */

import {
    useCallback,
    useState,
} from "react";

import {
    copyToClipboard,
} from "../utils";

/**
 * Clipboard hook.
 */
export function useClipboard() {

    const [copied, setCopied] =
        useState(false);

    const copy = useCallback(

        async (
            value: string,
        ) => {

            const success =
                await copyToClipboard(value);

            setCopied(success);

            if (success) {

                window.setTimeout(() => {

                    setCopied(false);

                }, 2000);

            }

            return success;

        },

        [],

    );

    return {

        copied,

        copy,

    };

}