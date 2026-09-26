# TODO: Add Frontmatter to All .mdx Files

## Task

Add proper frontmatter to every .mdx file in docs/ directory with:

- title: Camel Case (e.g., "Overview", "User Guide")
- description: Auto-generated from content
- sidebar*position: Based on \_category*.json or file order
- sidebar*key: From parent \_category*.json key field

## Files Updated (Completed)

### doc-gen/commands/init/

- [x] docs/doc-gen/commands/init/overview.mdx (already had correct frontmatter)
- [x] docs/doc-gen/commands/init/examples.mdx
- [x] docs/doc-gen/commands/init/faq.mdx
- [x] docs/doc-gen/commands/init/workflow.mdx

### path-header-scanner/user-guide/

- [x] docs/path-header-scanner/user-guide/overview.mdx
- [x] docs/path-header-scanner/user-guide/commands.mdx
- [x] docs/path-header-scanner/user-guide/quickstart.mdx
- [x] docs/path-header-scanner/user-guide/installation-methods.mdx
- [x] docs/path-header-scanner/user-guide/lifecycle.mdx
- [x] docs/path-header-scanner/user-guide/legacy-overview.mdx
- [x] docs/path-header-scanner/user-guide/legacy-user-guide.mdx

## Files to Update (Remaining)

### Root Level docs/

- [ ] docs/intro.mdx
- [ ] docs/projects-overview.mdx
- [ ] docs/TODO_category.md
- [ ] docs/TODO.md

### doc-gen/ (main)

- [ ] docs/doc-gen/badges.mdx
- [ ] docs/doc-gen/configuration.mdx
- [ ] docs/doc-gen/how-to-use.mdx
- [ ] docs/doc-gen/index.mdx
- [ ] docs/doc-gen/infrastructure.mdx
- [ ] docs/doc-gen/installation.mdx
- [ ] docs/doc-gen/project_structure.mdx
- [ ] docs/doc-gen/TODO_tracking_history.mdx
- [ ] docs/doc-gen/usage.mdx

### doc-gen/architecture/

- [ ] docs/doc-gen/architecture/design-patterns.mdx
- [ ] docs/doc-gen/architecture/diagrams.mdx
- [ ] docs/doc-gen/architecture/workflow.mdx

### doc-gen/developer-guide/

- [ ] docs/doc-gen/developer-guide/developer-guide.mdx
- [ ] docs/doc-gen/developer-guide/docker-workflow.mdx
- [ ] docs/doc-gen/developer-guide/getting-started.mdx

### doc-gen/diagrams/ (no .mdx files)

### doc-gen/project/

- [ ] docs/doc-gen/project/project-structure.mdx

### doc-gen/reads/

- [ ] docs/doc-gen/reads/documentation-audit-report.mdx
- [ ] docs/doc-gen/reads/linting-vs-formatting.mdx
- [ ] docs/doc-gen/reads/ruff.mdx

### doc-gen/testing/

- [ ] docs/doc-gen/testing/testing-guide.mdx

### doc-gen/user-guide/

- [ ] docs/doc-gen/user-guide/commands.mdx
- [ ] docs/doc-gen/user-guide/installation-methods.mdx
- [ ] docs/doc-gen/user-guide/lifecycle.mdx
- [ ] docs/doc-gen/user-guide/overview.mdx
- [ ] docs/doc-gen/user-guide/quickstart.mdx
- [ ] docs/doc-gen/user-guide/smart-mode.mdx

### path-header-scanner/ (main)

- [ ] docs/path-header-scanner/badges.mdx
- [ ] docs/path-header-scanner/configuration.mdx
- [ ] docs/path-header-scanner/how-to-use.mdx
- [ ] docs/path-header-scanner/index.mdx
- [ ] docs/path-header-scanner/infrastructure.mdx
- [ ] docs/path-header-scanner/installation.mdx
- [ ] docs/path-header-scanner/project_structure.mdx
- [ ] docs/path-header-scanner/TODO_tracking_history.mdx
- [ ] docs/path-header-scanner/usage.mdx

### path-header-scanner/architecture/

- [ ] docs/path-header-scanner/architecture/design-patterns.mdx
- [ ] docs/path-header-scanner/architecture/diagrams.mdx
- [ ] docs/path-header-scanner/architecture/workflow.mdx

### path-header-scanner/changelog/

- [ ] docs/path-header-scanner/changelog/ (no .mdx files in subdirs)

### path-header-scanner/developer-guide/

- [ ] docs/path-header-scanner/developer-guide/developer-guide.mdx
- [ ] docs/path-header-scanner/developer-guide/docker-workflow.mdx
- [ ] docs/path-header-scanner/developer-guide/getting-started.mdx
- [ ] docs/path-header-scanner/developer-guide/blackbox/ai-development-workflow.mdx

### path-header-scanner/diagrams/

- [ ] docs/path-header-scanner/diagrams/README.mdx

### path-header-scanner/project/

- [ ] docs/path-header-scanner/project/project-structure.mdx

### path-header-scanner/reads/

- [ ] docs/path-header-scanner/reads/documentation-audit-report.mdx
- [ ] docs/path-header-scanner/reads/linting-vs-formatting.mdx
- [ ] docs/path-header-scanner/reads/ruff.mdx

### path-header-scanner/testing/

- [ ] docs/path-header-scanner/testing/testing-guide.mdx

### reflow/ (main)

- [ ] docs/reflow/badges.mdx
- [ ] docs/reflow/configuration.mdx
- [ ] docs/reflow/how-to-use.mdx
- [ ] docs/reflow/index.mdx
- [ ] docs/reflow/infrastructure.mdx
- [ ] docs/reflow/Installation.mdx
- [ ] docs/reflow/project_structure.mdx
- [ ] docs/reflow/TODO_tracking_history.mdx
- [ ] docs/reflow/usage.mdx

### reflow/architecture/

- [ ] docs/reflow/architecture/design-pattern.mdx
- [ ] docs/reflow/architecture/diagrams.mdx
- [ ] docs/reflow/architecture/workflow.mdx

### reflow/developer-guide/

- [ ] docs/reflow/developer-guide/developer-guide.mdx
- [ ] docs/reflow/developer-guide/docker-workflow.mdx
- [ ] docs/reflow/developer-guide/getting-started.mdx

### reflow/diagrams/

- [ ] docs/reflow/diagrams/README.mdx

### reflow/future/

- [ ] docs/reflow/future/scripts/ (no .mdx files)

### reflow/project/

- [ ] docs/reflow/project/roadmap.mdx
- [ ] docs/reflow/project/TODO_future.mdx

### reflow/reads/

- [ ] docs/reflow/reads/documentation-audit-report.mdx
- [ ] docs/reflow/reads/linting-vs-formatting.mdx
- [ ] docs/reflow/reads/ruff.mdx
- [ ] docs/reflow/reads/notes/ (no .mdx files)

### reflow/testing/

- [ ] docs/reflow/testing/testing-guide.mdx

### reflow/user-guide/

- [ ] docs/reflow/user-guide/commands.mdx
- [ ] docs/reflow/user-guide/getting-started.mdx
- [ ] docs/reflow/user-guide/installation-methods.mdx
- [ ] docs/reflow/user-guide/lifecycle.mdx
- [ ] docs/reflow/user-guide/overview.mdx
- [ ] docs/reflow/user-guide/quickstart.mdx

### tutorial-basics/

- [ ] docs/tutorial-basics/congratulations.mdx
- [ ] docs/tutorial-basics/create-a-blog-post.mdx
- [ ] docs/tutorial-basics/create-a-document.mdx
- [ ] docs/tutorial-basics/create-a-page.mdx
- [ ] docs/tutorial-basics/deploy-your-site.mdx
- [ ] docs/tutorial-basics/markdown-features.mdx

### tutorial-extras/

- [ ] docs/tutorial-extras/manage-docs-versions.mdx
- [ ] docs/tutorial-extras/translate-your-site.mdx

## Strategy

### For each file:

1. read_file the file content
2. read*file the parent \_category*.json to get:
   - label (for description context)
   - key (for sidebar_key)
3. Extract a title from the first H1 heading (# Title)
4. Generate description from content (first paragraph or summary)
5. Determine sidebar_position based on filename order or default
6. Create proper frontmatter

### category\_.json reference format:

```json
{
  "label": "User Guide",
  "key": "doc-gen-user-guide"
}
```

## Progress: 11 of ~80 files completed
