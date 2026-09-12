import { ButtonHTMLAttributes } from "react";

/**
 * Copy button.
 */
export interface CopyButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    /**
     * Text to copy.
     */
    text: string;

    /**
     * Button label.
     *
     * @default "Copy"
     */
    label?: string;
}