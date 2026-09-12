/**
 * Tests for SemVer and PEP 440 tag selection and comparison.
 */

import assert from "node:assert/strict";
import test from "node:test";

import {
  deriveDocumentationStatus,
  findLatestVersionTag,
  parseVersionTag,
} from "./versioning";

test("normalizes conventional v prefixes", () => {
  assert.equal(parseVersionTag("v2.0.0", "semver")?.normalizedVersion, "2.0.0");
  assert.equal(parseVersionTag("v1.10.14", "pep440")?.normalizedVersion, "1.10.14");
});

test("selects the latest stable SemVer tag by version precedence", () => {
  const result = findLatestVersionTag(
    ["v2.0.0", "v2.1.0-rc.1", "v1.10.14", "not-a-version"],
    "semver",
    false,
  );

  assert.equal(result.latest?.originalTag, "v2.0.0");
  assert.equal(result.matchedTagCount, 2);
});

test("can include SemVer prereleases when explicitly enabled", () => {
  const result = findLatestVersionTag(
    ["v2.0.0", "v2.1.0-rc.1"],
    "semver",
    true,
  );

  assert.equal(result.latest?.originalTag, "v2.1.0-rc.1");
});

test("sorts PEP 440 versions numerically and excludes prereleases", () => {
  const result = findLatestVersionTag(
    ["1.10.9", "1.10.14", "1.11.0b1", "1.10.14.post1"],
    "pep440",
    false,
  );

  assert.equal(result.latest?.originalTag, "1.10.14.post1");
  assert.equal(result.matchedTagCount, 3);
});

test("derives current, outdated, and preview states", () => {
  assert.equal(deriveDocumentationStatus("2.0.0", "2.0.0", "semver"), "current");
  assert.equal(deriveDocumentationStatus("2.0.0", "2.1.0", "semver"), "outdated");
  assert.equal(deriveDocumentationStatus("2.0.0", "1.10.14", "pep440"), "preview");
});

test("rejects a documented version that does not match the configured format", () => {
  assert.throws(
    () => deriveDocumentationStatus("release-two", "2.0.0", "semver"),
    /not valid semver/u,
  );
});
