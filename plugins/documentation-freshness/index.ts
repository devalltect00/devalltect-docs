/**
 * Docusaurus plugin that checks project documentation against remote tags.
 */

import type { Plugin } from "@docusaurus/types";

import { PROJECTS } from "../../src/data/projects";
import {
  DOCUMENTATION_FRESHNESS_PLUGIN_NAME,
  type DocumentationFreshnessPluginData,
  type DocumentationFreshnessResult,
} from "../../src/data/documentationFreshness";

import { resolveProjectFreshness } from "./resolver";

/** Publish one serializable freshness result for every configured project. */
export default function documentationFreshnessPlugin(): Plugin {
  return {
    name: DOCUMENTATION_FRESHNESS_PLUGIN_NAME,

    async loadContent() {
      const entries = await Promise.all(
        PROJECTS.map(async (project) => {
          const result = await resolveProjectFreshness(project);
          return result ? ([project.id, result] as const) : undefined;
        })
      );

      const projects: Record<string, DocumentationFreshnessResult> = {};
      for (const entry of entries) {
        if (!entry) {
          continue;
        }

        const [projectId, result] = entry;
        projects[projectId] = result;

        if (result.verification === "fallback") {
          console.warn(
            `[documentation-freshness] ${projectId}: ${result.errorCode ?? "remote verification failed"}; using ${result.status} fallback status.`
          );
        }
      }

      return { projects };
    },

    contentLoaded({ content, actions }) {
      actions.setGlobalData(content as DocumentationFreshnessPluginData);
    },
  };
}
