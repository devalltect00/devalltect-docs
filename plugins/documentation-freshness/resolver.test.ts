/**
 * Tests for manual, automatic, and fallback freshness resolution.
 */

import assert from "node:assert/strict";
import test from "node:test";

import type { Project } from "../../src/data/projects";

import { resolveProjectFreshness } from "./resolver";

/** Build a focused project fixture for resolver tests. */
function createProject(
  freshness: NonNullable<Project["documentation"]>["freshness"]
): Project {
  return {
    id: "example",
    name: "Example",
    category: "CLI Tool",
    description: "Example project.",
    technologies: ["TypeScript"],
    docsPath: "/docs/example",
    available: true,
    documentation: {
      version: "2.0.0",
      versionTag: "v2.0.0",
      lastReviewed: "2026-08-22",
      releaseUrl: "https://example.com/releases/v2.0.0",
      statusPath: "/docs/example/reference/documentation-status",
      freshness,
    },
  };
}

test("returns manual status without querying a remote", async () => {
  let queried = false;
  const result = await resolveProjectFreshness(
    createProject({ mode: "manual", status: "current" }),
    async () => {
      queried = true;
      return [];
    }
  );

  assert.equal(queried, false);
  assert.equal(result?.status, "current");
  assert.equal(result?.verification, "manual");
});

test("marks documentation as outdated when a newer remote tag exists", async () => {
  const result = await resolveProjectFreshness(
    createProject({
      mode: "auto",
      repositoryUrl: "https://example.com/project.git",
      tagFormat: "semver",
    }),
    async () => ["v1.9.0", "v2.1.0"]
  );

  assert.equal(result?.status, "outdated");
  assert.equal(result?.latestVersionTag, "v2.1.0");
  assert.equal(result?.verification, "remote");
});

test("uses unknown fallback when no compatible tags exist", async () => {
  const result = await resolveProjectFreshness(
    createProject({
      mode: "auto",
      repositoryUrl: "https://example.com/project.git",
      tagFormat: "semver",
    }),
    async () => ["custom-release"]
  );

  assert.equal(result?.status, "unknown");
  assert.equal(result?.verification, "fallback");
  assert.equal(result?.errorCode, "no-compatible-tags");
});

test("continues with configured fallback after a transient query failure", async () => {
  const result = await resolveProjectFreshness(
    createProject({
      mode: "auto",
      repositoryUrl: "https://example.com/project.git",
      tagFormat: "semver",
      fallbackStatus: "current",
    }),
    async () => {
      throw new Error("network unavailable");
    }
  );

  assert.equal(result?.status, "current");
  assert.equal(result?.verification, "fallback");
  assert.equal(result?.errorCode, "remote-query-failed");
});

test("rejects invalid automatic timeout configuration", async () => {
  await assert.rejects(
    resolveProjectFreshness(
      createProject({
        mode: "auto",
        repositoryUrl: "https://example.com/project.git",
        tagFormat: "semver",
        timeoutMs: 50,
      }),
      async () => []
    ),
    /timeoutMs must be between/u
  );
});
