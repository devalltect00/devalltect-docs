# Documentation Component Library

> Reusable documentation components for Docusaurus.

---

## Overview

The Documentation Component Library provides a collection of reusable React
components specifically designed for writing high-quality technical
documentation.

Unlike general-purpose UI libraries, these components are optimized for
documentation workflows including:

- Command documentation
- Architecture documentation
- Workflow documentation
- User guides
- Developer guides
- API references
- Configuration references
- Tutorials
- Screenshots
- Mermaid diagrams

The library is intentionally project-agnostic and can be reused across
multiple projects and documentation sites.

---

## Goals

The library is designed around several core goals.

- Consistent documentation UI
- Reusable documentation patterns
- Excellent readability
- Type safety
- Accessibility
- Responsive layouts
- Easy maintenance
- Minimal duplication

---

## Philosophy

Documentation should be treated as a product.

Instead of writing Markdown pages independently, documentation pages should be
built using reusable components.

This approach provides:

- Consistent layouts
- Consistent spacing
- Consistent colors
- Consistent terminology
- Better maintainability
- Easier long-term evolution

---

# Component Categories

The library is organized around documentation concepts rather than UI widgets.

```text
common/
```

Reusable building blocks.

Examples

- Badge
- Card
- Divider
- Grid
- Heading
- Icon
- InfoBox
- Section
- Tag

---

```text
command/
```

Components for CLI documentation.

Examples

- CommandHero
- CommandMetadata
- CommandSyntax
- CommandOption
- CommandExample
- CommandOutput
- RelatedCommands

---

```text
workflow/
```

Workflow visualization.

Examples

- WorkflowStep
- WorkflowStage
- WorkflowTimeline
- WorkflowDiagram
- WorkflowLegend

---

```text
architecture/
```

Architecture documentation.

Examples

- ArchitectureCard
- LayerCard
- DependencyCard
- PatternCard
- PatternTable

---

```text
feature/
```

Feature documentation.

---

```text
requirement/
```

Requirement documentation.

---

```text
terminal/
```

Terminal rendering.

---

```text
table/
```

Documentation tables.

---

```text
screenshot/
```

Screenshot presentation.

---

```text
mermaid/
```

Diagram helpers.

---

# Project Structure

```text
docs/

common/
architecture/
command/
feature/
mermaid/
requirement/
screenshot/
table/
terminal/
workflow/

hooks/
styles/
types/
utils/

index.ts
README.md
```

---

# Folder Responsibilities

## common/

Generic building blocks.

These components should never contain project-specific logic.

---

## command/

Everything related to documenting CLI commands.

---

## workflow/

Components describing execution flow.

---

## architecture/

Components describing system design.

---

## screenshot/

Visual documentation.

---

## terminal/

Terminal presentation.

---

## table/

Reusable documentation tables.

---

## mermaid/

Diagram helpers.

---

## hooks/

Shared React hooks.

Hooks should only exist when reused by multiple components.

---

## utils/

Reusable utility functions.

Utility functions should remain generic.

---

## styles/

Documentation design system.

Contains shared variables, typography, spacing, animations and utilities.

---

## types/

Shared TypeScript types.

---

# Creating a New Component

Each component should follow the same folder structure.

```text
ExampleComponent/

ExampleComponent.tsx

ExampleComponent.module.css

types.ts

index.ts
```

Every component should include:

- TypeScript types
- CSS Module
- Public export
- Documentation comments

---

# Component Standards

Every component should:

- Be reusable
- Be generic
- Be documented
- Avoid project-specific logic
- Prefer composition over duplication

---

# Styling Standards

The component library uses CSS Modules.

Each component owns its own styles.

Shared values should come from:

```text
styles/

variables.css
```

Avoid hardcoding spacing or typography values.

Prefer CSS variables.

---

# TypeScript Standards

Every public component should expose its public types.

Example

```ts
export type { FeatureCardProps } from "./FeatureCard";
```

Avoid using `any`.

Prefer explicit interfaces.

---

# Import Convention

Always import through the public API whenever possible.

Preferred

```tsx
import { FeatureCard, WorkflowTimeline } from "@site/src/components/docs";
```

Avoid importing deep internal files unless developing the library itself.

---

# Naming Convention

Component folders

```text
FeatureCard
```

Component files

```text
FeatureCard.tsx
```

CSS Modules

```text
FeatureCard.module.css
```

Type definitions

```text
types.ts
```

Exports

```text
index.ts
```

---

# Documentation Standards

Every file should begin with a documentation header.

Every exported interface should include documentation.

Every exported component should include documentation.

Every exported function should include documentation.

The goal is for the component library itself to be self-documenting.

---

# Public API

Only export components through:

```text
docs/index.ts
```

Internal implementation details should remain private whenever possible.

---

# Development Workflow

When adding a new component:

1. Create the folder.
2. Define types.
3. Implement the component.
4. Add CSS Module.
5. Export through index.ts.
6. Export through the package index.
7. Export through docs/index.ts.
8. Document the component.

---

# Component Checklist

Before merging a new component:

- [ ] TypeScript compiles
- [ ] ESLint passes
- [ ] Responsive
- [ ] Accessible
- [ ] Documented
- [ ] Uses CSS Modules
- [ ] Public exports updated

---

# Design Principles

The library follows several principles.

## Composition over inheritance

Build components from smaller reusable components.

---

## Generic over project-specific

Components should work for any documentation project.

---

## Readability first

Documentation should always prioritize readability.

---

## Consistency

Documentation pages should feel visually consistent regardless of project.

---

## Maintainability

Reducing duplication is preferred over introducing new abstractions.

---

# Current Status

Current Version

```
Version 1
```

Status

```
Active Development
```

---

# Future Improvements

Potential future enhancements include:

- Diagram system
- Interactive Mermaid support
- Image annotations
- Better terminal rendering
- Copy-to-clipboard improvements
- Searchable property tables
- Theme-aware screenshots
- Additional accessibility improvements

These improvements should not break the public API.

---

# License

This component library follows the same license as the parent project.
