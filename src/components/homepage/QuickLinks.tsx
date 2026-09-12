import Link from "@docusaurus/Link";
import React from "react";

import styles from "./QuickLinks.module.css";

/**
 * ============================================================
 * Quick Links
 * ============================================================
 *
 * Provides fast access to commonly used
 * documentation sections.
 *
 * This section is intentionally generic and
 * project-agnostic.
 *
 * Future:
 * - Search shortcuts
 * - Documentation categories
 * - Recently updated docs
 * - Popular pages
 * ============================================================
 */
export default function QuickLinks(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          {/* <h2>Quick Links</h2> */}
          {/* <h2>Explore Documentation</h2> */}
          <h2>Popular Destinations</h2>

          {/* <p>
            Frequently accessed documentation resources
            and navigation shortcuts.
          </p> */}
          <p>Frequently visited documentation sections and project entry points.</p>
        </div>

        <div className={styles.grid}>
          <Link className={styles.card} to="/docs/intro">
            <h3>Documentation Home</h3>

            <p>Start exploring the Devalltect documentation portal.</p>
          </Link>

          <Link className={styles.card} to="/docs/projects-overview">
            <h3>Projects Overview</h3>

            <p>Browse available projects and documentation collections.</p>
          </Link>

          <Link className={styles.card} to="/docs/path-header-scanner">
            <h3>Path Header Scanner</h3>

            <p>Path validation, header analysis, and reporting documentation.</p>
          </Link>

          <Link className={styles.card} to="/docs/doc-gen">
            <h3>Doc Gen</h3>

            <p>
              Documentation generation workflows, structures, and tooling references.
            </p>
          </Link>

          <Link className={styles.card} to="/docs/reflow">
            <h3>Reflow</h3>

            <p>Versioning, release automation, and Git workflow documentation.</p>
          </Link>

          <Link className={styles.card} to="/docs/devalltect-docs/maintainer-workflow">
            <h3>Portal Maintainer Guide</h3>

            <p>
              Learn how content, translations, project metadata, screenshots,
              validation, and releases stay synchronized.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
