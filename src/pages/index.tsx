import React from "react";

import Layout from "@theme/Layout";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import About from "@site/src/components/homepage/About";
import Audiences from "@site/src/components/homepage/Audiences";
import DocumentationModel from "@site/src/components/homepage/DocumentationModel";
import DocumentationOverview from "@site/src/components/homepage/DocumentationOverview";
import Hero from "@site/src/components/homepage/Hero";
import ProjectGrid from "@site/src/components/homepage/ProjectGrid";
import QuickLinks from "@site/src/components/homepage/QuickLinks";

/**
 * ============================================================
 * Homepage
 * ============================================================
 *
 * Devalltect documentation portal landing page.
 *
 * Responsibilities:
 *
 * - Assemble homepage sections
 * - Provide page metadata
 *
 * Individual section logic belongs to
 * dedicated homepage components.
 * ============================================================
 */
export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title="Devalltect Docs"
      title={siteConfig.title}
      description="Centralized Documentation Hub for Devalltect Projects"
    >
      <main>
        <Hero />

        <ProjectGrid />

        <DocumentationOverview />

        <DocumentationModel />

        <Audiences />

        <QuickLinks />

        <About />
      </main>
    </Layout>
  );
}
