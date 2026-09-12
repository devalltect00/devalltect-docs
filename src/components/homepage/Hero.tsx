import Link from "@docusaurus/Link";
import React from "react";

import styles from "./Hero.module.css";

/**
 * ============================================================
 * Hero Section
 * ============================================================
 *
 * Landing section shown at the top of the homepage.
 *
 * Responsibilities:
 *
 * - Brand presentation
 * - Documentation portal introduction
 * - Primary navigation actions
 * - Quick project overview
 *
 * This component intentionally avoids hardcoding
 * project-specific information except the visible
 * project count.
 * ============================================================
 */
export default function Hero(): React.JSX.Element {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          {/* Logo */}
          <img
            src="/img/logo-devalltect00.png"
            alt="Devalltect Logo"
            className={styles.logo}
          />

          {/* Badge */}
          <div className={styles.badge}>
            Documentation Portal • 4 Projects
          </div>

          {/* Title */}
          <h1 className={styles.title}>Devalltect Docs</h1>

          {/* Subtitle */}
          {/* <p className={styles.subtitle}>
            Centralized Documentation Hub for Devalltect Projects
          </p> */}
          <p className={styles.subtitle}>
            Centralized Documentation for Devalltect Projects
          </p>

          {/* Description */}
          {/* <p className={styles.description}>
            Access project documentation, architecture references,
            developer guides, user guides, workflows, testing
            documentation, and technical resources from a single
            location.
          </p> */}
          <p className={styles.description}>
            Browse project documentation, user guides,
            developer resources, architecture references,
            testing documentation, workflows, and technical
            knowledge from a single location.
          </p>

          {/* Actions */}
          <div className={styles.actions}>
            <Link
              className="button button--primary button--lg"
              to="/docs/projects-overview"
            >
              Browse Projects
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Documentation Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
