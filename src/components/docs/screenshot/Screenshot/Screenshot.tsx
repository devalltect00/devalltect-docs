/**
 * ============================================================================
 * Documentation Component
 * Component: Screenshot
 * ============================================================================
 *
 * Displays a responsive screenshot with an optional title
 * and caption.
 *
 * This component is intended for documenting:
 *
 * • CLI output
 * • Application UI
 * • Configuration screens
 * • Terminal sessions
 * • Generated files
 * ============================================================================
 */

import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { Heading } from "../../";

import styles from "./Screenshot.module.css";

import type { ScreenshotProps } from "./types";

/**
 * Displays a documentation screenshot.
 */
export default function Screenshot({
  src,
  alt,
  variant = "default",
  title,
  caption,
  fallback,
  showFallback = true,
  shadow = true,
  border = true,
  className,
  ...props
}: ScreenshotProps) {
  const resolvedSrc = useBaseUrl(src);
  const imageRef = useRef<HTMLImageElement>(null);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    const image = imageRef.current;

    setHasLoadError(Boolean(image?.complete && image.naturalWidth === 0));
  }, [resolvedSrc]);

  return (
    <figure
      className={clsx(
        styles.figure,
        variant === "overview" && styles.overview,
        variant === "card" && styles.card,
        shadow && styles.shadow,
        border && styles.border,
        className
      )}
      {...props}
    >
      {title && <Heading level={3} title={title} />}

      {hasLoadError ? (
        showFallback && (
          <div className={styles.fallback} role="img" aria-label={alt}>
            <strong className={styles.fallbackTitle}>
              <Translate id="docs.screenshot.unavailable.title">
                Image unavailable
              </Translate>
            </strong>

            <span className={styles.fallbackDescription}>{fallback ?? alt}</span>
          </div>
        )
      ) : (
        <img
          ref={imageRef}
          src={resolvedSrc}
          alt={alt}
          className={styles.image}
          loading="lazy"
          onError={() => setHasLoadError(true)}
        />
      )}

      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
