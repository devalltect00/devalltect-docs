/**
 * -----------------------------------------------------------------------------
 * Docs UI Component
 * Component: InfoBox
 * -----------------------------------------------------------------------------
 */

import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import Heading from "../Heading";
import Icon from "../Icon";

import styles from "./InfoBox.module.css";

import type { InfoBoxProps, InfoBoxVariant } from "./types";

/** Return an extractable localized fallback title for an information box. */
function getDefaultTitle(variant: InfoBoxVariant): string {
  switch (variant) {
    case "info":
      return translate({
        id: "docs.infoBox.info",
        message: "Information",
        description: "Default title for an informational documentation callout.",
      });
    case "note":
      return translate({
        id: "docs.infoBox.note",
        message: "Note",
        description: "Default title for a note documentation callout.",
      });
    case "tip":
      return translate({
        id: "docs.infoBox.tip",
        message: "Tip",
        description: "Default title for a tip documentation callout.",
      });
    case "success":
      return translate({
        id: "docs.infoBox.success",
        message: "Success",
        description: "Default title for a successful documentation callout.",
      });
    case "warning":
      return translate({
        id: "docs.infoBox.warning",
        message: "Warning",
        description: "Default title for a warning documentation callout.",
      });
    case "danger":
      return translate({
        id: "docs.infoBox.danger",
        message: "Important",
        description: "Default title for a high-priority documentation callout.",
      });
  }
}

const DEFAULT_ICONS: Record<InfoBoxVariant, React.ReactNode> = {
  info: <Icon name="info" />,
  note: <Icon name="info" />,
  tip: <Icon name="tip" />,
  success: <Icon name="success" />,
  warning: <Icon name="warning" />,
  danger: <Icon name="security" />,
};

/**
 * Documentation information box.
 */
export default function InfoBox({
  title,
  icon,
  children,
  variant = "info",
  className,
  ...props
}: InfoBoxProps) {
  return (
    <aside className={clsx(styles.infoBox, styles[variant], className)} {...props}>
      <Heading
        level={4}
        title={title ?? getDefaultTitle(variant)}
        icon={icon ?? DEFAULT_ICONS[variant]}
        className={styles.infoBoxHeading}
      />

      <div className={styles.content}>{children}</div>
    </aside>
  );
}
