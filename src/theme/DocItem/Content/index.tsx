import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { usePluginData } from "@docusaurus/useGlobalData";
import OriginalDocItemContent from "@theme-original/DocItem/Content";

import DocumentationVersionNotice from "@site/src/components/docs/common/DocumentationVersionNotice";
import { PROJECTS } from "@site/src/data/projects";
import {
  DOCUMENTATION_FRESHNESS_PLUGIN_NAME,
  type DocumentationFreshnessPluginData,
} from "@site/src/data/documentationFreshness";

import type { Props } from "@theme/DocItem/Content";

/**
 * Add project release context to documentation content when metadata exists.
 */
export default function DocItemContent({ children }: Props) {
  const { metadata } = useDoc();
  const freshnessData = usePluginData(
    DOCUMENTATION_FRESHNESS_PLUGIN_NAME,
  ) as DocumentationFreshnessPluginData;
  const project = PROJECTS.find(
    ({ id }) => metadata.id === id || metadata.id.startsWith(`${id}/`),
  );
  const freshness = project
    ? freshnessData.projects[project.id]
    : undefined;

  return (
    <>
      {project?.documentation &&
      freshness &&
      freshness.status !== "current" ? (
        <DocumentationVersionNotice
          projectName={project.name}
          documentation={project.documentation}
          freshness={freshness}
        />
      ) : null}
      <OriginalDocItemContent>{children}</OriginalDocItemContent>
    </>
  );
}
