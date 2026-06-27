import type { Localized } from "./i18n";

export const site = {
  studioName: "Mongma Studio",
  studioNameKo: "몽마 스튜디오",
  subtitle: "Game Studio",
  description:
    "Mongma Studio — a small indie game studio. 몽마 스튜디오. 손으로 다듬은 세계를 만듭니다.",
  logo: "/assets/mongma-studio-logo.png",
  // Footer brand note — keeps the "Mongma Studio" wordmark, localizes the rest. \n preserved.
  footerNote: {
    ko: "Mongma Studio \n몽마 스튜디오. 작은 인디 게임 스튜디오. \n손으로 다듬은 세계를 만듭니다.",
    en: "Mongma Studio \nA small indie game studio. \nWe create handcrafted worlds.",
    zh: "Mongma Studio \n小型独立游戏工作室。\n打造手工打磨的世界。",
  } satisfies Localized,
  email: {
    display: "MONGMASTUDIO@GMAIL.COM",
    general: "contact@mongma-studio.com",
    press: "press@mongma-studio.com",
    creators: "creators@mongma-studio.com",
    business: "business@mongma-studio.com",
  },
  social: {
    steamRevenant:
      "https://store.steampowered.com/app/4617500/Revenant_Survivors/",
    youtubeChannel: "https://www.youtube.com/@mongma_studio",
    youtubeTrailer: "https://www.youtube.com/watch?v=_Ih3Dyanxxc",
    youtubeTrailerEmbed: "https://www.youtube.com/embed/_Ih3Dyanxxc",
    x: "https://x.com/MongmaStudio",
    bluesky: "https://bsky.app/profile/mongmastudio.bsky.social",
    discord: "https://discord.gg/Gz2CtFPYBK",
    bilibili: "https://space.bilibili.com/3706949717723779",
    qq: "https://qm.qq.com/q/2JrWB3a2He",
    qqNumber: "993073396",
  },
  copyright: {
    ko: "© 2026 Mongma Studio. 모든 권리 보유.",
    en: "© 2026 Mongma Studio. All rights reserved.",
    zh: "© 2026 Mongma Studio. 版权所有。",
  } satisfies Localized,
  madeBy: {
    ko: "손으로 만든 사이트 · 서울",
    en: "Made by hand · Seoul",
    zh: "手工打造的网站 · 首尔",
  } satisfies Localized,
} as const;

export type Site = typeof site;
