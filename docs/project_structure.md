# Project Structure

# Repository Overview

This repository follows a modular structure commonly used in modern projects.

Common directories include:

- `app/` — Main application source code.
- `.config/` — Project configuration files.
- `.github/` — GitHub-related configuration.
- `.vscode/` — Visual Studio Code workspace settings.
- `docs/` — Project documentation and technical references.
- `tests/` — Automated tests.
- `data/` — Input datasets or static data.
- `output/` — Generated outputs from the application.
- `scripts/` — Utility scripts for development or automation.
- `tools/` — Development tools and automation utilities.
- `templates/` — Reusable templates used by the project.

---

# Repository Structure

(project type: ProjectType.NODEJS)

```text
.
├── .agents
│   └── skills
│       └── follow-devalltect-docs-guidelines
│           ├── agents
│           │   └── openai.yaml
│           └── SKILL.md
├── .config
│   ├── custy
│   │   ├── templates
│   │   │   ├── backups/ ... (collapsed)
│   │   │   ├── changelog
│   │   │   │   └── changelog.j2
│   │   │   ├── examples
│   │   │   │   ├── commit_message
│   │   │   │   └── tag_message
│   │   │   ├── commit-message.txt
│   │   │   └── tag-message.txt
│   │   └── config.toml
│   ├── doc_gen
│   │   └── config.toml
│   ├── path_header_scanner
│   │   └── config.toml
│   └── reflow
│       └── config.toml
├── .docusaurus/ ... (collapsed)
├── .gitlab
│   ├── ci.yml
│   ├── docker.yml
│   ├── pages.yml
│   └── release.yml
├── .pnpm-store/ ... (collapsed)
├── .yarn/ ... (collapsed)
├── blog/ ... (collapsed)
├── build/ ... (collapsed)
├── docker
│   └── nginx.conf
├── docs
│   ├── custy
│   │   ├── architecture
│   │   │   ├── _category_.json
│   │   │   ├── changelog-system.mdx
│   │   │   ├── cli-layer.mdx
│   │   │   ├── configuration-system.mdx
│   │   │   ├── core-layer.mdx
│   │   │   ├── git-operations.mdx
│   │   │   ├── overview.mdx
│   │   │   ├── pipeline-engine.mdx
│   │   │   ├── strategy-pattern.mdx
│   │   │   └── workflow-engine.mdx
│   │   ├── commands
│   │   │   ├── backup
│   │   │   │   ├── _category_.json
│   │   │   │   ├── backup-files.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── changelog
│   │   │   │   ├── generate
│   │   │   │   ├── _category_.json
│   │   │   │   └── overview.mdx
│   │   │   ├── cleanup
│   │   │   │   ├── backup
│   │   │   │   ├── branch
│   │   │   │   ├── _category_.json
│   │   │   │   └── overview.mdx
│   │   │   ├── commit
│   │   │   │   ├── _category_.json
│   │   │   │   ├── configuration.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── configure
│   │   │   │   ├── credentials
│   │   │   │   ├── _category_.json
│   │   │   │   └── overview.mdx
│   │   │   ├── init
│   │   │   │   ├── _category_.json
│   │   │   │   ├── configuration.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── generated-files.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── push
│   │   │   │   ├── _category_.json
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── remotes.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── run
│   │   │   │   ├── dev
│   │   │   │   ├── full
│   │   │   │   ├── release
│   │   │   │   ├── _category_.json
│   │   │   │   ├── custom-sequences.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── profiles.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── safety.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   └── troubleshooting.mdx
│   │   │   ├── tag
│   │   │   │   ├── _category_.json
│   │   │   │   ├── configuration.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   ├── versioning-and-tags.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── validate
│   │   │   │   ├── _category_.json
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   ├── validation-checks.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── version
│   │   │   │   ├── _category_.json
│   │   │   │   ├── configuration.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   ├── versioning-strategies.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── workflow
│   │   │   │   ├── branch
│   │   │   │   ├── _category_.json
│   │   │   │   └── overview.mdx
│   │   │   ├── _category_.json
│   │   │   └── overview.mdx
│   │   ├── concepts
│   │   │   ├── _category_.json
│   │   │   ├── commands-pipelines-and-workflows.mdx
│   │   │   ├── configuration-resolution.mdx
│   │   │   ├── dry-run.mdx
│   │   │   ├── release-lifecycle.mdx
│   │   │   ├── safety-and-side-effects.mdx
│   │   │   └── versioning.mdx
│   │   ├── configuration
│   │   │   ├── changelog
│   │   │   │   ├── _category_.json
│   │   │   │   ├── advanced.mdx
│   │   │   │   ├── breaking-changes.mdx
│   │   │   │   ├── cleaning.mdx
│   │   │   │   ├── core.mdx
│   │   │   │   ├── links.mdx
│   │   │   │   ├── mappings.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── pending-commit.mdx
│   │   │   │   ├── releases.mdx
│   │   │   │   └── rendering.mdx
│   │   │   ├── cli
│   │   │   │   ├── cleanup
│   │   │   │   ├── templates
│   │   │   │   ├── _category_.json
│   │   │   │   ├── changelog.mdx
│   │   │   │   ├── execution.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── paths.mdx
│   │   │   │   ├── push.mdx
│   │   │   │   ├── versioning.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── git
│   │   │   │   ├── _category_.json
│   │   │   │   ├── credentials.mdx
│   │   │   │   ├── hooks.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── push-strategy.mdx
│   │   │   │   └── remotes.mdx
│   │   │   ├── logging
│   │   │   │   ├── _category_.json
│   │   │   │   ├── console.mdx
│   │   │   │   ├── file.mdx
│   │   │   │   └── overview.mdx
│   │   │   ├── _category_.json
│   │   │   ├── commit-validation.mdx
│   │   │   ├── config-file.mdx
│   │   │   ├── editor.mdx
│   │   │   ├── initialization.mdx
│   │   │   ├── overview.mdx
│   │   │   ├── project.mdx
│   │   │   ├── reference.mdx
│   │   │   ├── release.mdx
│   │   │   └── resolution.mdx
│   │   ├── developer-guide
│   │   │   ├── _category_.json
│   │   │   ├── adding-commands.mdx
│   │   │   ├── adding-pipeline-steps.mdx
│   │   │   ├── adding-version-strategies.mdx
│   │   │   ├── contributing.mdx
│   │   │   ├── development-setup.mdx
│   │   │   ├── extending-configuration.mdx
│   │   │   ├── overview.mdx
│   │   │   └── testing.mdx
│   │   ├── getting-started
│   │   │   ├── _category_.json
│   │   │   ├── docker.mdx
│   │   │   ├── first-workflow.mdx
│   │   │   ├── installation.mdx
│   │   │   ├── overview.mdx
│   │   │   └── quick-start.mdx
│   │   ├── pipelines
│   │   │   ├── _category_.json
│   │   │   ├── custom-composition.mdx
│   │   │   ├── development-pipeline.mdx
│   │   │   ├── execution-model.mdx
│   │   │   ├── full-pipeline.mdx
│   │   │   ├── overview.mdx
│   │   │   ├── profile-reference.mdx
│   │   │   ├── profiles.mdx
│   │   │   ├── release-pipeline.mdx
│   │   │   ├── step-order.mdx
│   │   │   └── step-system.mdx
│   │   ├── reference
│   │   │   ├── _category_.json
│   │   │   ├── cli.mdx
│   │   │   ├── configuration.mdx
│   │   │   ├── documentation-status.mdx
│   │   │   ├── environment.mdx
│   │   │   ├── exit-errors.mdx
│   │   │   ├── global-options.mdx
│   │   │   ├── overview.mdx
│   │   │   ├── paths-and-files.mdx
│   │   │   ├── pipeline-profiles.mdx
│   │   │   └── version-formats.mdx
│   │   ├── troubleshooting
│   │   │   ├── _category_.json
│   │   │   ├── changelog.mdx
│   │   │   ├── configuration.mdx
│   │   │   ├── git.mdx
│   │   │   ├── overview.mdx
│   │   │   ├── versioning.mdx
│   │   │   └── workflows.mdx
│   │   ├── user-guide
│   │   │   ├── _category_.json
│   │   │   ├── cleaning-branches.mdx
│   │   │   ├── everyday-development.mdx
│   │   │   ├── managing-backups.mdx
│   │   │   ├── overview.mdx
│   │   │   ├── preparing-releases.mdx
│   │   │   └── troubleshooting-workflows.mdx
│   │   ├── _category_.json
│   │   └── index.mdx
│   ├── devalltect-docs
│   │   ├── _category_.json
│   │   ├── docker.mdx
│   │   ├── index.mdx
│   │   ├── maintainer-workflow.mdx
│   │   └── versioning-and-freshness.mdx
│   ├── doc-gen
│   │   ├── architecture
│   │   │   ├── _category_.json
│   │   │   ├── execution-flow.mdx
│   │   │   └── overview.mdx
│   │   ├── commands
│   │   │   ├── init
│   │   │   │   ├── _category_.json
│   │   │   │   ├── configuration.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── structure
│   │   │   │   ├── analyze
│   │   │   │   ├── generate
│   │   │   │   ├── print
│   │   │   │   ├── _category_.json
│   │   │   │   └── overview.mdx
│   │   │   ├── _category_.json
│   │   │   └── overview.mdx
│   │   ├── concepts
│   │   │   ├── _category_.json
│   │   │   ├── overview.mdx
│   │   │   ├── profiles-and-smart-mode.mdx
│   │   │   └── safety-and-dry-run.mdx
│   │   ├── configuration
│   │   │   ├── _category_.json
│   │   │   ├── overview.mdx
│   │   │   └── reference.mdx
│   │   ├── developer-guide
│   │   │   ├── _category_.json
│   │   │   ├── contributing.mdx
│   │   │   ├── development-setup.mdx
│   │   │   ├── overview.mdx
│   │   │   └── testing.mdx
│   │   ├── getting-started
│   │   │   ├── _category_.json
│   │   │   ├── docker.mdx
│   │   │   ├── first-workflow.mdx
│   │   │   └── overview.mdx
│   │   ├── reference
│   │   │   ├── _category_.json
│   │   │   ├── cli.mdx
│   │   │   ├── documentation-status.mdx
│   │   │   └── overview.mdx
│   │   ├── troubleshooting
│   │   │   ├── _category_.json
│   │   │   ├── common-errors.mdx
│   │   │   └── overview.mdx
│   │   ├── user-guide
│   │   │   ├── _category_.json
│   │   │   ├── overview.mdx
│   │   │   └── workflows.mdx
│   │   ├── _category_.json
│   │   ├── examples.mdx
│   │   └── index.mdx
│   ├── path-header-scanner
│   │   ├── architecture
│   │   │   ├── _category_.json
│   │   │   ├── execution-flow.mdx
│   │   │   └── overview.mdx
│   │   ├── commands
│   │   │   ├── init
│   │   │   │   ├── _category_.json
│   │   │   │   ├── configuration.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── scan
│   │   │   │   ├── _category_.json
│   │   │   │   ├── configuration.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── _category_.json
│   │   │   └── overview.mdx
│   │   ├── concepts
│   │   │   ├── _category_.json
│   │   │   ├── overview.mdx
│   │   │   ├── path-headers.mdx
│   │   │   └── safety-and-dry-run.mdx
│   │   ├── configuration
│   │   │   ├── _category_.json
│   │   │   ├── overview.mdx
│   │   │   └── reference.mdx
│   │   ├── developer-guide
│   │   │   ├── _category_.json
│   │   │   ├── contributing.mdx
│   │   │   ├── development-setup.mdx
│   │   │   ├── overview.mdx
│   │   │   └── testing.mdx
│   │   ├── getting-started
│   │   │   ├── _category_.json
│   │   │   ├── docker.mdx
│   │   │   ├── first-workflow.mdx
│   │   │   └── overview.mdx
│   │   ├── reference
│   │   │   ├── _category_.json
│   │   │   ├── cli.mdx
│   │   │   ├── documentation-status.mdx
│   │   │   └── overview.mdx
│   │   ├── troubleshooting
│   │   │   ├── _category_.json
│   │   │   ├── common-errors.mdx
│   │   │   └── overview.mdx
│   │   ├── user-guide
│   │   │   ├── _category_.json
│   │   │   ├── overview.mdx
│   │   │   └── workflows.mdx
│   │   ├── _category_.json
│   │   ├── examples.mdx
│   │   └── index.mdx
│   ├── reflow
│   │   ├── architecture
│   │   │   ├── _category_.json
│   │   │   ├── execution-flow.mdx
│   │   │   └── overview.mdx
│   │   ├── commands
│   │   │   ├── dockerize
│   │   │   │   ├── _category_.json
│   │   │   │   ├── configuration.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── init
│   │   │   │   ├── _category_.json
│   │   │   │   ├── configuration.mdx
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── options.mdx
│   │   │   │   ├── output.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   ├── syntax.mdx
│   │   │   │   ├── troubleshooting.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── releases
│   │   │   │   ├── recover
│   │   │   │   ├── _category_.json
│   │   │   │   └── overview.mdx
│   │   │   ├── tags
│   │   │   │   ├── convert
│   │   │   │   ├── _category_.json
│   │   │   │   ├── overview.mdx
│   │   │   │   └── replay.mdx
│   │   │   ├── _category_.json
│   │   │   └── overview.mdx
│   │   ├── concepts
│   │   │   ├── _category_.json
│   │   │   ├── overview.mdx
│   │   │   ├── repository-targeting.mdx
│   │   │   └── safety-and-dry-run.mdx
│   │   ├── configuration
│   │   │   ├── _category_.json
│   │   │   ├── overview.mdx
│   │   │   └── reference.mdx
│   │   ├── developer-guide
│   │   │   ├── _category_.json
│   │   │   ├── contributing.mdx
│   │   │   ├── development-setup.mdx
│   │   │   ├── overview.mdx
│   │   │   └── testing.mdx
│   │   ├── getting-started
│   │   │   ├── _category_.json
│   │   │   ├── docker.mdx
│   │   │   ├── first-workflow.mdx
│   │   │   └── overview.mdx
│   │   ├── reference
│   │   │   ├── _category_.json
│   │   │   ├── cli.mdx
│   │   │   ├── documentation-status.mdx
│   │   │   └── overview.mdx
│   │   ├── troubleshooting
│   │   │   ├── _category_.json
│   │   │   ├── common-errors.mdx
│   │   │   └── overview.mdx
│   │   ├── user-guide
│   │   │   ├── _category_.json
│   │   │   ├── overview.mdx
│   │   │   └── workflows.mdx
│   │   ├── _category_.json
│   │   ├── examples.mdx
│   │   └── index.mdx
│   ├── this
│   │   └── principles.md
│   ├── tutorial-basics
│   │   ├── _category_.json
│   │   ├── congratulations.mdx
│   │   ├── create-a-blog-post.mdx
│   │   ├── create-a-document.mdx
│   │   ├── create-a-page.mdx
│   │   ├── deploy-your-site.mdx
│   │   └── markdown-features.mdx
│   ├── tutorial-extras
│   │   ├── img
│   │   │   ├── docsVersionDropdown.png
│   │   │   └── localeDropdown.png
│   │   ├── _category_.json
│   │   ├── manage-docs-versions.mdx
│   │   └── translate-your-site.mdx
│   ├── badges.md
│   ├── developers.mdx
│   ├── intro.mdx
│   ├── projects-overview.mdx
│   ├── TODO.md
│   ├── TODO_category.md
│   └── TODO_FRONTMATTER.md
├── i18n
│   └── id
│       ├── docusaurus-plugin-content-docs
│       │   ├── current
│       │   │   ├── custy
│       │   │   ├── devalltect-docs
│       │   │   ├── doc-gen
│       │   │   ├── path-header-scanner
│       │   │   ├── reflow
│       │   │   ├── developers.mdx
│       │   │   ├── intro.mdx
│       │   │   └── projects-overview.mdx
│       │   └── current.json
│       ├── docusaurus-theme-classic
│       │   ├── footer.json
│       │   └── navbar.json
│       └── code.json
├── logs/ ... (collapsed)
├── make
│   └── core
│       ├── ci
│       │   ├── command.mk
│       │   └── help.mk
│       ├── cleanup
│       │   ├── command.mk
│       │   └── help.mk
│       ├── compose
│       │   ├── command
│       │   │   ├── common.mk
│       │   │   └── core.mk
│       │   └── help.mk
│       ├── docker
│       │   ├── command
│       │   │   ├── common.mk
│       │   │   └── core.mk
│       │   └── help.mk
│       ├── documentation
│       │   ├── command.mk
│       │   └── help.mk
│       ├── help
│       │   ├── command.mk
│       │   ├── helper.mk
│       │   └── variable.mk
│       ├── helpers
│       │   ├── common.mk
│       │   └── registry.mk
│       ├── lint_format
│       │   ├── command.mk
│       │   └── help.mk
│       ├── local
│       │   ├── command.mk
│       │   └── help.mk
│       ├── qa
│       │   ├── command.mk
│       │   └── help.mk
│       ├── setup_install
│       │   ├── command.mk
│       │   └── help.mk
│       ├── testing
│       │   ├── command.mk
│       │   └── help.mk
│       └── variables
│           ├── help.mk
│           └── variable.mk
├── node_modules/ ... (collapsed)
├── plugins
│   └── documentation-freshness
│       ├── index.ts
│       ├── remoteTags.test.ts
│       ├── remoteTags.ts
│       ├── resolver.test.ts
│       ├── resolver.ts
│       ├── versioning.test.ts
│       └── versioning.ts
├── scripts
│   ├── repository
│   │   ├── src
│   │   │   └── sync_metadata.mjs
│   │   └── tests
│   │       ├── generated_artifacts.test.mjs
│   │       ├── release_workflow.test.mjs
│   │       └── sync_metadata.test.mjs
│   └── add_frontmatter.py
├── src
│   ├── components
│   │   ├── docs
│   │   │   ├── architecture
│   │   │   │   ├── ArchitectureCard
│   │   │   │   ├── DependencyCard
│   │   │   │   ├── LayerCard
│   │   │   │   ├── PatternCard
│   │   │   │   ├── PatternTable
│   │   │   │   └── index.ts
│   │   │   ├── command
│   │   │   │   ├── CommandChecklist
│   │   │   │   ├── CommandExample
│   │   │   │   ├── CommandHero
│   │   │   │   ├── CommandLifecycle
│   │   │   │   ├── CommandMetadata
│   │   │   │   ├── CommandOption
│   │   │   │   ├── CommandOutput
│   │   │   │   ├── CommandSyntax
│   │   │   │   ├── RelatedCommands
│   │   │   │   └── index.ts
│   │   │   ├── common
│   │   │   │   ├── Badge
│   │   │   │   ├── Card
│   │   │   │   ├── Divider
│   │   │   │   ├── DocumentationVersionNotice
│   │   │   │   ├── Grid
│   │   │   │   ├── Heading
│   │   │   │   ├── Icon
│   │   │   │   ├── InfoBox
│   │   │   │   ├── Section
│   │   │   │   ├── Tag
│   │   │   │   └── index.ts
│   │   │   ├── feature
│   │   │   │   ├── FeatureCard
│   │   │   │   ├── FeatureGrid
│   │   │   │   ├── FeatureList
│   │   │   │   └── index.ts
│   │   │   ├── hooks
│   │   │   │   ├── index.ts
│   │   │   │   ├── useClipboard.ts
│   │   │   │   ├── useMounted.ts
│   │   │   │   └── useThemeMode.ts
│   │   │   ├── mermaid
│   │   │   │   ├── MermaidCard
│   │   │   │   ├── MermaidLegend
│   │   │   │   ├── MermaidTitle
│   │   │   │   └── index.ts
│   │   │   ├── requirement
│   │   │   │   ├── RequirementCard
│   │   │   │   ├── RequirementGrid
│   │   │   │   └── index.ts
│   │   │   ├── screenshot
│   │   │   │   ├── ImageCompare
│   │   │   │   ├── Screenshot
│   │   │   │   ├── ScreenshotGrid
│   │   │   │   └── index.ts
│   │   │   ├── shared
│   │   │   │   └── icons
│   │   │   ├── styles
│   │   │   │   ├── animation.css
│   │   │   │   ├── components.css
│   │   │   │   ├── index.css
│   │   │   │   ├── layout.css
│   │   │   │   ├── typography.css
│   │   │   │   ├── utilities.css
│   │   │   │   └── variables.css
│   │   │   ├── table
│   │   │   │   ├── KeyValueTable
│   │   │   │   ├── PropertyTable
│   │   │   │   └── index.ts
│   │   │   ├── terminal
│   │   │   │   ├── CopyButton
│   │   │   │   ├── Terminal
│   │   │   │   ├── TerminalBody
│   │   │   │   ├── TerminalHeader
│   │   │   │   └── index.ts
│   │   │   ├── types
│   │   │   │   ├── common.ts
│   │   │   │   ├── component.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── layout.ts
│   │   │   │   ├── status.ts
│   │   │   │   └── theme.ts
│   │   │   ├── utils
│   │   │   │   ├── array.ts
│   │   │   │   ├── copy.ts
│   │   │   │   ├── format.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── object.ts
│   │   │   │   ├── slug.ts
│   │   │   │   ├── status.ts
│   │   │   │   ├── text.ts
│   │   │   │   └── validation.ts
│   │   │   ├── workflow
│   │   │   │   ├── WorkflowDiagram
│   │   │   │   ├── WorkflowLegend
│   │   │   │   ├── WorkflowStage
│   │   │   │   ├── WorkflowStep
│   │   │   │   ├── WorkflowTimeline
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   └── homepage
│   │       ├── About.module.css
│   │       ├── About.tsx
│   │       ├── about.txt
│   │       ├── Audiences.module.css
│   │       ├── Audiences.tsx
│   │       ├── DocumentationOverview.module.css
│   │       ├── DocumentationOverview.tsx
│   │       ├── Hero.module.css
│   │       ├── Hero.tsx
│   │       ├── ProjectGrid.module.css
│   │       ├── ProjectGrid.tsx
│   │       ├── QuickLinks.module.css
│   │       └── QuickLinks.tsx
│   ├── css
│   │   ├── custom.css
│   │   ├── docs.css
│   │   └── docs.old.css
│   ├── data
│   │   ├── documentationFreshness.ts
│   │   └── projects.ts
│   ├── logs/ ... (collapsed)
│   ├── pages
│   │   ├── docs.tsx
│   │   ├── index.module.css
│   │   ├── index.tsx
│   │   └── markdown-page.mdx
│   ├── theme
│   │   └── DocItem
│   │       └── Content
│   │           ├── index.tsx
│   │           └── NOTE.md
│   └── __version__.py
├── static
│   ├── img
│   │   ├── custy
│   │   │   └── commands
│   │   │       ├── changelog
│   │   │       ├── cleanup
│   │   │       ├── commit
│   │   │       ├── push
│   │   │       ├── run
│   │   │       ├── tag
│   │   │       └── workflow
│   │   ├── project-previews
│   │   │   ├── custy.png
│   │   │   ├── doc-gen.png
│   │   │   ├── path-header-scanner.png
│   │   │   └── reflow.png
│   │   ├── docusaurus-social-card.jpg
│   │   ├── docusaurus.png
│   │   ├── favicon.ico
│   │   ├── logo-devalltect00-on-dark.png
│   │   ├── logo-devalltect00-on-light.png
│   │   ├── logo.svg
│   │   ├── undraw_docusaurus_mountain.svg
│   │   ├── undraw_docusaurus_react.svg
│   │   └── undraw_docusaurus_tree.svg
│   └── .nojekyll
├── venv/ ... (collapsed)
├── .dockerignore
├── .gitignore
├── .gitlab-ci.yml
├── .pre-commit-config.yaml
├── .prettierignore
├── .prettierrc.json
├── .yarnrc.yml
├── CHANGELOG.md
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── docker-compose.yml
├── Dockerfile
├── docusaurus.config.ts
├── LICENSE
├── Makefile
├── package.json
├── README.md
├── SECURITY.md
├── sidebars.ts
├── tsconfig.json
└── yarn.lock
```

---

## Root Files

| File | Description |
|------|-------------|
| `README.md` | Project overview and introduction. |
| `CHANGELOG.md` | History of notable changes between releases. |
| `LICENSE` | Project license information. |
| `SECURITY.md` | Security policy and vulnerability reporting instructions. |
| `Makefile` | Defines common development, testing, and build commands. |
| `Dockerfile` | Container image build instructions. |
| `docker-compose.yml` | Default multi-container Docker configuration. |
| `docker-compose.dev.yml` | Development Docker Compose configuration. |
| `docker-compose.prod.yml` | Production Docker Compose configuration. |
| `.gitignore` | Specifies files and directories ignored by Git. |
| `.dockerignore` | Specifies files excluded from Docker build context. |
| `.prettierrc.json` | Prettier code formatting configuration. |
| `.prettierignore` | Files ignored by Prettier. |
| `.pre-commit-config.yaml` | Pre-commit hooks configuration. |
| `.gitlab-ci.yml` | GitLab CI/CD pipeline configuration. |

---

## Directory Details

### `.config/`
Project configuration files.

Stores reusable configuration files used by the project.
Helps keep the repository root clean and organized.

Common examples:
- .config/tool-config/
- .config/templates/
- .config/settings/

### `docs/`
Project documentation and technical references.

The documentation folder usually contains structured knowledge about the project.

Common documentation sections:
- docs/architecture        → system design and architecture diagrams
- docs/development         → development guides and workflows
- docs/system              → detailed technical documentation
- docs/reference           → command references and APIs
- docs/user-guide          → instructions for end users
- docs/diagrams            → visual architecture diagrams
- docs/phases              → project phases and planning
- docs/Q&A                 → common questions and explanations

Common files:
- PROJECT_STRUCTURE.md
- DEVELOPMENT_GUIDE.md
- HOW_TO_USE.md
- TODO.md
- CLI_COMMAND.md
- references.md
- badges.md

### `scripts/`
Utility scripts for development or automation.

May include deployment scripts, maintenance tools, or helpers.


---

## Notes

- Temporary files, caches, and environment directories are excluded.
- Structure is generated automatically using DocGen.
