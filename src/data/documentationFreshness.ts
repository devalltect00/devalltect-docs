/**
 * Shared configuration and result types for documentation freshness checks.
 */

/** Docusaurus plugin name used to publish freshness data. */
export const DOCUMENTATION_FRESHNESS_PLUGIN_NAME = "documentation-freshness";

/** Version formats supported by automatic remote-tag detection. */
export type DocumentationTagFormat = "semver" | "pep440";

/** User-facing relationship between documentation and a project release. */
export type DocumentationStatus = "current" | "outdated" | "preview" | "unknown";

/** Manual freshness configuration for projects with unsupported tag schemes. */
export interface ManualDocumentationFreshness {
  /** Disable remote detection and use an explicitly maintained status. */
  mode: "manual";

  /** Maintainer-selected documentation status. */
  status: Exclude<DocumentationStatus, "unknown">;

  /** Optional latest known tag, useful when status is outdated or preview. */
  latestVersionTag?: string;
}

/** Automatic freshness configuration based on remote Git tags. */
export interface AutoDocumentationFreshness {
  /** Retrieve and compare remote tags during Docusaurus startup and builds. */
  mode: "auto";

  /** Git remote queried with `git ls-remote --tags --refs`. */
  repositoryUrl: string;

  /** Supported version grammar used to validate and compare tags. */
  tagFormat: DocumentationTagFormat;

  /** Page listing releases for readers who need another version. */
  releasesUrl?: string;

  /** Include alpha, beta, release-candidate, and development tags. */
  includePrereleases?: boolean;

  /** Remote query timeout in milliseconds. */
  timeoutMs?: number;

  /** Status used when the remote cannot be checked; defaults to unknown. */
  fallbackStatus?: "current" | "unknown";
}

/** Per-project documentation freshness strategy. */
export type DocumentationFreshnessConfig =
  | ManualDocumentationFreshness
  | AutoDocumentationFreshness;

/** How a freshness result was established. */
export type DocumentationVerification = "manual" | "remote" | "fallback";

/** Serializable result produced by the build-time freshness plugin. */
export interface DocumentationFreshnessResult {
  /** Project identifier matching the documentation root. */
  projectId: string;

  /** Resolved documentation status. */
  status: DocumentationStatus;

  /** Source used to resolve the status. */
  verification: DocumentationVerification;

  /** Version represented by the documentation. */
  documentationVersion: string;

  /** Tag represented by the documentation. */
  documentationVersionTag: string;

  /** Latest normalized compatible version, when available. */
  latestVersion?: string;

  /** Original latest compatible remote tag, when available. */
  latestVersionTag?: string;

  /** ISO timestamp for the latest remote verification attempt. */
  checkedAt?: string;

  /** Configured automatic version grammar. */
  tagFormat?: DocumentationTagFormat;

  /** Number of compatible, channel-eligible tags considered. */
  matchedTagCount?: number;

  /** Stable diagnostic identifier for a failed automatic check. */
  errorCode?: string;
}

/** Global data published by the Docusaurus freshness plugin. */
export interface DocumentationFreshnessPluginData {
  projects: Record<string, DocumentationFreshnessResult>;
}
