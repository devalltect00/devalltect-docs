/**
 * Retrieve Git tag references without cloning a repository.
 */

import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

/** Stable failure categories for automatic remote-tag checks. */
export type RemoteTagErrorCode =
  | "git-unavailable"
  | "remote-timeout"
  | "remote-query-failed";

/** Error raised when a remote tag query cannot complete. */
export class RemoteTagError extends Error {
  readonly code: RemoteTagErrorCode;

  constructor(code: RemoteTagErrorCode, message: string, cause?: unknown) {
    super(message, { cause });
    this.name = "RemoteTagError";
    this.code = code;
  }
}

/** Convert `git ls-remote` output into unique tag names. */
export function parseRemoteTagOutput(output: string): string[] {
  const tags = new Set<string>();

  for (const line of output.split(/\r?\n/u)) {
    const [, reference] = line.trim().split(/\s+/u);
    if (!reference?.startsWith("refs/tags/")) {
      continue;
    }

    const tag = reference.slice("refs/tags/".length).replace(/\^\{\}$/u, "");
    if (tag) {
      tags.add(tag);
    }
  }

  return [...tags];
}

/** Query all direct tag references from a remote Git repository. */
export async function fetchRemoteTags(
  repositoryUrl: string,
  timeoutMs: number
): Promise<string[]> {
  try {
    const { stdout } = await execFileAsync(
      "git",
      ["ls-remote", "--tags", "--refs", repositoryUrl],
      {
        encoding: "utf8",
        maxBuffer: 10 * 1024 * 1024,
        timeout: timeoutMs,
        windowsHide: true,
      }
    );
    return parseRemoteTagOutput(stdout);
  } catch (error) {
    const processError = error as NodeJS.ErrnoException & { killed?: boolean };
    if (processError.code === "ENOENT") {
      throw new RemoteTagError(
        "git-unavailable",
        "Git is not installed or is not available on PATH.",
        error
      );
    }

    if (processError.killed || processError.code === "ETIMEDOUT") {
      throw new RemoteTagError(
        "remote-timeout",
        `Remote tag query exceeded ${timeoutMs} ms.`,
        error
      );
    }

    throw new RemoteTagError(
      "remote-query-failed",
      `Unable to retrieve tags from ${repositoryUrl}.`,
      error
    );
  }
}
