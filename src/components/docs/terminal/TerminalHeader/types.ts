import { HTMLAttributes, ReactNode } from "react";

export interface TerminalHeaderProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {

    title?: ReactNode;

    language?: ReactNode;
}
