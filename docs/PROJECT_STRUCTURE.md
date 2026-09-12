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
│   └── doc_gen
│       └── config.toml
├── .docusaurus/ ... (collapsed)
├── .gitlab
│   ├── ci.yml
│   └── pages.yml
├── .yarn/ ... (collapsed)
├── blog/ ... (collapsed)
├── build/ ... (collapsed)
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
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── push-strategy.mdx
│   │   │   │   └── remotes.mdx
│   │   │   ├── logging
│   │   │   │   ├── _category_.json
│   │   │   │   ├── console.mdx
│   │   │   │   ├── file.mdx
│   │   │   │   └── overview.mdx
│   │   │   ├── _category_.json
│   │   │   ├── config-file.mdx
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
│   ├── doc-gen
│   │   ├── architecture
│   │   │   ├── _category_.json
│   │   │   ├── design-patterns.mdx
│   │   │   ├── diagrams.mdx
│   │   │   └── workflow.mdx
│   │   ├── commands
│   │   │   ├── init
│   │   │   │   ├── _category_.json
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── structure
│   │   │   │   ├── analyze
│   │   │   │   ├── common
│   │   │   │   ├── generate
│   │   │   │   ├── print
│   │   │   │   └── _category_.json
│   │   │   └── _category_.json
│   │   ├── developer-guide
│   │   │   ├── blackbox
│   │   │   │   ├── _category_.json
│   │   │   │   └── ai-development-workflow.mdx
│   │   │   ├── tooling
│   │   │   │   ├── ruff
│   │   │   │   └── _category_.json
│   │   │   ├── _category_.json
│   │   │   ├── developer-guide.mdx
│   │   │   ├── docker-workflow.mdx
│   │   │   └── getting-started.mdx
│   │   ├── diagrams
│   │   │   ├── generated
│   │   │   │   ├── analyze-workflow.png
│   │   │   │   ├── architecture-overview.png
│   │   │   │   ├── generate-workflow.png
│   │   │   │   ├── init-workflow.png
│   │   │   │   └── print-workflow.png
│   │   │   ├── _category_.json
│   │   │   ├── analyze-workflow.mmd
│   │   │   ├── architecture-overview.mmd
│   │   │   ├── generate-workflow.mmd
│   │   │   ├── init-workflow.mmd
│   │   │   └── print-workflow.mmd
│   │   ├── project
│   │   │   ├── _category_.json
│   │   │   └── project-structure.mdx
│   │   ├── reads
│   │   │   ├── blackbox
│   │   │   │   └── documentation-prompt
│   │   │   ├── _category_.json
│   │   │   ├── documentation-audit-report.mdx
│   │   │   ├── linting-vs-formatting.mdx
│   │   │   └── ruff.mdx
│   │   ├── testing
│   │   │   ├── _category_.json
│   │   │   └── testing-guide.mdx
│   │   ├── user-guide
│   │   │   ├── _category_.json
│   │   │   ├── commands.mdx
│   │   │   ├── installation-methods.mdx
│   │   │   ├── lifecycle.mdx
│   │   │   ├── overview.mdx
│   │   │   ├── quickstart.mdx
│   │   │   └── smart-mode.mdx
│   │   ├── _category_.json
│   │   ├── badges.mdx
│   │   ├── configuration.mdx
│   │   ├── how-to-use.mdx
│   │   ├── index.mdx
│   │   ├── infrastructure.mdx
│   │   ├── installation.mdx
│   │   ├── project_structure.mdx
│   │   ├── TODO_tracking_history.mdx
│   │   └── usage.mdx
│   ├── path-header-scanner
│   │   ├── architecture
│   │   │   ├── _category_.json
│   │   │   ├── design-patterns.mdx
│   │   │   ├── diagrams.mdx
│   │   │   └── workflow.mdx
│   │   ├── changelog
│   │   │   ├── diagrams
│   │   │   └── _category_.json
│   │   ├── developer-guide
│   │   │   ├── blackbox
│   │   │   │   ├── _category_.json
│   │   │   │   └── ai-development-workflow.mdx
│   │   │   ├── tooling
│   │   │   │   ├── ruff
│   │   │   │   └── _category_.json
│   │   │   ├── _category_.json
│   │   │   ├── developer-guide.mdx
│   │   │   ├── docker-workflow.mdx
│   │   │   └── getting-started.mdx
│   │   ├── diagrams
│   │   │   ├── generated
│   │   │   │   ├── activity-scan.png
│   │   │   │   ├── architecture-overview.png
│   │   │   │   ├── cli-menu-design.png
│   │   │   │   ├── flowchart-error-handling.png
│   │   │   │   ├── init-workflow.png
│   │   │   │   ├── models-structure.png
│   │   │   │   ├── scan-algorithm-flow.png
│   │   │   │   └── use-case.png
│   │   │   ├── _category_.json
│   │   │   ├── activity-scan.mmd
│   │   │   ├── architecture-overview.mmd
│   │   │   ├── cli-menu-design.mmd
│   │   │   ├── flowchart-error-handling.mmd
│   │   │   ├── init-workflow.mmd
│   │   │   ├── models-structure.mmd
│   │   │   ├── README.mdx
│   │   │   ├── scan-algorithm-flow.mmd
│   │   │   └── use-case.mmd
│   │   ├── project
│   │   │   ├── languages
│   │   │   │   ├── markdown-language-strategy.mdx
│   │   │   │   └── supported-languages.mdx
│   │   │   ├── _category_.json
│   │   │   └── project-structure.mdx
│   │   ├── reads
│   │   │   ├── _category_.json
│   │   │   ├── documentation-audit-report.mdx
│   │   │   ├── linting-vs-formatting.mdx
│   │   │   └── ruff.mdx
│   │   ├── testing
│   │   │   ├── _category_.json
│   │   │   └── testing-guide.mdx
│   │   ├── user-guide
│   │   │   ├── _category_.json
│   │   │   ├── commands.mdx
│   │   │   ├── installation-methods.mdx
│   │   │   ├── legacy-overview.mdx
│   │   │   ├── legacy-user-guide.mdx
│   │   │   ├── lifecycle.mdx
│   │   │   ├── overview.mdx
│   │   │   └── quickstart.mdx
│   │   ├── _category_.json
│   │   ├── badges.mdx
│   │   ├── configuration.mdx
│   │   ├── how-to-use.mdx
│   │   ├── index.mdx
│   │   ├── infrastructure.mdx
│   │   ├── installation.mdx
│   │   ├── project_structure.mdx
│   │   ├── TODO_tracking_history.mdx
│   │   └── usage.mdx
│   ├── reflow
│   │   ├── architecture
│   │   │   ├── _category_.json
│   │   │   ├── design-pattern.mdx
│   │   │   ├── diagrams.mdx
│   │   │   └── workflow.mdx
│   │   ├── commands
│   │   │   ├── dockerize
│   │   │   │   ├── _category_.json
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   ├── requirements.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── init
│   │   │   │   ├── _category_.json
│   │   │   │   ├── examples.mdx
│   │   │   │   ├── faq.mdx
│   │   │   │   ├── overview.mdx
│   │   │   │   └── workflow.mdx
│   │   │   ├── tags
│   │   │   │   ├── convert
│   │   │   │   ├── replay
│   │   │   │   └── _category_.json
│   │   │   └── _category_.json
│   │   ├── developer-guide
│   │   │   ├── blackbox
│   │   │   │   ├── _category_.json
│   │   │   │   └── ai-development-workflow.mdx
│   │   │   ├── tooling
│   │   │   │   ├── ruff
│   │   │   │   └── _category_.json
│   │   │   ├── _category_.json
│   │   │   ├── developer-guide.mdx
│   │   │   ├── docker-workflow.mdx
│   │   │   └── getting-started.mdx
│   │   ├── diagrams
│   │   │   ├── generated
│   │   │   │   ├── architecture-layers.png
│   │   │   │   ├── convert-workflow.png
│   │   │   │   ├── dockerize-workflow.png
│   │   │   │   ├── init-workflow.png
│   │   │   │   ├── reflow-overview.png
│   │   │   │   ├── release-lifecycle.png
│   │   │   │   └── replay-workflow.png
│   │   │   ├── _category_.json
│   │   │   ├── architecture-layers.mmd
│   │   │   ├── convert-workflow.mmd
│   │   │   ├── dockerize-workflow.mmd
│   │   │   ├── init-workflow.mmd
│   │   │   ├── README.mdx
│   │   │   ├── reflow-overview.mmd
│   │   │   ├── release-lifecycle.mmd
│   │   │   └── replay-workflow.mmd
│   │   ├── future
│   │   │   ├── scripts
│   │   │   │   └── validate_github_gitlab_image.py
│   │   │   └── _category_.json
│   │   ├── project
│   │   │   ├── _category_.json
│   │   │   ├── roadmap.mdx
│   │   │   └── TODO_future.mdx
│   │   ├── reads
│   │   │   ├── notes
│   │   │   │   └── old
│   │   │   ├── _category_.json
│   │   │   ├── documentation-audit-report.mdx
│   │   │   ├── linting-vs-formatting.mdx
│   │   │   └── ruff.mdx
│   │   ├── testing
│   │   │   ├── _category_.json
│   │   │   └── testing-guide.mdx
│   │   ├── user-guide
│   │   │   ├── _category_.json
│   │   │   ├── commands.mdx
│   │   │   ├── getting-started.mdx
│   │   │   ├── installation-methods.mdx
│   │   │   ├── lifecycle.mdx
│   │   │   ├── overview.mdx
│   │   │   └── quickstart.mdx
│   │   ├── _category_.json
│   │   ├── badges.mdx
│   │   ├── configuration.mdx
│   │   ├── how-to-use.mdx
│   │   ├── index.mdx
│   │   ├── infrastructure.mdx
│   │   ├── Installation.mdx
│   │   ├── project_structure.mdx
│   │   ├── TODO_tracking_history.mdx
│   │   └── usage.mdx
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
│   ├── intro.mdx
│   ├── project_structure copy 2.md
│   ├── project_structure copy 3.md
│   ├── project_structure copy.md
│   ├── project_structure.md
│   ├── PROJECT_STRUCTUREe.md
│   ├── projects-overview.mdx
│   ├── TODO.md
│   ├── TODO_category.md
│   └── TODO_FRONTMATTER.md
├── i18n
│   └── id
│       ├── docusaurus-plugin-content-docs
│       │   ├── current
│       │   │   └── custy
│       │   └── current.json
│       ├── docusaurus-theme-classic
│       │   ├── footer.json
│       │   └── navbar.json
│       └── code.json
├── logs/ ... (collapsed)
├── node_modules/ ... (collapsed)
├── scripts
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
│   │       ├── DocumentationModel.module.css
│   │       ├── DocumentationModel.tsx
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
│   │   └── projects.ts
│   ├── logs/ ... (collapsed)
│   ├── pages
│   │   ├── index.module.css
│   │   ├── index.tsx
│   │   └── markdown-page.mdx
│   └── __version__.py
├── static
│   ├── img
│   │   ├── custy
│   │   │   └── commands
│   │   │       └── cleanup
│   │   ├── docusaurus-social-card.jpg
│   │   ├── docusaurus.png
│   │   ├── favicon.ico
│   │   ├── logo-devalltect00.png
│   │   ├── logo.svg
│   │   ├── undraw_docusaurus_mountain.svg
│   │   ├── undraw_docusaurus_react.svg
│   │   └── undraw_docusaurus_tree.svg
│   └── .nojekyll
├── .gitignore
├── .gitlab-ci.yml
├── .pre-commit-config.yaml
├── .prettierignore
├── .prettierrc.json
├── .yarnrc.yml
├── docusaurus.config.ts
├── LICENSE
├── Makefile
├── package.json
├── README.md
├── SECURITY.md
├── sidebars.ts
├── TODO_FRONTMATTER.md
├── tsconfig.json
└── yarn.lock
```

---

## Root Files

| File | Description |
|------|-------------|
| `README.md` | Project overview and introduction. |
| `LICENSE` | Project license information. |
| `SECURITY.md` | Security policy and vulnerability reporting instructions. |
| `Makefile` | Defines common development, testing, and build commands. |
| `.gitignore` | Specifies files and directories ignored by Git. |
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