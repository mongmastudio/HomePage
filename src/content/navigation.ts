export type NavLink = { href: string; label: string; route?: string };
export type NavGroup = {
  type: "link" | "dropdown";
  href?: string;
  route?: string;
  label: string;
  menu?: { label: string; small: string; href: string }[];
};

export const primaryNav: NavGroup[] = [
  { type: "link", href: "/", route: "/", label: "Home" },
  {
    type: "dropdown",
    label: "Games",
    menu: [
      { label: "All Games", small: "전체 게임", href: "/games" },
      {
        label: "Revenant Survivors",
        small: "In Development",
        href: "/games/revenant-survivors",
      },
      { label: "Future Projects", small: "준비 중", href: "/games" },
    ],
  },
  { type: "link", href: "/press", route: "/press", label: "Press Kit" },
  { type: "link", href: "/support", route: "/support", label: "Support" },
  { type: "link", href: "/contact", route: "/contact", label: "Contact" },
];

export type MobileItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "section"; label: string; subItems: { label: string; href: string }[] };

export const mobileNav: MobileItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "section",
    label: "Games",
    subItems: [
      { label: "All Games", href: "/games" },
      { label: "Revenant Survivors", href: "/games/revenant-survivors" },
      { label: "Future Projects", href: "/games" },
    ],
  },
  { kind: "link", label: "Press Kit", href: "/press" },
  { kind: "link", label: "Support", href: "/support" },
  { kind: "link", label: "Contact", href: "/contact" },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Studio",
    links: [
      { href: "/", label: "Home" },
      { href: "/games", label: "Games" },
      { href: "/support", label: "Support" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Game",
    links: [
      { href: "/games/revenant-survivors", label: "Revenant Survivors" },
      { href: "/press", label: "Press Kit" },
      { href: "#press-kit-drive-placeholder", label: "Press Kit · Drive" },
      {
        href: "https://www.youtube.com/watch?v=_Ih3Dyanxxc",
        label: "Trailer",
      },
    ],
  },
  {
    heading: "Community",
    links: [
      {
        href: "https://store.steampowered.com/app/4617500/Revenant_Survivors/",
        label: "Steam",
      },
      { href: "https://www.youtube.com/@mongma_studio", label: "YouTube" },
      { href: "https://x.com/MongmaStudio", label: "X" },
      {
        href: "https://bsky.app/profile/mongmastudio.bsky.social",
        label: "Bluesky",
      },
      { href: "https://discord.gg/Gz2CtFPYBK", label: "Discord" },
      {
        href: "https://space.bilibili.com/3706949717723779",
        label: "Bilibili",
      },
      { href: "https://qm.qq.com/q/2JrWB3a2He", label: "QQ · 993073396" },
    ],
  },
];

// Per-page community lists — original Mongma Studio.html uses different
// orderings on the home, Revenant detail, and Contact pages. Verbatim from
// reference/Mongma Studio.html.

const STEAM = "https://store.steampowered.com/app/4617500/Revenant_Survivors/";
const YOUTUBE = "https://www.youtube.com/@mongma_studio";
const X_URL = "https://x.com/MongmaStudio";
const BLUESKY = "https://bsky.app/profile/mongmastudio.bsky.social";
const DISCORD = "https://discord.gg/Gz2CtFPYBK";
const BILIBILI = "https://space.bilibili.com/3706949717723779";
const QQ_URL = "https://qm.qq.com/q/2JrWB3a2He";
const QQ_LABEL = "QQ · 993073396";

export const communityChannels: NavLink[] = [
  { href: STEAM, label: "Steam" },
  { href: YOUTUBE, label: "YouTube" },
  { href: X_URL, label: "X" },
  { href: BLUESKY, label: "Bluesky" },
  { href: DISCORD, label: "Discord" },
  { href: BILIBILI, label: "Bilibili" },
  { href: QQ_URL, label: QQ_LABEL },
];

export const revenantCommunityChannels: NavLink[] = [
  { href: DISCORD, label: "Join Discord" },
  { href: STEAM, label: "Steam Page" },
  { href: YOUTUBE, label: "YouTube" },
  { href: X_URL, label: "X" },
  { href: BLUESKY, label: "Bluesky" },
  { href: BILIBILI, label: "Bilibili" },
  { href: QQ_URL, label: QQ_LABEL },
];

export const contactCommunityChannels: NavLink[] = [
  { href: DISCORD, label: "Discord" },
  { href: X_URL, label: "X" },
  { href: BLUESKY, label: "Bluesky" },
  { href: YOUTUBE, label: "YouTube" },
  { href: STEAM, label: "Steam" },
  { href: BILIBILI, label: "Bilibili" },
  { href: QQ_URL, label: QQ_LABEL },
];
