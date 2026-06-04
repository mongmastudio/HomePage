"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Ctx = {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
};

const MobileMenuContext = createContext<Ctx | null>(null);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const value = useMemo<Ctx>(() => ({ open, setOpen, toggle }), [open, toggle]);
  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu(): Ctx {
  const ctx = useContext(MobileMenuContext);
  if (!ctx)
    throw new Error("useMobileMenu must be used within MobileMenuProvider");
  return ctx;
}
