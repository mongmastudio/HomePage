import type { Metadata } from "next";
import { LanguageProvider } from "@/components/common/LanguageProvider";
import { MobileMenuProvider } from "@/components/common/MobileMenuController";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Lightbox from "@/components/common/Lightbox";
import { GOOGLE_FONTS_HREF } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mongma Studio — 몽마 스튜디오",
  description:
    "Mongma Studio — a small indie game studio. 몽마 스튜디오. 손으로 다듬은 세계를 만듭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body>
        <LanguageProvider>
          <MobileMenuProvider>
            <Navbar />
            <MobileMenu />
            <div className="page">{children}</div>
            <Footer />
            <Lightbox />
          </MobileMenuProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
