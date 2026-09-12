import React from "react";

import styles from "./DocumentationModel.module.css";

/**
 * ============================================================
 * Documentation Model
 * ============================================================
 *
 * Displays the standardized documentation structure
 * shared across Devalltect projects.
 *
 * Goals:
 *
 * - Improve discoverability
 * - Reduce onboarding time
 * - Promote documentation consistency
 * - Explain documentation organization
 *
 * Future:
 * - interactive diagram
 * - expandable sections
 * - links to documentation standards
 * ============================================================
 */
export default function DocumentationModel(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Documentation Structure</h2>

          <p>
            Every project follows a consistent documentation
            structure to improve navigation, maintenance,
            onboarding, and long-term scalability.
          </p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.tree}>
            <div>Project</div>
            <div>├── User Guide</div>
            <div>├── Developer Guide</div>
            <div>├── Architecture</div>
            <div>├── Commands</div>
            <div>├── Configuration</div>
            <div>├── Testing</div>
            <div>├── Diagrams</div>
            <div>├── Infrastructure</div>
            <div>└── Project Information</div>
          </div>

          <div className={styles.content}>
            <div className={styles.card}>
              <h3>User Guide</h3>

              <p>
                Installation, quick start guides,
                command references, workflows,
                and day-to-day usage documentation.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Developer Guide</h3>

              <p>
                Development workflows, tooling,
                contribution guidance, Docker usage,
                and implementation details.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Architecture</h3>

              <p>
                System design, requirements,
                architecture decisions, workflows,
                and technical references.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Testing & Diagrams</h3>

              <p>
                Testing strategies, validation
                procedures, diagrams, and visual
                documentation assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
