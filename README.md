# 📚 Devalltect Docs — Developer and DevOps Documentation Portal

[![GitHub Pages](https://github.com/devalltect00/devalltect-docs/actions/workflows/pages.yml/badge.svg)](https://github.com/devalltect00/devalltect-docs/actions/workflows/pages.yml)
[![CI](https://github.com/devalltect00/devalltect-docs/actions/workflows/ci.yml/badge.svg)](https://github.com/devalltect00/devalltect-docs/actions/workflows/ci.yml)
[![Docker Validation](https://github.com/devalltect00/devalltect-docs/actions/workflows/docker.yml/badge.svg)](https://github.com/devalltect00/devalltect-docs/actions/workflows/docker.yml)
[![Documentation](https://img.shields.io/badge/docs-online-success.svg)](https://devalltect00.github.io/devalltect-docs)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.10.1-3EA6FF?logo=docusaurus)](https://docusaurus.io/)
[![Yarn](https://img.shields.io/badge/Yarn-4.18.0-2C8EBB?logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-optional-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/github/license/devalltect00/devalltect-docs)](LICENSE)
[![Locales](https://img.shields.io/badge/locales-en%20%7C%20id-success.svg)](https://devalltect00.github.io/devalltect-docs)

A unified Docusaurus portal for Devalltect developer and DevOps tools. It provides shared navigation, reusable documentation components, English and Indonesian locale support, and a validated GitHub Pages deployment.

**Public documentation:** [devalltect00.github.io/devalltect-docs](https://devalltect00.github.io/devalltect-docs)

## ℹ️ Project Metadata

| Property              | Value                                      |
| --------------------- | ------------------------------------------ |
| Project               | Devalltect Docs                            |
| Release line          | `v1.0.0`                                   |
| Site generator        | Docusaurus 3.10.1                          |
| Runtime               | Node.js 20+                                |
| Package manager       | Yarn 4.18.0                                |
| Supported locales     | English (`en`) and Bahasa Indonesia (`id`) |
| Deployment targets    | GitHub Pages and GitLab Pages              |
| Container development | Docker and Docker Compose                  |
| License               | MIT                                        |
| Maintainer            | Devalltect / Rizky Fernandes               |

## 📚 Documented Projects

| Project                 | Scope                                                                   | Documentation                                                                        |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Path Header Scanner** | Path and source-header inspection                                       | [Open docs](https://devalltect00.github.io/devalltect-docs/docs/path-header-scanner) |
| **Doc Gen**             | Project structure and documentation generation                          | [Open docs](https://devalltect00.github.io/devalltect-docs/docs/doc-gen)             |
| **Reflow**              | Tag conversion, release recovery, and container publishing              | [Open docs](https://devalltect00.github.io/devalltect-docs/docs/reflow)              |
| **Custy**               | Git workflow, changelog, versioning, maintenance, and release pipelines | [Open docs](https://devalltect00.github.io/devalltect-docs/docs/custy)               |

## 📋 Requirements

- Node.js 20 or newer
- Corepack
- Yarn 4.18.0, selected by the `packageManager` field in `package.json`
- Docker with Compose support, only when using the optional container workflow

Do not use npm to modify dependencies or generate a second lockfile. The repository uses Yarn and `yarn.lock` as its package source of truth.

## 🚀 Local Development

Enable Corepack and install the locked dependency graph:

```bash
corepack enable
yarn install --immutable
```

Start the default English development server:

```bash
yarn start
```

Start the Indonesian locale:

```bash
yarn start --locale id
```

## ✅ Validation

Run the non-mutating release validation, including formatting, freshness tests,
TypeScript, and both locale builds:

```bash
yarn validate
```

Individual checks remain available:

```bash
yarn format:check
yarn test
yarn typecheck
yarn build
```

Preview the generated production site:

```bash
yarn serve
```

## 🐋 Docker and Compose

Docker provides a reproducible development and production-preview environment.
It is optional and does not replace the direct Yarn or Pages workflows.

Build all Compose images:

```bash
make c-build-all
```

Start the live development server at
`http://localhost:3000/devalltect-docs/`:

```bash
make c-run-dev
```

Start the Nginx production preview at
`http://localhost:8080/devalltect-docs/`:

```bash
make c-run-prod
```

Run the complete validation inside Compose:

```bash
make c-check
```

See the [Docker and Compose guide](docs/devalltect-docs/docker.mdx) for direct
Docker commands, image stages, volume behavior, and troubleshooting.

## 🌍 Internationalization

English (`en`) is the default locale and Bahasa Indonesia (`id`) is the secondary locale. Locale-specific interface messages live under `i18n/id/`, while translated documentation lives under:

```text
i18n/id/docusaurus-plugin-content-docs/current/
```

Generate or refresh extractable interface messages with:

```bash
yarn write-translations --locale id
```

Do not translate command names, options, configuration keys, paths, code identifiers, or literal output when translation would make the technical contract less clear.

## 🗂️ Repository Structure

```text
.
├── .github/workflows/       CI, container validation, and GitHub Pages
├── .gitlab/                 GitLab CI, container validation, and Pages
├── docker/                  Nginx production-preview configuration
├── make/                    Modular local, Docker, and Compose commands
├── docs/                    Default English documentation
├── i18n/                    Locale messages and translated content
├── scripts/                 Repository metadata and content helpers
├── src/                     React components, pages, data, and styles
├── static/                  Public images and assets
├── Dockerfile               Multi-stage development and preview image
├── docker-compose*.yml      Shared, development, and production services
├── docusaurus.config.ts     Site, deployment, navigation, and locale config
├── sidebars.ts              Autogenerated documentation sidebar
├── package.json             Yarn scripts and dependency metadata
└── yarn.lock                Locked dependency graph
```

See [docs/project_structure.md](docs/project_structure.md) for the broader project inventory.

Repository descriptions and provider-specific topics are sourced from
`package.json`. Preview metadata synchronization with
`yarn repository:metadata:dry-run`, then use `yarn repository:metadata:sync`
after verifying the selected GitHub and GitLab repositories. The live command
requires authenticated `gh` and `glab` sessions.

## ✍️ Documentation Standards

- Keep default English content under `docs/`.
- Use `_category_.json` and stable frontmatter for readable navigation.
- Document current public behavior and label internal or experimental behavior clearly.
- Reuse components exported by `src/components/docs` before adding new UI patterns.
- Keep examples executable and describe requirements, side effects, output, errors, and recovery where relevant.
- Keep English and Indonesian meaning aligned when both locale variants exist.
- Run `yarn validate` before publishing and validate Docker when container files change.

## 🌐 Deployment

GitHub Actions builds all locales and deploys the static output to GitHub Pages.

- Repository: [devalltect00/devalltect-docs](https://github.com/devalltect00/devalltect-docs)
- Workflow: [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
- Production URL: [https://devalltect00.github.io/devalltect-docs](https://devalltect00.github.io/devalltect-docs)

The deployment configuration uses `url: "https://devalltect00.github.io"` and `baseUrl: "/devalltect-docs/"`. Keep the repository name, workflow, and Docusaurus configuration synchronized if the public location changes.

Docker images are validated in CI but are not published. GitHub Pages and
GitLab Pages continue to deploy the generated static files directly.
Annotated Semantic Version tags are validated separately and use their complete
tag messages as the primary GitHub and GitLab Release notes. Each provider then
appends the version, portal package version, Node.js version, release type,
project, and tagged commit. Release automation does not publish a package,
container image, or additional Pages deployment.

## 🏷️ Badges

See [docs/badges.md](docs/badges.md) for the complete badge catalog and usage guidance.

## 🤝 Contributing

## 🤝 Contributing

Contributions are welcome for confirmed documentation bugs, typographical
errors, broken links, and incorrect or unclear wording. Please review the
[developer guide](docs/developers.mdx) and follow the
[maintainer workflow](docs/devalltect-docs/maintainer-workflow.mdx) before
submitting a correction.

## 🔐 Security

Report security concerns through the process described in
[SECURITY.md](SECURITY.md). Do not publish credentials, private registry tokens,
or sensitive deployment details in an issue, example, or documentation page.

## 📃 Release Notes

Published release notes and version history are available from
[GitHub Releases](https://github.com/devalltect00/devalltect-docs/releases).
Create an annotated tag from the reviewed release-message template, then push
the same tag to GitHub and GitLab:

```bash
git tag -a v1.0.0 -F .config/custy/templates/tag-message_release-version.txt
git push <github-remote> v1.0.0
git push <gitlab-remote> v1.0.0
```

GitLab release tags must be protected. Alpha, beta, and release-candidate tags
are published as prereleases; a stable tag is published as the latest release.

---

## 📃 Changelog

See [`CHANGELOG.md`](CHANGELOG.md)

---

## 📜 License

This repository is available under the [MIT License](LICENSE).

📧 Contact: `devalltect00@gmail.com`

---

_Crafted with ❤️ by Devalltect / Rizky Fernandes_
