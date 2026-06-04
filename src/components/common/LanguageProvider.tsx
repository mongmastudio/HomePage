"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  htmlLangFor,
  i18n,
  type I18nDict,
  type LanguageCode,
} from "@/content/i18n";

type Ctx = {
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  t: I18nDict;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(defaultLanguage);

  const setLang = useCallback((l: LanguageCode) => {
    setLangState(l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = htmlLangFor(l);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLangFor(lang);
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: i18n[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
