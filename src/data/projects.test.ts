import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { PROJECTS, sortProjectsByStartDate } from "./projects";

describe("project discovery metadata", () => {
  it("keeps normalized start dates for every documented project", () => {
    assert.equal(PROJECTS.length, 8);

    for (const project of PROJECTS) {
      assert.match(project.startedAt, /^\d{4}-\d{2}(?:-\d{2})?$/);
    }
  });

  it("includes the portal itself at its v1.2.0 release baseline", () => {
    const portal = PROJECTS.find((project) => project.id === "devalltect-docs");

    assert.ok(portal);
    assert.equal(portal.startedAt, "2026-08");
    assert.equal(portal.documentation?.versionTag, "v1.2.0");
    assert.equal(portal.docsPath, "/docs/devalltect-docs");
  });

  it("tracks the published portfolio and Doc Gen release baselines", () => {
    const portfolio = PROJECTS.find((project) => project.id === "devalltect-portfolio");
    const docGen = PROJECTS.find((project) => project.id === "doc-gen");

    assert.equal(portfolio?.documentation?.versionTag, "v2.1.0");
    assert.equal(docGen?.documentation?.versionTag, "v1.1.0");
  });

  it("uses categories that describe each visitor-facing experience", () => {
    const categories = new Map(
      PROJECTS.map((project) => [project.id, project.category])
    );

    assert.equal(categories.get("devalltect-homepage"), "Website");
    assert.equal(categories.get("foksiku"), "Telegram Bot");
    assert.equal(categories.get("devalltect-portfolio"), "Web Application");
    assert.equal(categories.get("devalltect-docs"), "Documentation Platform");

    for (const id of ["path-header-scanner", "doc-gen", "reflow", "custy"]) {
      assert.equal(categories.get(id), "CLI Tool");
    }
  });

  it("sorts newest-first by default without mutating source metadata", () => {
    const sourceOrder = PROJECTS.map((project) => project.id);
    const sorted = sortProjectsByStartDate(PROJECTS);

    assert.deepEqual(
      sorted.map((project) => project.id),
      [
        "devalltect-homepage",
        "devalltect-portfolio",
        "foksiku",
        "devalltect-docs",
        "path-header-scanner",
        "reflow",
        "doc-gen",
        "custy",
      ]
    );
    assert.deepEqual(
      PROJECTS.map((project) => project.id),
      sourceOrder
    );
  });

  it("supports an oldest-first view for future discovery surfaces", () => {
    const sorted = sortProjectsByStartDate(PROJECTS, "oldest");

    assert.equal(sorted[0]?.id, "custy");
    assert.equal(sorted.at(-1)?.id, "devalltect-homepage");
  });
});
