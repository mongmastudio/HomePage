import type { Localized } from "./i18n";
import { site } from "./site";

/** Brand/proper-noun identical in every locale. */
const same = (s: string): Localized => ({ ko: s, en: s, zh: s });

export const factsheet: {
  label: Localized;
  value: Localized;
  isContact?: boolean;
}[] = [
  {
    label: { ko: "게임 제목", en: "Game Title", zh: "游戏标题" },
    value: same("Revenant Survivors"),
  },
  {
    label: { ko: "개발사", en: "Developer", zh: "开发商" },
    value: same("Mongma Studio"),
  },
  {
    label: { ko: "퍼블리셔", en: "Publisher", zh: "发行商" },
    value: same("Mongma Studio"),
  },
  {
    label: { ko: "장르", en: "Genre", zh: "类型" },
    value: {
      ko: "액션 호드 서바이벌 로그라이트",
      en: "Action Horde Survival Roguelite",
      zh: "动作尸潮生存 Roguelite",
    },
  },
  {
    label: { ko: "플랫폼", en: "Platform", zh: "平台" },
    value: same("PC · Steam"),
  },
  {
    label: { ko: "출시일", en: "Release Date", zh: "发售日期" },
    value: {
      ko: "출시 예정 · 추후 공개",
      en: "Coming Soon · TBA",
      zh: "即将推出 · 待公布",
    },
  },
  {
    label: { ko: "상태", en: "Status", zh: "状态" },
    value: { ko: "개발 중", en: "In Development", zh: "开发中" },
  },
  {
    label: { ko: "지원 언어", en: "Languages", zh: "语言" },
    value: {
      ko: "한국어 · English · 简体中文",
      en: "Korean · English · Simplified Chinese",
      zh: "韩语 · 英语 · 简体中文",
    },
  },
  {
    label: { ko: "가격", en: "Price", zh: "价格" },
    value: { ko: "추후 공개", en: "TBA", zh: "待公布" },
  },
  {
    label: { ko: "문의", en: "Contact", zh: "联系方式" },
    value: same(site.email.general),
    isContact: true,
  },
];

export const downloads: { lbl: Localized; title: Localized; size: Localized }[] = [
  {
    lbl: { ko: "번들", en: "Bundle", zh: "打包" },
    title: { ko: "전체 다운로드", en: "Download All", zh: "全部下载" },
    size: {
      ko: "모든 에셋 · ZIP · ~ TBA MB",
      en: "All assets · ZIP · ~ TBA MB",
      zh: "所有资源 · ZIP · ~ TBA MB",
    },
  },
  {
    lbl: { ko: "브랜드", en: "Brand", zh: "品牌" },
    title: { ko: "로고 다운로드", en: "Download Logos", zh: "下载 Logo" },
    size: {
      ko: "PNG · SVG · 라이트/다크",
      en: "PNG · SVG · light/dark",
      zh: "PNG · SVG · 浅色/深色",
    },
  },
  {
    lbl: { ko: "아트", en: "Art", zh: "美术" },
    title: { ko: "키아트 다운로드", en: "Download Key Art", zh: "下载关键美术图" },
    size: {
      ko: "1920×1080 · 4K · 변형",
      en: "1920×1080 · 4K · variants",
      zh: "1920×1080 · 4K · 多版本",
    },
  },
  {
    lbl: same("Steam"),
    title: {
      ko: "캡슐 이미지 다운로드",
      en: "Download Capsule Images",
      zh: "下载商店胶囊图",
    },
    size: {
      ko: "헤더 · 메인 · 스몰",
      en: "Header · main · small",
      zh: "头图 · 主图 · 小图",
    },
  },
  {
    lbl: { ko: "인게임", en: "In-game", zh: "游戏内" },
    title: { ko: "스크린샷 다운로드", en: "Download Screenshots", zh: "下载截图" },
    size: { ko: "PNG · TBA 팩", en: "PNG · TBA pack", zh: "PNG · 待定包" },
  },
  {
    lbl: { ko: "비디오", en: "Video", zh: "视频" },
    title: { ko: "트레일러 다운로드", en: "Download Trailer", zh: "下载预告片" },
    size: same("MP4 · 1080p · 4K"),
  },
  {
    lbl: { ko: "문서", en: "Document", zh: "文档" },
    title: { ko: "보도자료 다운로드", en: "Download Press Release", zh: "下载新闻稿" },
    size: same("PDF · KR / EN / SC"),
  },
  {
    lbl: { ko: "문서", en: "Document", zh: "文档" },
    title: {
      ko: "게임 소개 다운로드",
      en: "Download Game Description",
      zh: "下载游戏介绍",
    },
    size: { ko: "PDF · 짧은 · 긴", en: "PDF · short · long", zh: "PDF · 简短 · 详细" },
  },
  {
    lbl: { ko: "문서", en: "Document", zh: "文档" },
    title: {
      ko: "회사 소개 다운로드",
      en: "Download Company Description",
      zh: "下载公司介绍",
    },
    size: {
      ko: "PDF · 스튜디오 프로필",
      en: "PDF · studio profile",
      zh: "PDF · 工作室简介",
    },
  },
];

export const pressInquiry: {
  num: string;
  title: Localized;
  email: string;
  uses: Localized;
}[] = [
  {
    num: "No.01",
    title: { ko: "일반 문의", en: "General Contact", zh: "一般联系" },
    email: site.email.general,
    uses: {
      ko: "일반 문의 · 홈페이지 문의 · 기타 문의 — 어디로 보내야 할지 모르겠다면 이곳으로 보내 주세요.",
      en: "General questions, website questions, and anything that does not fit elsewhere.",
      zh: "一般咨询、网站咨询以及不知道该发到哪里的其他问题，请发到这里。",
    },
  },
  {
    num: "No.02",
    title: { ko: "프레스 / 미디어", en: "Press / Media", zh: "媒体 / 新闻" },
    email: site.email.press,
    uses: {
      ko: "미디어 문의 · 보도자료 문의 · 기사 게재 문의 · Press Kit 관련 문의.",
      en: "Media inquiries, press release requests, article coverage, and Press Kit questions.",
      zh: "媒体咨询、新闻稿咨询、报道刊登咨询以及媒体资料包相关问题。",
    },
  },
  {
    num: "No.03",
    title: { ko: "크리에이터 문의", en: "Creator Inquiry", zh: "创作者咨询" },
    email: site.email.creators,
    uses: {
      ko: "크리에이터 문의 · 게임 키 요청 · 스트리밍 / 영상 제작 관련 문의.",
      en: "Creator inquiries, game key requests, and streaming or video content questions.",
      zh: "创作者咨询、游戏 Key 请求、直播 / 视频制作相关咨询。",
    },
  },
  {
    num: "No.04",
    title: { ko: "비즈니스", en: "Business", zh: "商务" },
    email: site.email.business,
    uses: {
      ko: "비즈니스 문의 · 퍼블리셔 문의 · 파트너십 · 행사 협업 문의.",
      en: "Business inquiries, publisher inquiries, partnerships, and event collaborations.",
      zh: "商务咨询、发行商咨询、合作伙伴关系与活动合作。",
    },
  },
];
