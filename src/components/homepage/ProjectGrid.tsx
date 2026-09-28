import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";

import { Screenshot } from "@site/src/components/docs";
import {
  PROJECTS,
  sortProjectsByStartDate,
  type ProjectStartOrder,
} from "@site/src/data/projects";

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

  /** Chronological order applied to the project cards. */
  sortOrder?: ProjectStartOrder;
}

/** Format a normalized project start date for the active portal locale. */
function formatStartDate(startedAt: string, locale: string): string {
  const normalized = startedAt.length === 7 ? `${startedAt}-01` : startedAt;
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  };

  if (startedAt.length === 10) {
    options.day = "numeric";
  }

  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", options).format(
    new Date(`${normalized}T00:00:00Z`)
  );
}

/** Render the projects available in the documentation portal. */
export default function ProjectGrid({
  showPreviews = false,
  sortOrder = "newest",
}: ProjectGridProps): React.JSX.Element {
  const { i18n } = useDocusaurusContext();
  const projects = sortProjectsByStartDate(PROJECTS, sortOrder);
  const isIndonesian = i18n.currentLocale === "id";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Projects</h2>

          <p>
            Browse documentation for available projects, tools, services, and platforms.
          </p>

          <p className={styles.sortNote}>
            {isIndonesian
              ? "Diurutkan berdasarkan tanggal mulai terbaru."
              : "Sorted by newest start date."}
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
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

              <div className={styles.metadata}>
                <span className={styles.category}>{project.category}</span>
                <time dateTime={project.startedAt} className={styles.startedAt}>
                  {isIndonesian ? "Dimulai" : "Started"}{" "}
                  {formatStartDate(project.startedAt, i18n.currentLocale)}
                </time>
              </div>

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
