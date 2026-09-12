import { HTMLAttributes, ReactNode } from "react";

/**
 * Supported heading levels.
 */
export type HeadingLevel =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6;

/**
 * Documentation heading component.
 */
export interface HeadingProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {

    /**
     * Main heading.
     */
    title: ReactNode;

    /**
     * Optional subtitle.
     */
    subtitle?: ReactNode;

    /**
     * Optional leading icon.
     */
    icon?: ReactNode;

    /**
     * Optional badges displayed beside the title.
     */
    badge?: ReactNode;

    /**
     * HTML heading level.
     *
     * @default 2
     */
    level?: HeadingLevel;

    /**
     * Anchor identifier.
     */
    id?: string;

    /**
     * Center align heading.
     *
     * @default false
     */
    centered?: boolean;
}
