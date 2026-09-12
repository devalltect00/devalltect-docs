/**
 * Parse, filter, and compare supported project version tags.
 */

import * as pep440 from "@renovatebot/pep440";
import * as semver from "semver";

import type {
  DocumentationStatus,
  DocumentationTagFormat,
} from "../../src/data/documentationFreshness";

/** A validated tag and its normalized version. */
export interface ParsedVersionTag {
  originalTag: string;
  normalizedVersion: string;
  prerelease: boolean;
}

/** Parse a tag according to its configured version grammar. */
export function parseVersionTag(
  tag: string,
  tagFormat: DocumentationTagFormat
): ParsedVersionTag | undefined {
  if (tagFormat === "semver") {
    const normalizedVersion = semver.valid(tag) ?? undefined;
    if (!normalizedVersion) {
      return undefined;
    }

    return {
      originalTag: tag,
      normalizedVersion,
      prerelease: semver.prerelease(normalizedVersion) !== null,
    };
  }

  const explained = pep440.explain(tag);
  if (!explained) {
    return undefined;
  }

  return {
    originalTag: tag,
    normalizedVersion: explained.public,
    prerelease: explained.is_prerelease || explained.is_devrelease,
  };
}

/** Compare two normalized versions with the configured grammar. */
export function compareVersions(
  left: string,
  right: string,
  tagFormat: DocumentationTagFormat
): number {
  return tagFormat === "semver"
    ? semver.compare(left, right)
    : pep440.compare(left, right);
}

/** Find the latest valid tag for the configured release channel. */
export function findLatestVersionTag(
  tags: Iterable<string>,
  tagFormat: DocumentationTagFormat,
  includePrereleases: boolean
): { latest?: ParsedVersionTag; matchedTagCount: number } {
  const parsedTags = Array.from(tags)
    .map((tag) => parseVersionTag(tag, tagFormat))
    .filter((tag): tag is ParsedVersionTag => tag !== undefined)
    .filter((tag) => includePrereleases || !tag.prerelease);

  parsedTags.sort((left, right) =>
    compareVersions(right.normalizedVersion, left.normalizedVersion, tagFormat)
  );

  return {
    latest: parsedTags[0],
    matchedTagCount: parsedTags.length,
  };
}

/** Compare the documented version to the latest compatible remote version. */
export function deriveDocumentationStatus(
  documentationVersion: string,
  latestVersion: string,
  tagFormat: DocumentationTagFormat
): DocumentationStatus {
  const parsedDocumentation = parseVersionTag(documentationVersion, tagFormat);
  if (!parsedDocumentation) {
    throw new Error(
      `Documentation version "${documentationVersion}" is not valid ${tagFormat}.`
    );
  }

  const comparison = compareVersions(
    parsedDocumentation.normalizedVersion,
    latestVersion,
    tagFormat
  );

  if (comparison === 0) {
    return "current";
  }

  return comparison < 0 ? "outdated" : "preview";
}
