export const site = {
  studioName: "Mongma Studio",
  studioNameKo: "몽마 스튜디오",
  subtitle: "Game Studio",
  description:
    "Mongma Studio — a small indie game studio. 몽마 스튜디오. 손으로 다듬은 세계를 만듭니다.",
  logo: "/assets/mongma-studio-logo.png",
  footerNote:
    "Mongma Studio \n몽마 스튜디오. 작은 인디 게임 스튜디오. \n손으로 다듬은 세계를 만듭니다.",
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
  copyright: "© 2026 Mongma Studio. All rights reserved.",
  madeBy: "Made by hand · 손으로 만든 사이트 · Seoul",
} as const;

export type Site = typeof site;
