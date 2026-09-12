/**
 * ============================================================================
 * Documentation Hook
 * Hook: useThemeMode
 * ============================================================================
 *
 * Returns the current Docusaurus color mode.
 * ============================================================================
 */

import {
    useColorMode,
} from "@docusaurus/theme-common";

/**
 * Returns the current documentation theme.
 */
export function useThemeMode() {

    const {
        colorMode,
    } = useColorMode();

    return {

        isDark: colorMode === "dark",

        isLight: colorMode === "light",

        colorMode,

    };

}