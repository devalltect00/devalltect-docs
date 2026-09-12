import Link from "@docusaurus/Link";
import React from "react";

import styles from "./Audiences.module.css";

/**
 * ============================================================
 * Audiences
 * ============================================================
 *
 * Provides audience-based navigation paths.
 *
 * Users and developers often need different
 * documentation entry points.
 *
 * This section helps visitors quickly identify
 * where they should start.
 *
 * Future:
 * - Contributors
 * - Maintainers
 * - Architects
 * ============================================================
 */
export default function Audiences(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Start Here</h2>

          <p>
            Choose the documentation path that best
            matches your role and goals.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.icon}>👤</div>

            <h3>Users</h3>

            <p>
              Learn how to install, configure,
              and use projects through practical
              guides, quick starts, and command
              references.
            </p>

            <ul className={styles.list}>
              <li>Installation Guides</li>
              <li>Quick Start Guides</li>
              <li>Command References</li>
              <li>Usage Workflows</li>
              <li>Frequently Asked Questions</li>
            </ul>

            <Link
              className="button button--primary"
              to="/docs/projects-overview"
            >
              Explore User Documentation
            </Link>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>⚙️</div>

            <h3>Developers</h3>

            <p>
              Explore architecture documentation,
              development workflows, testing,
              tooling, and implementation details.
            </p>

            <ul className={styles.list}>
              <li>Architecture References</li>
              <li>Developer Guides</li>
              <li>Design Workflows</li>
              <li>Testing Documentation</li>
              <li>Tooling References</li>
            </ul>

            <Link
              className="button button--primary"
              to="/docs/intro"
            >
              Explore Developer Documentation
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
