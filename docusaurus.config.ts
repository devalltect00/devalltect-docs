import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

import documentationFreshnessPlugin from "./plugins/documentation-freshness";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const deploymentUrl = new URL(
  process.env.DOCUSAURUS_SITE_URL ||
    process.env.CI_PAGES_URL ||
    "https://devalltect00.github.io/devalltect-docs/"
);
const deploymentBaseUrl = deploymentUrl.pathname.endsWith("/")
  ? deploymentUrl.pathname
  : `${deploymentUrl.pathname}/`;

const config: Config = {
  // title: "DevAlltect00 Docs",
  title: "Devalltect Docs",
  tagline: "Unified documentation portal for developer and DevOps tools",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub Pages uses the default below. GitLab Pages supplies CI_PAGES_URL,
  // including its project path or unique-domain root, during the Pages job.
  // DOCUSAURUS_SITE_URL can override either target for another deployment.
  url: deploymentUrl.origin,
  baseUrl: deploymentBaseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "devalltect00",
  // projectName: "devalltect00-docs",
  projectName: "devalltect-docs",

  trailingSlash: false, // remove `/` postfix on url. So it becomes `./devalltect-docs` instead of `./devalltect-docs/`

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
      id: {
        label: "Bahasa Indonesia",
        htmlLang: "id-ID",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "docs",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/devalltect00/devalltect00-docs/tree/main/devalltect00-docs/",
          // "https://github.com/devalltect00/devalltect00-docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [documentationFreshnessPlugin],

  themeConfig: {
    image: "img/logo-devalltect00-on-light.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      // title: "DevAlltect00 Docs",
      title: "Devalltect",
      logo: {
        alt: "DevAlltect00 Logo",
        src: "img/logo-devalltect00-on-light.png",
        srcDark: "img/logo-devalltect00-on-dark.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "/docs/projects-overview",
          label: "Projects Overview",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/devalltect00",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro",
            },
            {
              label: "Projects Overview",
              to: "/docs/projects-overview",
            },
          ],
        },
        {
          title: "Profiles",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/devalltect00",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/rizky-purwanto-fernandes/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/rizkypfernandes/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "CodePen",
              href: "https://codepen.io/devaltect",
            },
            {
              label: "Kaggle",
              href: "https://www.kaggle.com/rizkyfernandes",
            },
            {
              label: "Portfolio",
              href: "https://personal-portfolio-devalltect00.vercel.app/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevAlltect00. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
