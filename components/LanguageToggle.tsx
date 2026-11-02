"use client";

import { useRouter } from "next/navigation";
import { LANGS, LANG_COOKIE, type Lang } from "@/lib/i18n";
import { useLang, useT } from "@/components/LangProvider";
import { ui } from "@/data/ui-strings";

type Props = {
  // Stacks EN over ID below lg (72px tablet sidebar).
  compact?: boolean;
};

// One year; read on the server by getLang() (lib/i18n.server.ts).
function writeLangCookie(lang: Lang) {
  document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageToggle({ compact = false }: Props) {
  const router = useRouter();
  const lang = useLang();
  const t = useT();

  const choose = (next: Lang) => {
    if (next === lang) return;
    writeLangCookie(next);
    router.refresh();
  };

  return (
    <div
      role="group"
      aria-label={t(ui.language)}
      className={`flex items-center font-jakarta ${compact ? "flex-col gap-0.5 lg:flex-row lg:gap-1.5" : "gap-1.5"}`}
      style={{ fontSize: 10, letterSpacing: "0.08em" }}
    >
      {LANGS.map((code, i) => (
        <span key={code} className="contents">
          {i > 0 && (
            <span
              aria-hidden
              className={compact ? "hidden lg:inline" : undefined}
              style={{ color: "#2A2A28" }}
            >
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => choose(code)}
            aria-pressed={code === lang}
            aria-label={code === "en" ? t(ui.switchToEnglish) : t(ui.switchToIndonesian)}
            className="cursor-pointer uppercase transition-colors duration-150"
            style={{ color: code === lang ? "#E8E8E4" : "#555550" }}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
