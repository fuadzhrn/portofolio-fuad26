// Bilingual text helper. English is the main language; Indonesian is second.
// Components render `en` for now — the sidebar language toggle comes later.

export type Lang = "en" | "id";

export type Localized = { en: string; id: string };

// Plain strings (numbers, technical terms) are the same in both languages.
export function t(field: Localized | string, lang: Lang = "en"): string {
  return typeof field === "string" ? field : field[lang];
}
