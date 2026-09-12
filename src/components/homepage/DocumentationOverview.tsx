import React from "react";

import styles from "./DocumentationOverview.module.css";

/**
 * ============================================================
 * Documentation Overview
 * ============================================================
 *
 * Helps readers choose the documentation area that matches their goal.
 *
 * Goals:
 *
 * - Improve discoverability
 * - Highlight common reader goals
 * - Explain the shared wayfinding model without implying that every project
 *   has an identical document tree
 *
 * This section is intentionally project-agnostic.
 * ============================================================
 */
export default function DocumentationOverview(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Find What You Need</h2>

          <p>
            Choose a project above, then use these common documentation areas to move
            from first use to deeper implementation details. Available sections vary
            according to each project's needs.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.icon}>📚</div>

            <h3>Get Started</h3>

            <p>
              Install a tool, review its requirements, configure a safe first run, and
              follow a practical introductory workflow.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>⚙️</div>

            <h3>Commands and Configuration</h3>

            <p>
              Find command syntax, options, configuration keys, examples, output
              behavior, and safety controls such as dry-run modes.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>🏗️</div>

            <h3>Concepts and Architecture</h3>

            <p>
              Understand workflows, responsibilities, data flow, design decisions,
              extension points, and troubleshooting boundaries.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>🧪</div>

            <h3>Development and Testing</h3>

            <p>
              Set up a source checkout, run quality checks, understand contribution
              expectations, and validate changes before release.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
