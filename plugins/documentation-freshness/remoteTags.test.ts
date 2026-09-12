/**
 * Tests for parsing remote Git tag references.
 */

import assert from "node:assert/strict";
import test from "node:test";

import { parseRemoteTagOutput } from "./remoteTags";

test("extracts and de-duplicates lightweight and annotated tag references", () => {
  const output = [
    "aaaaaaaa refs/tags/1.10.14",
    "bbbbbbbb refs/tags/1.10.14^{}",
    "cccccccc refs/tags/1.10.0rc1",
    "dddddddd refs/heads/main",
    "",
  ].join("\n");

  assert.deepEqual(parseRemoteTagOutput(output), ["1.10.14", "1.10.0rc1"]);
});

test("ignores malformed lines and empty tag names", () => {
  assert.deepEqual(
    parseRemoteTagOutput("malformed\naaaa refs/tags/\nbbbb refs/heads/main"),
    []
  );
});
