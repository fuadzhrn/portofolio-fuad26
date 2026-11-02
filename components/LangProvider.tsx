"use client";

import { createContext, useCallback, useContext } from "react";
import { DEFAULT_LANG, t, type Lang, type Localized } from "@/lib/i18n";

// The root layout reads the "lang" cookie on the server and passes it down here,
// so Client Components render the same language as the server.
const LangContext = createContext<Lang>(DEFAULT_LANG);

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang(): Lang {
  return useContext(LangContext);
}

// Returns t() bound to the active language.
export function useT(): (field: Localized | string) => string {
  const lang = useLang();
  return useCallback((field: Localized | string) => t(field, lang), [lang]);
}
