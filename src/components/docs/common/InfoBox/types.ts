import { HTMLAttributes, ReactNode } from "react";

/**
 * Semantic InfoBox variants.
 */
export type InfoBoxVariant =
    | "info"
    | "note"
    | "tip"
    | "success"
    | "warning"
    | "danger";

/**
 * Documentation information box.
 */
export interface InfoBoxProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {

    /**
     * Content.
     */
    children: ReactNode;

    /**
     * Optional title.
     *
     * If omitted, a default title is used
     * based on the selected variant.
     */
    title?: ReactNode;

    /**
     * Semantic variant.
     *
     * @default "info"
     */
    variant?: InfoBoxVariant;

    /**
     * Optional custom icon.
     *
     * If omitted, the default icon for the
     * selected variant is displayed.
     */
    icon?: ReactNode;
}
