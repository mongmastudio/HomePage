/*
  i18n scaffold — matches the original Mongma Studio.html dictionary
  exactly (ko/en/zh). Designed so additional keys and locales can be
  added later without refactoring components that read from it.
*/

export type LanguageCode = "ko" | "en" | "zh";

export const languages: { code: LanguageCode; label: string; sub: string }[] = [
  { code: "ko", label: "한국어", sub: "Korean" },
  { code: "en", label: "English", sub: "영어" },
  { code: "zh", label: "简体中文", sub: "중국어 간체" },
];

export const i18n = {
  ko: {
    navHome: "Home",
    navGames: "Games",
    navPress: "Press Kit",
    navSupport: "Support",
    navContact: "Contact",
    navCta: "Wishlist on Steam",
    langLabel: "한국어",
  },
  en: {
    navHome: "Home",
    navGames: "Games",
    navPress: "Press Kit",
    navSupport: "Support",
    navContact: "Contact",
    navCta: "Wishlist on Steam",
    langLabel: "English",
  },
  zh: {
    navHome: "首页",
    navGames: "游戏",
    navPress: "媒体资料包",
    navSupport: "支持",
    navContact: "联系我们",
    navCta: "在 Steam 上添加愿望单",
    langLabel: "简体中文",
  },
} as const;

export type I18nDict = (typeof i18n)[LanguageCode];

export const defaultLanguage: LanguageCode = "ko";

export function htmlLangFor(code: LanguageCode): string {
  return code === "zh" ? "zh-Hans" : code;
}
