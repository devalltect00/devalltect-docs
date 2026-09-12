---
name: follow-devalltect-docs-guidelines
description: Apply Devalltect documentation repository permissions, path-specific policies, Docusaurus workflows, React and TypeScript standards, MDX content guidance, Yarn validation practices, accessibility and localization requirements, and change-reporting rules. Use for every task that reads, analyzes, debugs, previews, builds, tests, or changes the devalltect00-docs project, especially work involving docs/, src/, static/, i18n/, Docusaurus configuration, or package files.
---

# Follow Devalltect Docs Guidelines

## Overview

Apply these rules to the `devalltect00-docs` repository. Treat the user's latest explicit instruction as authoritative when it changes the permitted scope.

## Obtain Permission Before Actions

1. Before editing, creating, deleting, renaming, moving, or formatting files, tell the user what is intended and ask for confirmation.
2. Before executing terminal, Git, Node, npm, Docusaurus, TypeScript, test, formatter, linter, build, preview, or deployment commands, explain the purpose and ask for confirmation.
3. Read-only file inspection does not require separate confirmation when the user has already authorized repository reading.
4. Treat a clear instruction such as "start," "make this change," or "run the build" as confirmation for that stated action and scope. Do not repeatedly ask within the same approved action.
5. Keep a user-granted permission active for its stated paths, operations, and scope until the user changes or revokes it, while that permission remains available in the current conversation or continuing task context.
6. Ask again before expanding scope, performing a materially different action, or doing anything destructive or externally visible.
7. Never infer permission to modify unrelated files.

## Read AGENTS.md as a Project Reference

1. Look for repository-root and applicable nested `AGENTS.md` or `AGENTS.override.md` files before source analysis, implementation, debugging, validation, or command execution.
2. If present, use them as references for project purpose, structure, coding standards, documentation style, testing, Git practices, and completion requirements.
3. Apply those files together with this skill. Do not treat an `AGENTS.md` statement as permission to change a path that this skill or the user protects.
4. If no `AGENTS.md` exists, continue with this skill and the active project configuration. Do not create `AGENTS.md` unless the user requests it.

## Apply Path-Specific Permissions

Use repository-relative paths. Apply directory rules recursively.

### Permission Meanings

- **Read by default:** Read, inspect, search, and analyze without asking. Ask before creating, editing, formatting, replacing, moving, renaming, or deleting anything. Keep an approved permission active until the user changes or revokes it.
- **Task-approved write:** After the user approves a task, add or edit files within the path as needed for that task without requesting approval for every file.
- **Standing full access:** Read, create, edit, format, replace, move, rename, or delete the specified file when relevant to the user's task without requesting additional path-level permission. Do not make unrelated changes.
- **Explicit removal:** Ask before deleting, moving, or renaming unless the approved task clearly includes that operation and exact scope.
- **Generated or dependency path:** Do not edit files manually. An approved package, build, or cleanup command may regenerate or remove the path as its expected effect.
- **Default rules:** Apply the general permission requirements in this skill.

### Path Policy

| Path | Permission | Purpose and guidance |
| --- | --- | --- |
| `docs/**` | Read by default | Primary Markdown and MDX documentation content. Ask before content or frontmatter changes. |
| `src/**` | Read by default | React, TypeScript, CSS, data, components, and pages. Ask before implementation or design changes. |
| `static/**` | Read by default | Static images and public assets. Ask before adding, replacing, or removing assets. |
| `i18n/**` | Read by default | Localized content and translation data. Ask before translation changes. |
| `blog/**` | Read by default | Blog content. The current Docusaurus preset disables the blog; do not assume these files are published. |
| `scripts/**` | Read by default | Project automation. Ask before changing or running scripts. |
| `.config/**` | Read by default | Tool configuration. Ask before changes. |
| `.agents/skills/**` | Read by default | Project-specific Codex skills. Ask before adding, updating, moving, or removing skill content. |
| `package.json`, `package-lock.json`, `docusaurus.config.ts`, `sidebars.ts`, `tsconfig.json` | Read by default | Core package, site, sidebar, and TypeScript configuration. Ask before changes. |
| `tests/**` | Task-approved write; explicit removal | Add or update tests when a test setup exists or an approved task introduces one. |
| `TODO_FRONTMATTER.md` | Standing full access | Maintain the root frontmatter task list when relevant to the user's task. |
| `node_modules/**`, `.docusaurus/**`, `build/**`, `logs/**`, `__pycache__/**` | Generated or dependency path | Never treat generated output or dependencies as source code. |
| Obvious backup or temporary files | Protected | Preserve personal reference copies and exclude them from active implementation. |
| All other repository paths | Default rules | Ask before changes unless the approved task explicitly includes the path. |

Treat obvious copied or temporary variants such as `* copy.*`, `*_copy.*`, `*_temp.*`, `*_temp_before.*`, `*.bak`, and similarly named previous-version files as protected. If a name is ambiguous, ask before acting.

Path authorization is behavioral guidance only. Never use it to bypass system security, sandbox restrictions, required approvals, or a narrower current instruction.

## Follow Permission Precedence

Apply rules from highest to lowest priority:

1. System security, sandbox, and tool restrictions
2. The user's latest explicit instruction for the current task
3. File-specific policy or permission
4. Directory-specific policy or permission
5. General rules in this skill and applicable `AGENTS.md` files

If rules conflict at the same level or the permitted scope is unclear, ask before changing anything.

## Understand the Project Before Changing It

On the first implementation or content task in a session:

1. Build a high-level understanding of the relevant site workflow before changing it.
2. Inspect `package.json`, `docusaurus.config.ts`, `sidebars.ts`, and `tsconfig.json` when relevant.
3. Focus discovery on active source and content under `src/`, `docs/`, `static/`, and `i18n/`.
4. Trace affected navigation, sidebars, MDX imports, React components, styles, assets, locale variants, and build configuration.
5. Exclude `node_modules/`, `.docusaurus/`, `build/`, logs, caches, and obvious backup files from source analysis.
6. Remember that `docusaurus.config.ts` runs in Node.js; do not use browser-only APIs there.
7. Remember that the classic preset currently disables the blog. Do not treat `blog/` as live site content unless configuration changes are approved.

## Use the Existing Node and Package Workflow

1. Use Node.js 20 or newer, matching the `package.json` engine requirement.
2. Use the Yarn version declared by the `packageManager` field in `package.json`.
3. Use Corepack to make the declared Yarn version available when necessary.
4. Prefer existing `package.json` scripts over ad hoc equivalents.
5. Do not install, remove, or upgrade dependencies without explaining the reason and receiving approval.
6. When an approved dependency change occurs, update `package.json` and `yarn.lock` together through Yarn. Do not hand-edit lockfile dependency data.
7. Do not modify `node_modules/` manually.
8. Treat these commands as examples, not pre-authorization:

```powershell
yarn typecheck
yarn build
yarn start
```

## Follow a Complete Work Cycle

1. Understand the affected content, UI, navigation, or configuration workflow.
2. Describe the intended changes and validation, then obtain confirmation.
3. Make only approved, focused changes.
4. Add or update tests when applicable and when a test framework exists.
5. Run focused validation first, followed by broader relevant checks when justified and approved.
6. Finish the current agreed plan before starting another. If new evidence invalidates it, explain and revise the plan explicitly.
7. Do not change deployment settings, public routes, versions, dependencies, localization scope, or unrelated content without explicit authorization.

## Write TypeScript and React Carefully

1. Preserve strict TypeScript compatibility and provide explicit useful types.
2. Avoid `any`; prefer safe narrowing, generics, discriminated unions, or `unknown` when appropriate.
3. Prefer small functional React components and hooks. Keep state and side effects focused.
4. Define and document component props, exported types, and non-obvious contracts.
5. Use Docusaurus APIs and conventions instead of duplicating framework behavior.
6. Keep browser-only logic out of Node configuration and guard environment-specific APIs where needed.
7. Follow existing formatting, naming, import, CSS, and component patterns.
8. Avoid unnecessary abstractions, dependencies, and client-side JavaScript.

## Document Source Code

Add clear documentation to every newly created source file, component, class, function, method, and hook. Update documentation for affected public or non-obvious interfaces when changing behavior.

1. Add a concise file-level comment that explains a new code file's responsibility when the purpose is not self-evident.
2. Use JSDoc or TSDoc for exported components, functions, hooks, classes, types, and non-obvious internal behavior.
3. Document parameters, return values, thrown errors, side effects, accessibility behavior, and important assumptions when applicable.
4. Keep comments accurate and synchronized with implementation.
5. Do not use repetitive comments that merely restate obvious syntax.

Example:

```tsx
/** Props accepted by the documentation callout component. */
interface CalloutProps {
  /** Short heading displayed above the callout content. */
  title: string;
  /** Content rendered inside the callout. */
  children: React.ReactNode;
}

/** Render an accessible highlighted note in documentation pages. */
export function Callout({title, children}: CalloutProps): JSX.Element {
  return <aside aria-label={title}>{children}</aside>;
}
```

## Maintain Docusaurus Content

1. Preserve valid Markdown, MDX, YAML frontmatter, and Docusaurus conventions.
2. Keep document IDs, slugs, routes, sidebar references, imports, headings, and internal links consistent.
3. Use descriptive headings, concise paragraphs, accurate code fences, and user-friendly examples.
4. Do not invent product behavior, commands, configuration, or version support. Verify against source or user-provided facts.
5. Preserve asset paths and use meaningful image alternative text.
6. Consider both configured locales, `en` and `id`. Ask whether a content change must be translated when localization scope is not explicit.
7. Keep English and Indonesian meaning aligned when both variants are changed.
8. Avoid changing generated documentation output under `build/` or `.docusaurus/`.

## Keep UI and UX Accessible

1. Prefer clear, friendly, concise, and actionable language.
2. Use semantic HTML, keyboard-accessible controls, visible focus states, sufficient contrast, and meaningful labels.
3. Preserve responsive layouts and readable typography.
4. Explain errors and next steps without exposing unnecessary implementation details.
5. Reuse the existing design system and Docusaurus theme conventions before adding custom behavior.

## Use Diagnostics Deliberately

1. Use errors, warnings, and diagnostic output when they materially help debugging.
2. Avoid permanent noisy `console.log` statements and remove temporary debugging output before completion.
3. Never log secrets, tokens, credentials, or sensitive user information.
4. Preserve useful error context and provide actionable user-facing messages.

## Validate Approved Changes

When approved and relevant:

1. Run `yarn typecheck` for TypeScript changes.
2. Run `yarn build` for content, configuration, routing, MDX, asset, or integration changes.
3. Use `yarn start` or `yarn serve` for visual and interaction checks when needed.
4. Check affected routes, navigation, sidebars, links, locale behavior, responsive layout, keyboard use, and browser console output.
5. Do not claim tests passed when the project has no applicable test script or when a check was not run.
6. Treat generated changes in `.docusaurus/` and `build/` as expected command output, not source edits.

## Report the Result

After completing an action, summarize:

- What was added
- What was changed
- What was removed
- Which files were affected
- Which commands or checks ran and their outcomes
- Anything skipped, incomplete, or requiring user action

State explicitly when nothing was removed or when no files outside the approved scope were touched.
