/**
 * ============================================================================
 * Documentation Component
 * Component: CopyButton
 * ============================================================================
 */

import { useState } from "react";

import clsx from "clsx";

import styles from "./CopyButton.module.css";

import type { CopyButtonProps } from "./types";

export default function CopyButton({
  text,
  label = "Copy",
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      console.error("Unable to copy text.");
    }
  }

  return (
    <button
      type="button"
      className={clsx(styles.button, className)}
      onClick={handleCopy}
      {...props}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
