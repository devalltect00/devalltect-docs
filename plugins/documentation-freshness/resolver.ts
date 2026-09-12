/**
 * Resolve manual and automatic documentation freshness states.
 */

import type { Project } from "../../src/data/projects";
import type {
  AutoDocumentationFreshness,
  DocumentationFreshnessResult,
} from "../../src/data/documentationFreshness";

import { fetchRemoteTags } from "./remoteTags";
import { RemoteTagError } from "./remoteTags";
import {
  deriveDocumentationStatus,
  findLatestVersionTag,
  parseVersionTag,
} from "./versioning";

const DEFAULT_TIMEOUT_MS = 10_000;
const MIN_TIMEOUT_MS = 1_000;
const MAX_TIMEOUT_MS = 60_000;

/** Fetch function accepted for deterministic resolver tests. */
export type RemoteTagFetcher = (
  repositoryUrl: string,
  timeoutMs: number
) => Promise<string[]>;

/** Validate automatic project configuration before network access. */
function validateAutoConfiguration(
  project: Project,
  freshness: AutoDocumentationFreshness
): void {
  if (!freshness.repositoryUrl.trim()) {
    throw new Error(`Project "${project.id}" must configure freshness.repositoryUrl.`);
  }

  if (!(["semver", "pep440"] as const).includes(freshness.tagFormat)) {
    throw new Error(
      `Project "${project.id}" uses unsupported tag format "${String(freshness.tagFormat)}". Use semver, pep440, or manual mode.`
    );
  }

  const timeoutMs = freshness.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  if (timeoutMs < MIN_TIMEOUT_MS || timeoutMs > MAX_TIMEOUT_MS) {
    throw new Error(
      `Project "${project.id}" freshness.timeoutMs must be between ${MIN_TIMEOUT_MS} and ${MAX_TIMEOUT_MS}.`
    );
  }

  if (
    !project.documentation ||
    !parseVersionTag(project.documentation.version, freshness.tagFormat)
  ) {
    throw new Error(
      `Project "${project.id}" documentation version is not valid ${freshness.tagFormat}.`
    );
  }
}

/** Resolve a project's documentation freshness without mutating project data. */
export async function resolveProjectFreshness(
  project: Project,
  remoteTagFetcher: RemoteTagFetcher = fetchRemoteTags
): Promise<DocumentationFreshnessResult | undefined> {
  const documentation = project.documentation;
  if (!documentation) {
    return undefined;
  }

  const freshness = documentation.freshness;
  if (freshness.mode === "manual") {
    return {
      projectId: project.id,
      status: freshness.status,
      verification: "manual",
      documentationVersion: documentation.version,
      documentationVersionTag: documentation.versionTag,
      latestVersionTag: freshness.latestVersionTag,
    };
  }

  validateAutoConfiguration(project, freshness);
  const checkedAt = new Date().toISOString();
  const timeoutMs = freshness.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  try {
    const tags = await remoteTagFetcher(freshness.repositoryUrl, timeoutMs);
    const { latest, matchedTagCount } = findLatestVersionTag(
      tags,
      freshness.tagFormat,
      freshness.includePrereleases ?? false
    );

    if (!latest) {
      return {
        projectId: project.id,
        status: freshness.fallbackStatus ?? "unknown",
        verification: "fallback",
        documentationVersion: documentation.version,
        documentationVersionTag: documentation.versionTag,
        checkedAt,
        tagFormat: freshness.tagFormat,
        matchedTagCount: 0,
        errorCode: "no-compatible-tags",
      };
    }

    return {
      projectId: project.id,
      status: deriveDocumentationStatus(
        documentation.version,
        latest.normalizedVersion,
        freshness.tagFormat
      ),
      verification: "remote",
      documentationVersion: documentation.version,
      documentationVersionTag: documentation.versionTag,
      latestVersion: latest.normalizedVersion,
      latestVersionTag: latest.originalTag,
      checkedAt,
      tagFormat: freshness.tagFormat,
      matchedTagCount,
    };
  } catch (error) {
    const errorCode =
      error instanceof RemoteTagError ? error.code : "remote-query-failed";

    return {
      projectId: project.id,
      status: freshness.fallbackStatus ?? "unknown",
      verification: "fallback",
      documentationVersion: documentation.version,
      documentationVersionTag: documentation.versionTag,
      checkedAt,
      tagFormat: freshness.tagFormat,
      errorCode,
    };
  }
}
