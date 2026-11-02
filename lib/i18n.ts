// Bilingual text helper. English is the main language; Indonesian is second.
// The active language lives in the "lang" cookie (default "en").
// Server Components: `await getLang()` from lib/i18n.server.ts.
// Client Components: `useT()` / `useLang()` from components/LangProvider.tsx.

export type Lang = "en" | "id";

export type Localized = { en: string; id: string };

export const LANGS: Lang[] = ["en", "id"];
export const DEFAULT_LANG: Lang = "en";
export const LANG_COOKIE = "lang";

export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "id";
}

// Plain strings (numbers, technical terms) are the same in both languages.
export function t(field: Localized | string, lang: Lang = DEFAULT_LANG): string {
  return typeof field === "string" ? field : field[lang];
}
