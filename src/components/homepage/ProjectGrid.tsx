import Link from "@docusaurus/Link";
import React from "react";

import { Screenshot } from "@site/src/components/docs";
import { PROJECTS } from "@site/src/data/projects";

import styles from "./ProjectGrid.module.css";

/**
 * ============================================================
 * Project Grid
 * ============================================================
 *
 * Displays all documentation projects available
 * within the Devalltect documentation portal.
 *
 * Cards are generated from the centralized
 * PROJECTS metadata source.
 *
 * Future:
 * - filtering
 * - search
 * - categories
 * - project status
 * - project icons
 * ============================================================
 */
/** Props accepted by the homepage project grid. */
interface ProjectGridProps {
  /** Display each project's representative application screenshot. */
  showPreviews?: boolean;
}

/** Render the projects available in the documentation portal. */
export default function ProjectGrid({
  showPreviews = false,
}: ProjectGridProps): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Projects</h2>

          <p>
            Browse documentation for available projects, tools, services, and platforms.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article key={project.id} className={styles.card}>
              {showPreviews && project.preview && (
                <Screenshot
                  src={project.preview.src}
                  alt={project.preview.alt}
                  fallback={project.preview.fallback}
                  variant="card"
                  shadow={false}
                />
              )}

              <div className={styles.category}>{project.category}</div>

              <h3 className={styles.name}>{project.name}</h3>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.techStack}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.footer}>
                {project.available ? (
                  <Link className="button button--primary" to={project.docsPath}>
                    Open Documentation
                  </Link>
                ) : (
                  <button className="button button--secondary" disabled>
                    Coming Soon
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
