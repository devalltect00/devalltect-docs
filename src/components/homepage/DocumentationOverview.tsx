import React from "react";

import styles from "./DocumentationOverview.module.css";

/**
 * ============================================================
 * Documentation Overview
 * ============================================================
 *
 * Provides a high-level overview of the documentation
 * available throughout the Devalltect portal.
 *
 * Goals:
 *
 * - Improve discoverability
 * - Highlight documentation categories
 * - Help visitors quickly understand
 *   available resources
 *
 * This section is intentionally project-agnostic.
 * ============================================================
 */
export default function DocumentationOverview(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          {/* <h2>Documentation at a Glance</h2> */}
          <h2>Explore Documentation</h2>

          {/* <p>
            Explore documentation resources designed
            for users, developers, contributors,
            maintainers, and future project growth.
          </p> */}
          <p>
            Discover the documentation categories
            available across Devalltect projects.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.icon}>📚</div>

            <h3>User Guides</h3>

            <p>
              Installation, quick start guides,
              commands, workflows, and usage
              documentation.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>⚙️</div>

            <h3>Developer Guides</h3>

            <p>
              Development workflows, tooling,
              Docker usage, implementation details,
              and contributor resources.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>🏗️</div>

            <h3>Architecture</h3>

            <p>
              Requirements, system design,
              architecture references,
              and technical decisions.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>🧪</div>

            <h3>Testing</h3>

            <p>
              Testing strategies, validation
              procedures, quality assurance,
              and verification workflows.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>📊</div>

            <h3>Diagrams</h3>

            <p>
              Architecture diagrams,
              workflows, flowcharts,
              and visual documentation.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>📦</div>

            <h3>Project Documentation</h3>

            <p>
              Project information,
              configuration references,
              infrastructure, and lifecycle
              documentation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
