import {
    HTMLAttributes,
    ReactNode,
} from "react";

/**
 * ============================================================================
 * MermaidCard Types
 * ============================================================================
 */

/**
 * MermaidCard component properties.
 */
export interface MermaidCardProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {

    /**
     * Diagram title.
     */
    title?: ReactNode;

    /**
     * Optional description displayed above the diagram.
     */
    description?: ReactNode;

    /**
     * Mermaid diagram.
     *
     * Usually an <Mermaid /> component.
     */
    children: ReactNode;

    /**
     * Optional footer.
     */
    footer?: ReactNode;

}
