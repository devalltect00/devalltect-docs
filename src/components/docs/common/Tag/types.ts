import { HTMLAttributes, ReactNode } from "react";

/**
 * Documentation metadata tag.
 *
 * Tags are lightweight labels used to classify or categorize
 * documentation content.
 *
 * Unlike Badge, a Tag does not communicate semantic status.
 */
export interface TagProps
    extends HTMLAttributes<HTMLSpanElement> {

    /**
     * Tag content.
     */
    children: ReactNode;

    /**
     * Optional leading icon.
     */
    icon?: ReactNode;

    /**
     * Render with a subtle hover animation.
     *
     * @default true
     */
    hoverable?: boolean;
}