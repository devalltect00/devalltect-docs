import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

import styles from "./DocumentationVersionNotice.module.css";

import type { DocumentationVersionNoticeProps } from "./types";

/**
 * Display the application release represented by the current documentation.
 */
export default function DocumentationVersionNotice({
  projectName,
  documentation,
  freshness,
}: DocumentationVersionNoticeProps) {
  const { i18n } = useDocusaurusContext();
  const statusUrl = useBaseUrl(documentation.statusPath);
  const reviewedDate = new Intl.DateTimeFormat(i18n.currentLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${documentation.lastReviewed}T00:00:00Z`));
  const latestVersion =
    freshness.latestVersionTag ?? freshness.latestVersion ?? "unknown";
  const releasesUrl =
    documentation.freshness.mode === "auto"
      ? documentation.freshness.releasesUrl
      : undefined;

  if (freshness.status === "current") {
    return null;
  }

  const title = {
    outdated: translate({
      id: "docs.versionNotice.outdatedTitle",
      message: "Documentation may be outdated",
      description: "Title shown when a newer project release is available.",
    }),
    preview: translate({
      id: "docs.versionNotice.previewTitle",
      message: "Documentation preview",
      description: "Title shown when documentation is ahead of published releases.",
    }),
    unknown: translate({
      id: "docs.versionNotice.unknownTitle",
      message: "Freshness not verified",
      description: "Title shown when remote documentation freshness cannot be checked.",
    }),
  }[freshness.status];

  return (
    <aside
      className={clsx(styles.notice, styles[freshness.status])}
      aria-label={translate({
        id: "docs.versionNotice.ariaLabel",
        message: "Documentation version",
        description: "Accessible label for the documentation-version notice.",
      })}
    >
      <p className={styles.statusTitle}>{title}</p>

      <div className={styles.summary}>
        <p className={styles.baseline}>
          <Translate
            id="docs.versionNotice.baseline"
            description="Label for the application release represented by a documentation set."
          >
            Documentation baseline
          </Translate>
          {": "}
          <a href={documentation.releaseUrl}>
            {projectName} {documentation.versionTag}
          </a>
        </p>

        <p className={styles.reviewed}>
          <Translate
            id="docs.versionNotice.lastReviewed"
            description="Label for the date when documentation was reviewed against source."
          >
            Last reviewed
          </Translate>
          {": "}
          <time dateTime={documentation.lastReviewed}>{reviewedDate}</time>
        </p>

        {freshness.latestVersionTag || freshness.latestVersion ? (
          <p className={styles.latest}>
            <Translate
              id="docs.versionNotice.latestRelease"
              description="Label for the latest compatible release detected from remote tags."
            >
              Latest detected release
            </Translate>
            {": "}
            {releasesUrl ? <a href={releasesUrl}>{latestVersion}</a> : latestVersion}
          </p>
        ) : null}
      </div>

      <p className={styles.guidance}>
        {freshness.status === "outdated" ? (
          <Translate
            id="docs.versionNotice.outdatedGuidance"
            description="Guidance shown when documentation is behind the latest release."
            values={{
              projectName,
              documentationVersion: documentation.versionTag,
              latestVersion,
            }}
          >
            {
              "These pages describe {projectName} {documentationVersion}, but {latestVersion} is available. Check newer release notes before following version-sensitive instructions."
            }
          </Translate>
        ) : null}
        {freshness.status === "preview" ? (
          <Translate
            id="docs.versionNotice.previewGuidance"
            description="Guidance shown when documentation is ahead of published releases."
            values={{
              projectName,
              documentationVersion: documentation.versionTag,
              latestVersion,
            }}
          >
            {
              "These pages describe {projectName} {documentationVersion}, which is newer than the latest detected release {latestVersion}. Treat this documentation as a preview until that tag is published."
            }
          </Translate>
        ) : null}
        {freshness.status === "unknown" ? (
          <Translate
            id="docs.versionNotice.unknownGuidance"
            description="Guidance shown when a remote freshness check was unsuccessful."
            values={{
              projectName,
              documentationVersion: documentation.versionTag,
            }}
          >
            {
              "The build could not verify the latest {projectName} tag. These pages still describe {documentationVersion}; check the release list before relying on version-sensitive behavior."
            }
          </Translate>
        ) : null}{" "}
        <Link to={statusUrl}>
          <Translate
            id="docs.versionNotice.statusLink"
            description="Link label leading to the documentation status page."
          >
            View documentation status
          </Translate>
        </Link>
        .
      </p>
    </aside>
  );
}
