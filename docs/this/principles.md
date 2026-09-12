documentation platform's design principles.

"Consistency in conventions, flexibility in structure."

"Every project should follow the same conventions, while remaining free to organize documentation according to the project's needs."

==================
Full
==================

I completely agree with your reasoning.

In fact, I think what you said is **better** than my original proposal.

> **Consistency in conventions, flexibility in structure.**

I think that should become one of the documentation platform's design principles.

---

# Documentation Platform Philosophy

Instead of saying:

> Every project **must** have the same structure.

I think we should say:

> Every project should follow the same **conventions**, while remaining free to organize documentation according to the project's needs.

Those are two very different philosophies.

For example...

## Consistency

These should remain consistent across every project:

- Folder naming (`architecture`, `commands`, `user-guide`, etc.)
- File naming (`overview.mdx`, `workflow.mdx`, `examples.mdx`, etc.)
- Frontmatter style
- Component usage
- Writing style
- Terminology
- Navigation style
- Visual design
- Documentation quality

---

## Flexibility

These should remain flexible:

Whether a project needs

```text
concepts/
```

No problem.

Whether another project needs

```text
future/
```

No problem.

Whether another project has

```text
integrations/
plugins/
deployment/
api/
sdk/
```

Also perfectly fine.

The structure should reflect the project, not force the project into a template.

I think that's a much healthier long-term approach.

---

# Therefore...

I slightly change my wording.

Instead of

```text
Documentation Template
```

I think we have

```text
Documentation Convention
```

That is much better.

---

# Now...

## Custy Documentation Structure

This is what I recommend.

Not because every project must look like this.

But because **Custy** naturally has these areas.

---

```text
docs/
└── custy/
    │
    ├── _category_.json
    │
    ├── index.mdx
    ├── installation.mdx
    ├── configuration.mdx
    ├── usage.mdx
    ├── badges.mdx
    ├── infrastructure.mdx
    ├── project-structure.mdx
    │
    ├── user-guide/
    │   ├── _category_.json
    │   ├── overview.mdx
    │   ├── quickstart.mdx
    │   ├── lifecycle.mdx
    │   ├── release-workflow.mdx
    │   └── commands.mdx
    │
    ├── commands/
    │   ├── _category_.json
    │   │
    │   ├── init/
    │   ├── validate/
    │   ├── backup/
    │   ├── cleanup/
    │   ├── changelog/
    │   ├── version/
    │   ├── push/
    │   ├── workflow/
    │   ├── run/
    │   └── ...
    │
    ├── architecture/
    │   ├── _category_.json
    │   ├── overview.mdx
    │   ├── project-structure.mdx
    │   ├── cli.mdx
    │   ├── pipeline.mdx
    │   ├── workflow-engine.mdx
    │   ├── versioning.mdx
    │   └── design-patterns.mdx
    │
    ├── configuration/
    │   ├── _category_.json
    │   ├── config-file.mdx
    │   ├── git.mdx
    │   ├── versioning.mdx
    │   ├── changelog.mdx
    │   ├── backup.mdx
    │   └── workflow.mdx
    │
    ├── developer-guide/
    │   ├── _category_.json
    │   ├── getting-started.mdx
    │   ├── project-layout.mdx
    │   ├── testing.mdx
    │   ├── contributing.mdx
    │   └── release-process.mdx
    │
    ├── diagrams/
    │   ├── _category_.json
    │   ├── generated/
    │   ├── *.mmd
    │   └── README.mdx
    │
    ├── examples/
    │   ├── _category_.json
    │   ├── python-package.mdx
    │   ├── node-project.mdx
    │   ├── monorepo.mdx
    │   └── github-actions.mdx
    │
    ├── reads/
    │   ├── _category_.json
    │   ├── documentation-audit-report.mdx
    │   └── ...
    │
    ├── testing/
    │   ├── _category_.json
    │   └── testing-guide.mdx
    │
    └── faq/
        ├── _category_.json
        └── index.mdx
```

---

# Why I chose this

I based it on **Custy itself**, not on the other projects.

Custy has things that Reflow doesn't.

For example:

- Pipeline architecture
- Workflow engine
- Versioning strategies
- Commit workflow
- Release workflow
- Configuration system

Those deserve dedicated documentation.

---

# What is intentionally NOT included

Notice there is **no**:

```text
concepts/
```

Why?

Because after reviewing everything we've discussed about Custy over the past months, I don't think it needs a top-level `concepts` section. The concepts naturally fit into:

- `user-guide/`
- `architecture/`
- `configuration/`

If, six months from now, Custy grows to the point where a dedicated `concepts/` section makes sense, we can add it without disrupting the rest of the documentation.

---

# 🔒 Proposed Lock

If you approve this structure, I propose we lock these rules:

1. **This structure is specific to Custy**, not a mandatory template for every project.
2. **Folder and file naming conventions** should remain consistent across projects where applicable.
3. **Projects may add or omit sections** based on their own needs.
4. **We will not redesign the Custy structure halfway through writing the documentation**, unless you explicitly request it.

---

## One small recommendation

I would make one naming adjustment before we lock it.

Instead of:

```text
project-structure.mdx
```

I'd consistently use kebab-case everywhere rather than mixing styles like `project_structure.mdx` or `Installation.mdx`. Since you already plan to normalize naming after the Custy documentation is complete, I think that's the right time to make that change across the whole documentation platform.

If you're happy with this Custy structure, we'll **lock it** and then immediately begin creating the actual `docs/custy/` documentation—starting with `index.mdx`, just as we've planned.

==================
