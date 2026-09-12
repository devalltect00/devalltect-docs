/**
 * ============================================================================
 * Documentation Component
 * Component: RequirementCard
 * ============================================================================
 *
 * Displays a project, command, or environment requirement.
 *
 * Typical examples:
 *
 * • Python 3.11+
 * • Git
 * • Docker
 * • Docker Compose
 * • Internet Connection
 * • Administrator Permission
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import {
    Badge,
    Card,
    Heading,
} from "../../";

import styles from "./RequirementCard.module.css";

import type {
    RequirementCardProps,
} from "./types";

/**
 * Displays a requirement card.
 */
export default function RequirementCard({
    title,
    subtitle,
    icon,
    level = "required",
    children,
    className,
    ...props
}: RequirementCardProps) {

    const badgeVariant =
        level === "required"
            ? "danger"
            : level === "recommended"
            ? "warning"
            : "secondary";

    const badgeLabel =
        level === "required"
            ? translate({ id: "docs.common.required", message: "Required" })
            : level === "recommended"
            ? translate({ id: "docs.common.recommended", message: "Recommended" })
            : translate({ id: "docs.common.optional", message: "Optional" });

    return (

        <Card
            className={clsx(
                styles.card,
                className,
            )}
            {...props}
        >

            <div className={styles.header}>

                <Heading
                    level={3}
                    title={title}
                    subtitle={subtitle}
                    icon={icon}
                />

                <Badge variant={badgeVariant}>

                    {badgeLabel}

                </Badge>

            </div>

            <div className={styles.content}>

                {children}

            </div>

        </Card>

    );

}
