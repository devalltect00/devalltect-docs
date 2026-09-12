import clsx from "clsx";
import Heading from "@theme/Heading";
// import Heading from "../Heading";

import styles from "./Section.module.css";

import type { SectionProps } from "./types";

export default function Section({
  title,
  subtitle,
  icon,
  id,
  children,
  compact = false,
  centered = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(styles.section, compact && styles.compact, className)}
    >
      {(title || subtitle) && (
        <header className={clsx(styles.header, centered && styles.centered)}>
          {title && (
            <Heading as="h2" className={styles.title}>
              {icon && <span className={styles.icon}>{icon}</span>}

              {title}
            </Heading>
          )}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
      )}

      <div className={styles.content}>{children}</div>
    </section>
  );
}
