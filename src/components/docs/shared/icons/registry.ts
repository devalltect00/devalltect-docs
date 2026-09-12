/**
 * ============================================================================
 * Documentation Icon Registry
 * ============================================================================
 *
 * Central registry for all semantic icons used throughout the documentation
 * component library.
 *
 * Components should reference semantic names (for example "warning",
 * "workflow", or "python") rather than hardcoding emojis or depending on a
 * specific icon library.
 *
 * This abstraction allows the documentation platform to migrate from emojis
 * to SVG icons (Lucide, Heroicons, Font Awesome, custom icons, etc.) without
 * changing component APIs or MDX content.
 *
 * Categories
 * ----------
 *
 * • Status
 * • Commands
 * • Architecture
 * • Documentation
 * • Files & Projects
 * • Development
 * • Actions
 *
 * ============================================================================
 */

import type { IconName } from "../../common/Icon";

/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Maps semantic icon names to their visual representation.
 *
 * Version 1 uses emojis as lightweight placeholders.
 * Future versions may replace these values with React components or SVG icons.
 */
export const ICON_REGISTRY: Record<IconName, string> = {
  /* ---------------------------------------------------------------------- */
  /* Status                                                                 */
  /* ---------------------------------------------------------------------- */

  info: "ℹ️",
  note: "📝",
  tip: "💡",
  success: "✅",
  warning: "⚠️",
  danger: "❌",

  /* ---------------------------------------------------------------------- */
  /* Commands                                                               */
  /* ---------------------------------------------------------------------- */

  command: "🚀",
  terminal: "💻",
  workflow: "🔄",
  pipeline: "🪄",
  release: "🏷️",

  /* ---------------------------------------------------------------------- */
  /* Architecture                                                           */
  /* ---------------------------------------------------------------------- */

  architecture: "🏗️",
  layer: "🧱",
  dependency: "📦",
  diagram: "📊",
  "design-pattern": "🧩",

  /* ---------------------------------------------------------------------- */
  /* Documentation                                                          */
  /* ---------------------------------------------------------------------- */

  feature: "✨",
  table: "📋",
  compare: "⚖️",
  image: "🖼️",
  example: "📝",
  requirement: "📌",

  /* ---------------------------------------------------------------------- */
  /* Files & Projects                                                       */
  /* ---------------------------------------------------------------------- */

  directory: "📁",
  file: "📄",
  configuration: "⚙️",
  package: "📦",
  project: "📚",

  /* ---------------------------------------------------------------------- */
  /* Development                                                            */
  /* ---------------------------------------------------------------------- */

  python: "🐍",
  docker: "🐳",
  git: "🌿",
  github: "🐙",
  testing: "🧪",
  security: "🛡️",
  network: "🌐",

  /* ---------------------------------------------------------------------- */
  /* Actions                                                                */
  /* ---------------------------------------------------------------------- */

  copy: "📋",
  play: "▶️",

  /* ---------------------------------------------------------------------- */
  /* Additional                                                                */
  /* ---------------------------------------------------------------------- */

  timeline: "🕒",
};

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Returns the icon associated with a semantic icon name.
 *
 * @param name
 * Semantic icon name.
 *
 * @returns
 * Icon representation.
 */
export function getIcon(name: IconName): string {
  return ICON_REGISTRY[name];
}
