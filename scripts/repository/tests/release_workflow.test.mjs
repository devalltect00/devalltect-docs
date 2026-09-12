import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const githubRelease = readFileSync(".github/workflows/release.yml", "utf8");
const gitlabRoot = readFileSync(".gitlab-ci.yml", "utf8");
const gitlabCi = readFileSync(".gitlab/ci.yml", "utf8");
const gitlabRelease = readFileSync(".gitlab/release.yml", "utf8");

test("GitHub release workflow publishes annotated tag messages", () => {
  assert.match(githubRelease, /tags:\s*\n\s*- "v\*"/u);
  assert.match(githubRelease, /git cat-file -t/u);
  assert.match(githubRelease, /git tag -l --format='%\(contents\)'/u);
  assert.match(githubRelease, /--notes-file RELEASE_NOTES\.md/u);
  assert.match(githubRelease, /contents: write/u);
});

test("GitHub appends provider-specific release information", () => {
  assert.match(githubRelease, /## 📅 Release Information/u);
  assert.match(githubRelease, /Portal Package Version/u);
  assert.match(githubRelease, /Node\.js Version/u);
  assert.match(githubRelease, /GITHUB_REPOSITORY/u);
  assert.match(githubRelease, /GITHUB_SERVER_URL/u);
  assert.match(githubRelease, /git rev-list -n 1/u);
});

test("GitHub release workflow has no package or image publication", () => {
  assert.doesNotMatch(githubRelease, /docker (?:build|push)|npm publish|twine/u);
  assert.doesNotMatch(githubRelease, /packages: write/u);
});

test("GitLab validates tags before creating releases", () => {
  assert.match(gitlabRoot, /- release/u);
  assert.match(gitlabRoot, /\.gitlab\/release\.yml/u);
  assert.match(gitlabCi, /CI_COMMIT_TAG/u);
  assert.match(gitlabRelease, /needs:\s*\n\s*- job: ci:validate/u);
  assert.match(gitlabRelease, /CI_COMMIT_REF_PROTECTED/u);
  assert.match(gitlabRelease, /git cat-file -t/u);
  assert.match(gitlabRelease, /description: "\.\/RELEASE_NOTES\.md"/u);
});

test("GitLab appends provider-specific release information", () => {
  assert.match(gitlabRelease, /## 📅 Release Information/u);
  assert.match(gitlabRelease, /Portal Package Version/u);
  assert.match(gitlabRelease, /Node\.js Version/u);
  assert.match(gitlabRelease, /CI_PROJECT_PATH/u);
  assert.match(gitlabRelease, /CI_PROJECT_URL\/-\/commit/u);
  assert.match(gitlabRelease, /RELEASE_TYPE: "stable"/u);
});

test("GitLab release workflow has no package or image publication", () => {
  assert.doesNotMatch(gitlabRelease, /docker (?:build|push)|npm publish|twine/u);
  assert.doesNotMatch(gitlabRelease, /package:publish|docker:prod/u);
});
