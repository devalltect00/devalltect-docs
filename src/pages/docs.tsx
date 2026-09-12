import React from "react";

import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

/**
 * Redirect the bare documentation route to the localized site homepage.
 *
 * Docusaurus resolves the homepage URL against the active base URL and locale,
 * so the redirect works in local development and in the GitHub Pages build.
 */
export default function DocsRedirect(): React.JSX.Element {
  const homepageUrl = useBaseUrl("/");

  return <Redirect to={homepageUrl} />;
}
