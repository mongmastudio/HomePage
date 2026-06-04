/*
  Google Fonts URL used by <link> tag in app/layout.tsx.

  The original Mongma Studio.html embedded 400 woff2 subsets for
  DM Sans + Gowun Batang at build time. We load the same families
  (plus Instrument Serif, Gowun Dodum, Noto Sans/Serif SC, JetBrains
  Mono — all referenced by the original :root font stack but not
  embedded) from Google Fonts so tokens.css's literal family names
  resolve identically. The rendered result is visually equivalent.

  Weights and styles match the original token stack and observed
  weights in the original CSS (.h-display/.h-section weight 400;
  body weights 300/400/500/700; italic 400 for hero/note paragraphs).
*/
export const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2" +
  "?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400" +
  "&family=Gowun+Batang" +
  "&family=Gowun+Dodum" +
  "&family=Instrument+Serif:ital@0;1" +
  "&family=JetBrains+Mono:wght@400;500" +
  "&family=Noto+Sans+SC:wght@400;500" +
  "&family=Noto+Serif+SC" +
  "&display=swap";
