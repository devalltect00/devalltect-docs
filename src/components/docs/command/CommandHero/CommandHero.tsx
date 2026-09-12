/**
 * ============================================================================
 * Documentation Component
 * Component: CommandHero
 * ============================================================================
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import { Badge, Card, Divider, Grid, Heading, Icon, Tag } from "../../";

import styles from "./CommandHero.module.css";

import type { CommandHeroProps } from "./types";
import type { BadgeVariant } from "../../common/Badge";

/**
 * Infer a semantic badge style from a user-facing command status.
 */
function resolveStatusVariant(status: string): BadgeVariant {
  const normalizedStatus = status.toLowerCase();

  if (
    normalizedStatus.includes("blocked") ||
    normalizedStatus.includes("unavailable") ||
    normalizedStatus.includes("error")
  ) {
    return "danger";
  }

  if (
    normalizedStatus.includes("experimental") ||
    normalizedStatus.includes("beta") ||
    normalizedStatus.includes("limited") ||
    normalizedStatus.includes("in progress")
  ) {
    return "warning";
  }

  if (normalizedStatus.includes("deprecated")) {
    return "neutral";
  }

  if (
    normalizedStatus.includes("stable") ||
    normalizedStatus.includes("recommended") ||
    normalizedStatus.includes("available")
  ) {
    return "success";
  }

  return "info";
}

export default function CommandHero({
  command,
  title,
  description,
  category,
  status,
  statusVariant,
  syntax,
  tags = [],
  links = [],
  className,
  ...props
}: CommandHeroProps) {
  return (
    <section className={clsx(styles.hero, className)} {...props}>
      <Card>
        <Heading
          level={1}
          icon={<Icon name="command" />}
          title={title}
          subtitle={description}
          badge={
            <Badge variant={statusVariant ?? resolveStatusVariant(status)}>
              {status}
            </Badge>
          }
          className={styles.heading}
        />

        <div className={styles.commandRow}>
          <span className={styles.label}>
            {translate({
              id: "docs.command.hero.commandLabel",
              message: "Command",
            })}
          </span>

          <code className={styles.command}>{command}</code>
        </div>

        <Grid columns={2}>
          <Card
            title={translate({
              id: "docs.command.hero.categoryLabel",
              message: "Category",
            })}
            icon={<Icon name="package" />}
          >
            <Tag>{category}</Tag>
          </Card>

          <Card
            title={translate({
              id: "docs.command.hero.quickCommandLabel",
              message: "Quick Command",
            })}
            icon={<Icon name="command" />}
          >
            <code className={styles.syntax}>{syntax}</code>
          </Card>
        </Grid>

        {tags.length > 0 && (
          <>
            <Divider />

            <div className={styles.tags}>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </>
        )}

        {links.length > 0 && (
          <>
            <Divider />

            <nav
              className={styles.links}
              aria-label={translate({
                id: "docs.command.hero.quickNavigationLabel",
                message: "Quick navigation",
              })}
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </nav>
          </>
        )}
      </Card>
    </section>
  );
}
