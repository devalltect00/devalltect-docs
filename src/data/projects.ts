/**
 * ============================================================
 * Project Metadata
 * ============================================================
 *
 * Centralized project definitions used throughout
 * the Devalltect documentation portal.
 *
 * This file acts as a single source of truth for:
 *
 * - Homepage project cards
 * - Project overview pages
 * - Future search integration
 * - Future filtering/grouping
 * - Future project statistics
 *
 * When adding a new project:
 *
 * 1. Add a new object to PROJECTS
 * 2. Add project documentation under docs/
 * 3. Add project sidebar entry
 * 4. Add `documentation` metadata when release-aware status is required
 *
 * No homepage code changes should be required.
 *
 * ============================================================
 * Documentation Freshness Configuration
 * ============================================================
 *
 * `documentation` is optional. When omitted, the project has no global
 * documentation-version notice and the freshness plugin skips it.
 *
 * Shared documentation fields:
 *
 * - `version`: normalized documented version, for example `2.0.0`.
 * - `versionTag`: repository tag represented by the docs, such as `v2.0.0`.
 * - `lastReviewed`: deliberate source-review date in `YYYY-MM-DD` format.
 * - `releaseUrl`: release page for the documented version.
 * - `statusPath`: locale-independent route to the project's status page.
 * - `freshness`: automatic or manual status resolution described below.
 *
 * Automatic mode:
 *
 * Use when repository tags follow SemVer or PEP 440. The Docusaurus plugin
 * runs `git ls-remote --tags --refs` at startup/build time, filters compatible
 * tags, selects the latest version, and compares it with `version`.
 *
 * ```ts
 * freshness: {
 *   mode: "auto",
 *   repositoryUrl: "https://github.com/OWNER/REPOSITORY.git",
 *   tagFormat: "semver", // "semver" | "pep440"
 *   releasesUrl: "https://github.com/OWNER/REPOSITORY/releases", // optional
 *   includePrereleases: false, // optional; defaults to false
 *   timeoutMs: 10_000, // optional; 1,000 through 60,000
 *   fallbackStatus: "unknown", // optional; "unknown" | "current"
 * }
 * ```
 *
 * Automatic-mode notes:
 *
 * - Build environments need Git and access to `repositoryUrl`.
 * - Only `semver` and `pep440` are supported; use manual mode for custom tags.
 * - A conventional leading `v` is accepted for both supported formats.
 * - `includePrereleases: false` excludes alpha, beta, RC, and dev releases.
 * - `fallbackStatus: "unknown"` is recommended because verification failures
 *   should not silently claim that documentation is current.
 * - Never place repository credentials or access tokens in this file.
 *
 * Manual mode:
 *
 * Use for custom tag schemes, inaccessible/private remotes, or status that
 * requires human judgment. Manual mode never queries Git.
 *
 * ```ts
 * freshness: {
 *   mode: "manual",
 *   status: "current", // "current" | "outdated" | "preview"
 *   latestVersionTag: "custom-release-42", // optional
 * }
 * ```
 *
 * Resolved status and UI behavior:
 *
 * - `current`: documented and latest versions match; notice is hidden.
 * - `outdated`: a newer release exists; warning notice is shown.
 * - `preview`: documentation is ahead of releases; preview notice is shown.
 * - `unknown`: automatic verification failed; neutral notice is shown.
 *
 * Release maintenance checklist:
 *
 * 1. Review the new project source and release.
 * 2. Update affected English and Indonesian documentation.
 * 3. Update `version`, `versionTag`, `releaseUrl`, and `lastReviewed`.
 * 4. Confirm `tagFormat` still matches the repository tag strategy.
 * 5. Run freshness tests, type checking, and both locale builds.
 * ============================================================
 */

import type { DocumentationFreshnessConfig } from "./documentationFreshness";

/**
 * Supported project categories.
 *
 * Extend this union as the documentation portal grows.
 */
export type ProjectCategory =
  | "CLI Tool"
  | "Library"
  | "Web Application"
  | "Desktop Application"
  | "API Service"
  | "Platform";

/**
 * Describes the application release represented by a documentation set.
 */
export interface ProjectDocumentation {
  /**
   * Application version used as the documentation baseline.
   */
  version: string;

  /**
   * Repository tag associated with the documented version.
   */
  versionTag: string;

  /**
   * ISO date when the documentation was last reviewed against the source.
   */
  lastReviewed: string;

  /**
   * Release page for the documented version.
   */
  releaseUrl: string;

  /**
   * Locale-independent route to the documentation status page.
   */
  statusPath: string;

  /**
   * Manual or automatic policy used to determine documentation freshness.
   *
   * Automatic mode supports only SemVer and PEP 440 tags. Projects using a
   * custom tag format must select manual mode.
   */
  freshness: DocumentationFreshnessConfig;
}

/**
 * Describes the representative image displayed for a documented project.
 */
export interface ProjectPreview {
  /** Public asset path resolved against the Docusaurus base URL. */
  src: string;

  /** Accessible description of the image. */
  alt: string;

  /** Helpful text displayed until the planned image is available. */
  fallback: string;
}

/**
 * Represents a documentation project.
 */
export interface Project {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Human readable project name.
   */
  name: string;

  /**
   * Short category label.
   */
  category: ProjectCategory;

  /**
   * Project summary.
   */
  description: string;

  /**
   * Primary technologies.
   */
  technologies: string[];

  /**
   * Optional representative application image used by project discovery UI.
   */
  preview?: ProjectPreview;

  /**
   * Documentation root route.
   */
  docsPath: string;

  /**
   * Indicates whether project documentation
   * is currently available.
   */
  available: boolean;

  /**
   * Optional release baseline for version-aware documentation.
   */
  documentation?: ProjectDocumentation;
}

/**
 * Documentation projects.
 *
 * Homepage cards are generated from this array.
 */
export const PROJECTS: Project[] = [
  {
    id: "path-header-scanner",
    name: "Path Header Scanner",
    category: "CLI Tool",
    description:
      "Preview, validate, and apply consistent path headers across source code and documentation.",
    technologies: ["Python 3.11+", "Typer", "Rich", "TOML"],
    preview: {
      src: "/img/project-previews/path-header-scanner.png",
      alt: "Path Header Scanner terminal banner and command output",
      fallback:
        "Path Header Scanner preview will appear here when the release screenshot is added.",
    },
    docsPath: "/docs/path-header-scanner",
    available: true,
    documentation: {
      version: "1.0.0",
      versionTag: "v1.0.0",
      lastReviewed: "2026-09-02",
      releaseUrl:
        "https://github.com/devalltect00/Path-Header-Scanner/releases/tag/v1.0.0",
      statusPath: "/docs/path-header-scanner/reference/documentation-status",
      freshness: {
        mode: "auto",
        repositoryUrl: "https://github.com/devalltect00/Path-Header-Scanner.git",
        tagFormat: "semver",
        releasesUrl: "https://github.com/devalltect00/Path-Header-Scanner/releases",
        includePrereleases: false,
        timeoutMs: 10_000,
        fallbackStatus: "unknown",
      },
    },
  },

  {
    id: "doc-gen",
    name: "Doc Gen",
    category: "CLI Tool",
    description:
      "Generate, print, and analyze repository structure documentation in Markdown.",
    technologies: ["Python 3.9+", "Typer", "Markdown", "TOML"],
    preview: {
      src: "/img/project-previews/doc-gen.png",
      alt: "Doc Gen terminal banner and project structure output",
      fallback:
        "Doc Gen preview will appear here when the release screenshot is added.",
    },
    docsPath: "/docs/doc-gen",
    available: true,
    documentation: {
      version: "1.0.1",
      versionTag: "v1.0.1",
      lastReviewed: "2026-09-09",
      releaseUrl: "https://github.com/devalltect00/Doc-Gen/releases/tag/v1.0.1",
      statusPath: "/docs/doc-gen/reference/documentation-status",
      freshness: {
        mode: "auto",
        repositoryUrl: "https://github.com/devalltect00/Doc-Gen.git",
        tagFormat: "semver",
        releasesUrl: "https://github.com/devalltect00/Doc-Gen/releases",
        includePrereleases: false,
        timeoutMs: 10_000,
        fallbackStatus: "unknown",
      },
    },
  },

  {
    id: "reflow",
    name: "Reflow",
    category: "CLI Tool",
    description:
      "Repository-aware tag conversion, release recovery, and container image publishing.",
    technologies: ["Python 3.14+", "Typer", "Git", "Docker"],
    preview: {
      src: "/img/project-previews/reflow.png",
      alt: "Reflow terminal banner and repository workflow output",
      fallback: "Reflow preview will appear here when the release screenshot is added.",
    },
    docsPath: "/docs/reflow",
    available: true,
    documentation: {
      version: "1.0.1",
      versionTag: "v1.0.1",
      lastReviewed: "2026-09-09",
      releaseUrl: "https://github.com/devalltect00/Git-Reflow/releases/tag/v1.0.1",
      statusPath: "/docs/reflow/reference/documentation-status",
      freshness: {
        mode: "auto",
        repositoryUrl: "https://github.com/devalltect00/Git-Reflow.git",
        tagFormat: "semver",
        releasesUrl: "https://github.com/devalltect00/Git-Reflow/releases",
        includePrereleases: false,
        timeoutMs: 10_000,
        fallbackStatus: "unknown",
      },
    },
  },

  {
    id: "custy",
    name: "Custy",
    category: "CLI Tool",
    description:
      "Configurable Git workflow, versioning, changelog, backup, cleanup, and release automation.",
    technologies: ["Python 3.14+", "Typer", "Git", "Jinja2"],
    preview: {
      src: "/img/project-previews/custy.png",
      alt: "Custy terminal banner and Git workflow output",
      fallback: "Custy preview will appear here when the release screenshot is added.",
    },
    docsPath: "/docs/custy",
    available: true,
    documentation: {
      version: "2.1.1",
      versionTag: "v2.1.1",
      lastReviewed: "2026-09-09",
      releaseUrl: "https://github.com/devalltect00/Custy/releases/tag/v2.1.1",
      statusPath: "/docs/custy/reference/documentation-status",
      freshness: {
        mode: "auto",
        repositoryUrl: "https://github.com/devalltect00/Custy.git",
        tagFormat: "semver",
        releasesUrl: "https://github.com/devalltect00/Custy/releases",
        includePrereleases: false,
        timeoutMs: 10_000,
        fallbackStatus: "unknown",
      },
      // freshness: {
      //   mode: "manual",
      //   status: "outdated",
      //   latestVersionTag: "custom-release-42",
      // },
    },
  },
];
