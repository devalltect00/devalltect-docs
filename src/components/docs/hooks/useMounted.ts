/**
 * ============================================================================
 * Documentation Hook
 * Hook: useMounted
 * ============================================================================
 *
 * Indicates whether the component has been mounted.
 *
 * Useful for avoiding hydration mismatches in Docusaurus.
 * ============================================================================
 */

import {
    useEffect,
    useState,
} from "react";

/**
 * Returns true after the component mounts.
 */
export function useMounted() {

    const [mounted, setMounted] =
        useState(false);

    useEffect(() => {

        setMounted(true);

    }, []);

    return mounted;

}