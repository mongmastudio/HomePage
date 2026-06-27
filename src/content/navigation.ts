import type { Localized } from "./i18n";

/** Brand/proper-noun label that is identical in every locale. */
const same = (s: string): Localized => ({ ko: s, en: s, zh: s });

export type NavLink = { href: string; label: Localized; route?: string };
export type NavMenuItem = { label: Localized; small?: Localized; href: string };
export type NavGroup = {
  type: "link" | "dropdown";
  href?: string;
  route?: string;
  label: Localized;
  menu?: NavMenuItem[];
};

/** Nav + mobile CTA button. */
export const navCta: Localized = {
  ko: "Steam 위시리스트에 추가",
  en: "Wishlist on Steam",
  zh: "添加到 Steam 愿望单",
};

export const primaryNav: NavGroup[] = [
  {
    type: "link",
    href: "/",
    route: "/",
    label: { ko: "홈", en: "Home", zh: "首页" },
  },
  {
    type: "dropdown",
    label: { ko: "게임", en: "Games", zh: "游戏" },
    menu: [
      {
        label: { ko: "전체 게임", en: "All Games", zh: "全部游戏" },
        href: "/games",
      },
      {
        label: same("Revenant Survivors"),
        small: { ko: "개발 중", en: "In Development", zh: "开发中" },
        href: "/games/revenant-survivors",
      },
      {
        label: { ko: "향후 프로젝트", en: "Future Projects", zh: "未来项目" },
        small: { ko: "준비 중", en: "In Preparation", zh: "筹备中" },
        href: "/games",
      },
    ],
  },
  {
    type: "link",
    href: "/press",
    route: "/press",
    label: { ko: "프레스 키트", en: "Press Kit", zh: "媒体资料包" },
  },
  {
    type: "link",
    href: "/support",
    route: "/support",
    label: { ko: "지원", en: "Support", zh: "支持" },
  },
  {
    type: "link",
    href: "/contact",
    route: "/contact",
    label: { ko: "문의", en: "Contact", zh: "联系我们" },
  },
];

export type MobileItem =
  | { kind: "link"; label: Localized; href: string }
  | {
      kind: "section";
      label: Localized;
      subItems: { label: Localized; href: string }[];
    };

export const mobileNav: MobileItem[] = [
  { kind: "link", label: { ko: "홈", en: "Home", zh: "首页" }, href: "/" },
  {
    kind: "section",
    label: { ko: "게임", en: "Games", zh: "游戏" },
    subItems: [
      {
        label: { ko: "전체 게임", en: "All Games", zh: "全部游戏" },
        href: "/games",
      },
      {
        label: same("Revenant Survivors"),
        href: "/games/revenant-survivors",
      },
      {
        label: { ko: "향후 프로젝트", en: "Future Projects", zh: "未来项目" },
        href: "/games",
      },
    ],
  },
  {
    kind: "link",
    label: { ko: "프레스 키트", en: "Press Kit", zh: "媒体资料包" },
    href: "/press",
  },
  {
    kind: "link",
    label: { ko: "지원", en: "Support", zh: "支持" },
    href: "/support",
  },
  {
    kind: "link",
    label: { ko: "문의", en: "Contact", zh: "联系我们" },
    href: "/contact",
  },
];

export const footerColumns: { heading: Localized; links: NavLink[] }[] = [
  {
    heading: { ko: "스튜디오", en: "Studio", zh: "工作室" },
    links: [
      { href: "/", label: { ko: "홈", en: "Home", zh: "首页" } },
      { href: "/games", label: { ko: "게임", en: "Games", zh: "游戏" } },
      { href: "/support", label: { ko: "지원", en: "Support", zh: "支持" } },
      {
        href: "/contact",
        label: { ko: "문의", en: "Contact", zh: "联系我们" },
      },
    ],
  },
  {
    heading: { ko: "게임", en: "Game", zh: "游戏" },
    links: [
      {
        href: "/games/revenant-survivors",
        label: same("Revenant Survivors"),
      },
      {
        href: "/press",
        label: { ko: "프레스 키트", en: "Press Kit", zh: "媒体资料包" },
      },
      {
        href: "#press-kit-drive-placeholder",
        label: {
          ko: "프레스 키트 · Drive",
          en: "Press Kit · Drive",
          zh: "媒体资料包 · Drive",
        },
      },
      {
        href: "https://www.youtube.com/watch?v=_Ih3Dyanxxc",
        label: { ko: "트레일러", en: "Trailer", zh: "预告片" },
      },
    ],
  },
  {
    heading: { ko: "커뮤니티", en: "Community", zh: "社区" },
    links: [
      {
        href: "https://store.steampowered.com/app/4617500/Revenant_Survivors/",
        label: same("Steam"),
      },
      { href: "https://www.youtube.com/@mongma_studio", label: same("YouTube") },
      { href: "https://x.com/MongmaStudio", label: same("X") },
      {
        href: "https://bsky.app/profile/mongmastudio.bsky.social",
        label: same("Bluesky"),
      },
      { href: "https://discord.gg/Gz2CtFPYBK", label: same("Discord") },
      {
        href: "https://space.bilibili.com/3706949717723779",
        label: same("Bilibili"),
      },
      { href: "https://qm.qq.com/q/2JrWB3a2He", label: same("QQ · 993073396") },
    ],
  },
];

// Per-page community lists — original Mongma Studio.html uses different
// orderings on the home, Revenant detail, and Contact pages.

const STEAM = "https://store.steampowered.com/app/4617500/Revenant_Survivors/";
const YOUTUBE = "https://www.youtube.com/@mongma_studio";
const X_URL = "https://x.com/MongmaStudio";
const BLUESKY = "https://bsky.app/profile/mongmastudio.bsky.social";
const DISCORD = "https://discord.gg/Gz2CtFPYBK";
const BILIBILI = "https://space.bilibili.com/3706949717723779";
const QQ_URL = "https://qm.qq.com/q/2JrWB3a2He";
const QQ_LABEL = same("QQ · 993073396");

export const communityChannels: NavLink[] = [
  { href: STEAM, label: same("Steam") },
  { href: YOUTUBE, label: same("YouTube") },
  { href: X_URL, label: same("X") },
  { href: BLUESKY, label: same("Bluesky") },
  { href: DISCORD, label: same("Discord") },
  { href: BILIBILI, label: same("Bilibili") },
  { href: QQ_URL, label: QQ_LABEL },
];

export const revenantCommunityChannels: NavLink[] = [
  {
    href: DISCORD,
    label: { ko: "Discord 참여하기", en: "Join Discord", zh: "加入 Discord" },
  },
  {
    href: STEAM,
    label: { ko: "Steam 페이지", en: "Steam Page", zh: "Steam 页面" },
  },
  { href: YOUTUBE, label: same("YouTube") },
  { href: X_URL, label: same("X") },
  { href: BLUESKY, label: same("Bluesky") },
  { href: BILIBILI, label: same("Bilibili") },
  { href: QQ_URL, label: QQ_LABEL },
];

export const contactCommunityChannels: NavLink[] = [
  { href: DISCORD, label: same("Discord") },
  { href: X_URL, label: same("X") },
  { href: BLUESKY, label: same("Bluesky") },
  { href: YOUTUBE, label: same("YouTube") },
  { href: STEAM, label: same("Steam") },
  { href: BILIBILI, label: same("Bilibili") },
  { href: QQ_URL, label: QQ_LABEL },
];
