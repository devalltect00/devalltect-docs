import Link from "@docusaurus/Link";
import React from "react";

import styles from "./Audiences.module.css";

/**
 * ============================================================
 * Audiences
 * ============================================================
 *
 * Provides goal-based navigation paths.
 *
 * Tool users and contributors need different documentation entry points.
 *
 * This section helps visitors quickly identify
 * where they should start.
 *
 * ============================================================
 */
export default function Audiences(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Start Here</h2>

          <p>Choose the documentation path that best matches your role and goals.</p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.icon}>👤</div>

            <h3>Use a Tool</h3>

            <p>
              Compare the available projects, choose the tool that matches your task,
              and follow its installation and first-workflow guide.
            </p>

            <ul className={styles.list}>
              <li>Project directory</li>
              <li>Installation and Docker options</li>
              <li>First workflows</li>
              <li>Commands and configuration</li>
              <li>Safety and troubleshooting</li>
            </ul>

            <Link className="button button--primary" to="/docs/projects-overview">
              Browse Projects
            </Link>
          </article>

          <article className={styles.card}>
            <div className={styles.icon}>⚙️</div>

            <h3>Develop or Contribute</h3>

            <p>
              Open the developer hub for source setup, architecture, testing,
              contribution guidance, and documentation maintenance.
            </p>

            <ul className={styles.list}>
              <li>Project developer guides</li>
              <li>Architecture references</li>
              <li>Testing and quality workflows</li>
              <li>Contribution guidance</li>
              <li>Portal maintainer workflow</li>
            </ul>

            <Link className="button button--primary" to="/docs/developers">
              Open Developer Hub
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
