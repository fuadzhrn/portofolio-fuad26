"use client";

import { useEffect, useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { useT } from "@/components/LangProvider";
import { ui } from "@/data/ui-strings";

// Copies the email to the clipboard; the label shows "Copied" for 2 seconds.
export default function CopyEmailButton({ email }: { email: string }) {
  const t = useT();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard blocked (e.g. insecure context): leave the label unchanged.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-void-edge px-3 font-jakarta text-xs font-medium text-ink-4 transition-colors hover:bg-void-raised hover:text-ink-2"
    >
      {copied ? (
        <IconCheck size={13} strokeWidth={2} />
      ) : (
        <IconCopy size={13} strokeWidth={1.75} />
      )}
      {copied ? t(ui.copied) : t(ui.copyEmail)}
    </button>
  );
}
