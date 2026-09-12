/**
 * ============================================================================
 * Documentation Component
 * Component: ImageCompare
 * ============================================================================
 *
 * Displays two screenshots side by side.
 *
 * Typical comparisons:
 *
 * • Before / After
 * • Windows / Linux
 * • Local / Docker
 * • CLI / GUI
 * • Old Version / New Version
 * ============================================================================
 */

import clsx from "clsx";

import {
    Grid,
    Heading,
    Icon,
} from "../../";

import Screenshot from "../Screenshot";

import styles from "./ImageCompare.module.css";

import type {
    ImageCompareProps,
} from "./types";

/**
 * Displays two screenshots for comparison.
 */
export default function ImageCompare({
    title,
    description,
    left,
    right,
    className,
    ...props
}: ImageCompareProps) {

    return (

        <section
            className={clsx(
                styles.compare,
                className,
            )}
            {...props}
        >

            {title && (

                <Heading
                    level={2}
                    title={title}
                    subtitle={description}
                    icon={<Icon name="compare" />}
                />

            )}

            <Grid columns={2}>

                <Screenshot
                    src={left.src}
                    alt={left.alt}
                    title={left.title}
                    caption={left.caption}
                />

                <Screenshot
                    src={right.src}
                    alt={right.alt}
                    title={right.title}
                    caption={right.caption}
                />

            </Grid>

        </section>

    );

}