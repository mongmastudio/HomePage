/*
  i18n core. Language switching is client-side React state (see
  LanguageProvider). Every user-facing string is a `Localized` value
  ({ ko, en, zh }) and is rendered through `tr()` from useLanguage().
*/

export type LanguageCode = "ko" | "en" | "zh";

/** A single user-facing string in all supported locales. */
export type Localized = { ko: string; en: string; zh: string };

export const languages: { code: LanguageCode; label: string; sub: string }[] = [
  { code: "ko", label: "한국어", sub: "Korean" },
  { code: "en", label: "English", sub: "영어" },
  { code: "zh", label: "简体中文", sub: "중국어 간체" },
];

export const defaultLanguage: LanguageCode = "ko";

export function htmlLangFor(code: LanguageCode): string {
  return code === "zh" ? "zh-Hans" : code;
}
