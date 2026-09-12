import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import test from "node:test";

const docGenConfigPath = ".config/doc_gen/config.toml";
const dockerIgnore = readFileSync(".dockerignore", "utf8");
const prettierIgnore = readFileSync(".prettierignore", "utf8");
const readme = readFileSync("README.md", "utf8");
const docsEntries = readdirSync("docs");

test("tracked documentation uses the canonical lowercase structure path", () => {
  assert.ok(docsEntries.includes("project_structure.md"));
  assert.ok(!docsEntries.includes("PROJECT_STRUCTURE.md"));
  assert.match(readme, /\]\(docs\/project_structure\.md\)/u);
});

test(
  "Doc Gen configuration uses the canonical lowercase project-structure path",
  { skip: !existsSync(docGenConfigPath) },
  () => {
    const docGenConfig = readFileSync(docGenConfigPath, "utf8");
    assert.match(docGenConfig, /^output_file = "docs\/project_structure\.md"$/mu);
  }
);

test("Prettier leaves the Doc Gen artifact under generator ownership", () => {
  assert.match(prettierIgnore, /^docs\/project_structure\.md$/mu);
});

test("Docker keeps maintenance configuration outside the build context", () => {
  assert.match(dockerIgnore, /^\.config\/$/mu);
});
