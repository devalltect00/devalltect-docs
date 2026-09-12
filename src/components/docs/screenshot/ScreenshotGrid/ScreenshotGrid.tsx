/**
 * ============================================================================
 * Documentation Component
 * Component: ScreenshotGrid
 * ============================================================================
 *
 * Displays multiple screenshots using a responsive grid layout.
 *
 * Typical usage:
 *
 * • Command walkthroughs
 * • Before / after examples
 * • Installation screenshots
 * • UI previews
 * • CLI output galleries
 * ============================================================================
 */

import clsx from "clsx";

import { Grid, Heading, Icon } from "../../";

import Screenshot from "../Screenshot";

import styles from "./ScreenshotGrid.module.css";

import type { ScreenshotGridProps } from "./types";

/**
 * Displays a responsive screenshot gallery.
 */
export default function ScreenshotGrid({
  title = "Screenshots",
  description,
  items,
  columns = 2,
  className,
  ...props
}: ScreenshotGridProps) {
  return (
    <section className={clsx(styles.gallery, className)} {...props}>
      <Heading
        level={2}
        title={title}
        subtitle={description}
        icon={<Icon name="image" />}
      />

      <Grid columns={columns}>
        {items.map((item) => (
          <Screenshot
            key={item.src}
            src={item.src}
            alt={item.alt}
            title={item.title}
            caption={item.caption}
          />
        ))}
      </Grid>
    </section>
  );
}
