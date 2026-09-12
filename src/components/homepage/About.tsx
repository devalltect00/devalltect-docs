import Link from "@docusaurus/Link";
import React from "react";

import styles from "./About.module.css";

/**
 * ============================================================
 * About Devalltect
 * ============================================================
 *
 * Small ownership and maintenance section.
 *
 * This section intentionally remains lightweight.
 *
 * Goals:
 *
 * - Explain who maintains the documentation
 * - Provide profile links
 * - Build trust and transparency
 *
 * This is NOT intended to be a portfolio
 * or resume section.
 * ============================================================
 */
export default function About(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          {/* <h2>About Devalltect</h2> */}
          <h2>Project Maintainer</h2>

          <p className={styles.description}>
            Devalltect Docs is the centralized documentation
            portal for projects, tools, platforms, and
            technical resources maintained by Rizky
            P Fernandes.
          </p>

          <p className={styles.description}>
            The goal of this documentation portal is to
            provide a consistent, organized, and scalable
            documentation experience across projects while
            making technical knowledge easier to discover,
            maintain, and share.
          </p>

          <div className={styles.links}>
            <Link
              className="button button--secondary"
              href="https://github.com/devalltect00"
            >
              GitHub
            </Link>

            <Link
              className="button button--secondary"
              href="https://www.linkedin.com/in/rizky-purwanto-fernandes/"
            >
              LinkedIn
            </Link>

            <Link
              className="button button--secondary"
              href="https://personal-portfolio-devalltect00.vercel.app/"
            >
              Portfolio
            </Link>

            <Link
              className="button button--secondary"
              href="https://www.kaggle.com/rizkyfernandes"
            >
              Kaggle
            </Link>

            <Link
              className="button button--secondary"
              href="https://codepen.io/devaltect"
            >
              CodePen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
