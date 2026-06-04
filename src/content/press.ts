import { site } from "./site";

export const factsheet: { label: string; value: string }[] = [
  { label: "Game Title", value: "Revenant Survivors" },
  { label: "Developer", value: "Mongma Studio" },
  { label: "Publisher", value: "Mongma Studio" },
  { label: "Genre", value: "Action Horde Survival Roguelite" },
  { label: "Platform", value: "PC · Steam" },
  { label: "Release Date", value: "Coming Soon · TBA" },
  { label: "Status", value: "In Development" },
  { label: "Languages", value: "한국어 · English · 简体中文" },
  { label: "Price", value: "TBA" },
  { label: "Contact", value: site.email.general, isContact: true } as never,
];

export const downloads = [
  {
    lbl: "Bundle",
    title: "Download All",
    size: "All assets · ZIP · ~ TBA MB",
  },
  { lbl: "Brand", title: "Download Logos", size: "PNG · SVG · light/dark" },
  { lbl: "Art", title: "Download Key Art", size: "1920×1080 · 4K · variants" },
  {
    lbl: "Steam",
    title: "Download Capsule Images",
    size: "Header · main · small",
  },
  { lbl: "In-game", title: "Download Screenshots", size: "PNG · TBA pack" },
  { lbl: "Video", title: "Download Trailer", size: "MP4 · 1080p · 4K" },
  {
    lbl: "Document",
    title: "Download Press Release",
    size: "PDF · KR / EN / SC",
  },
  {
    lbl: "Document",
    title: "Download Game Description",
    size: "PDF · short · long",
  },
  {
    lbl: "Document",
    title: "Download Company Description",
    size: "PDF · studio profile",
  },
];

export const pressInquiry = [
  {
    num: "No.01",
    title: "General Contact",
    email: site.email.general,
    uses:
      "일반 문의 · 홈페이지 문의 · 기타 문의 — 어디로 보내야 할지 모를 땐 이쪽으로.",
  },
  {
    num: "No.02",
    title: "Press / Media",
    email: site.email.press,
    uses: "미디어 문의 · 보도자료 문의 · 기사 게재 문의 · Press Kit 관련 문의.",
  },
  {
    num: "No.03",
    title: "Creator Inquiry",
    email: site.email.creators,
    uses: "크리에이터 문의 · 게임 키 요청 · 스트리밍 / 영상 제작 문의.",
  },
  {
    num: "No.04",
    title: "Business",
    email: site.email.business,
    uses:
      "비즈니스 문의 · 퍼블리셔 문의 · 파트너십 · 행사 · B2B · 투자 · 협업 문의.",
  },
];
