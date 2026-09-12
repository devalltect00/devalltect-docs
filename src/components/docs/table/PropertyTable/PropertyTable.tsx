/**
 * ============================================================================
 * Documentation Component
 * Component: PropertyTable
 * ============================================================================
 *
 * Displays a documentation table describing component,
 * command, or configuration properties.
 *
 * Typical usage:
 *
 * • React component props
 * • CLI options
 * • Configuration fields
 * • API request parameters
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import {
    Badge,
    Heading,
    Icon,
} from "../../";

import styles from "./PropertyTable.module.css";

import type {
    PropertyTableProps,
} from "./types";

/**
 * Displays a property table.
 */
export default function PropertyTable({
    title,
    description,
    items,
    className,
    ...props
}: PropertyTableProps) {

    const resolvedTitle = title ?? translate({
        id: "docs.propertyTable.title",
        message: "Properties",
    });

    return (

        <section
            className={clsx(
                styles.section,
                className,
            )}
            {...props}
        >

            <Heading
                level={2}
                title={resolvedTitle}
                subtitle={description}
                icon={<Icon name="table" />}
            />

            <div className={styles.wrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>

                            <th>{translate({ id: "docs.propertyTable.property", message: "Property" })}</th>

                            <th>{translate({ id: "docs.propertyTable.type", message: "Type" })}</th>

                            <th>{translate({ id: "docs.propertyTable.description", message: "Description" })}</th>

                            <th>{translate({ id: "docs.common.default", message: "Default" })}</th>

                            <th>{translate({ id: "docs.common.required", message: "Required" })}</th>

                        </tr>

                    </thead>

                    <tbody>

                        {items.map((item) => (

                            <tr
                                key={String(item.property)}
                            >

                                <td>

                                    <code>

                                        {item.property}

                                    </code>

                                </td>

                                <td>

                                    {item.type}

                                </td>

                                <td>

                                    {item.description}

                                </td>

                                <td>

                                    {item.defaultValue ?? "-"}

                                </td>

                                <td>

                                    <Badge
                                        variant={
                                            item.required
                                                ? "danger"
                                                : "secondary"
                                        }
                                    >

                                        {item.required
                                            ? translate({ id: "docs.common.yes", message: "Yes" })
                                            : translate({ id: "docs.common.no", message: "No" })}

                                    </Badge>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </section>

    );

}
