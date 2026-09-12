import type { ProjectDocumentation } from "@site/src/data/projects";
import type { DocumentationFreshnessResult } from "@site/src/data/documentationFreshness";

/**
 * Properties for a project documentation-version notice.
 */
export interface DocumentationVersionNoticeProps {
  /**
   * Human-readable project name.
   */
  projectName: string;

  /**
   * Release metadata represented by the documentation.
   */
  documentation: ProjectDocumentation;

  /**
   * Build-time comparison between the documentation and repository tags.
   */
  freshness: DocumentationFreshnessResult;
}
