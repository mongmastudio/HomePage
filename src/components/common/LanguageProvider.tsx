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
  type Localized,
  type LanguageCode,
} from "@/content/i18n";

type Ctx = {
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  /** Resolve a Localized value to the current language. */
  tr: (value: Localized) => string;
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

  const tr = useCallback((value: Localized) => value[lang], [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, tr }),
    [lang, setLang, tr],
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
