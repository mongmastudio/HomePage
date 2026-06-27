import type { Localized } from "./i18n";

export const supportWhy: { num: Localized; title: Localized; description: Localized }[] = [
  {
    num: { ko: "01 · 스튜디오", en: "01 · Studio", zh: "01 · 工作室" },
    title: {
      ko: "작은 독립 스튜디오",
      en: "Small independent studio",
      zh: "小型独立工作室",
    },
    description: {
      ko: "외부 자본에 휘둘리지 않고, 한 작품 한 작품 천천히 다듬고 싶습니다.",
      en: "We want to refine each game slowly, without being pushed around by outside capital.",
      zh: "我们希望不受外部资本左右，慢慢打磨每一部作品。",
    },
  },
  {
    num: { ko: "02 · 독창성", en: "02 · Originality", zh: "02 · 原创性" },
    title: {
      ko: "독창적인 게임 개발",
      en: "Original game development",
      zh: "原创游戏开发",
    },
    description: {
      ko: "유행 추격이 아닌, 우리만의 세계와 시스템을 만들고 싶습니다.",
      en: "We want to build our own worlds and systems instead of chasing trends.",
      zh: "我们想创造自己的世界与系统，而不是追逐潮流。",
    },
  },
  {
    num: { ko: "03 · 커뮤니티", en: "03 · Community", zh: "03 · 社区" },
    title: {
      ko: "커뮤니티 기반 피드백",
      en: "Community-driven feedback",
      zh: "社区驱动反馈",
    },
    description: {
      ko: "여러분의 피드백이 다음 빌드의 방향과 디테일을 바꿉니다.",
      en: "Your feedback shapes the direction and details of the next build.",
      zh: "你的反馈会影响下一个版本的方向与细节。",
    },
  },
  {
    num: { ko: "04 · 미래", en: "04 · Future", zh: "04 · 未来" },
    title: {
      ko: "향후 데모와 개발일지",
      en: "Future demos & devlogs",
      zh: "未来试玩版与开发日志",
    },
    description: {
      ko: "플레이 가능한 데모, 개발 노트, 비공개 빌드 등을 더 자주 준비하고 싶습니다.",
      en: "We want to prepare playable demos, dev notes, and private builds more often.",
      zh: "我们希望更频繁地准备可玩试玩版、开发笔记与内部版本。",
    },
  },
];

export type SupportButton = {
  label: Localized;
  href?: string;
  disabled?: boolean;
  external?: boolean;
};

export const supportOptions: {
  accent: "violet" | "yellow" | "blue" | "green";
  num: Localized;
  title: Localized;
  description: Localized;
  primary: SupportButton;
  secondary?: SupportButton;
}[] = [
  {
    accent: "violet",
    num: { ko: "A · 개인", en: "A · Personal", zh: "A · 个人" },
    title: { ko: "일회성 후원", en: "One-time support", zh: "一次性支持" },
    description: {
      ko: "한 번의 응원으로 다음 작품의 한 챕터를 더 오래 다듬을 수 있습니다.",
      en: "One act of support helps us spend more time refining a chapter of the next game.",
      zh: "一次支持能帮助我们花更多时间打磨下一部作品的一个章节。",
    },
    primary: {
      label: { ko: "준비 중", en: "Coming Soon", zh: "即将推出" },
      disabled: true,
    },
    secondary: {
      label: { ko: "문의하기", en: "Contact Us", zh: "联系我们" },
      href: "mailto:contact@mongma-studio.com",
    },
  },
  {
    accent: "yellow",
    num: { ko: "B · 크리에이터", en: "B · Creator", zh: "B · 创作者" },
    title: { ko: "크리에이터 지원", en: "Creator support", zh: "创作者支持" },
    description: {
      ko: "스트리머 / 영상 크리에이터를 위한 게임 키와 자료 요청을 받을 예정입니다.",
      en: "We will accept requests for game keys and materials for streamers and video creators.",
      zh: "我们将接受面向主播与视频创作者的游戏 Key 和资料请求。",
    },
    primary: {
      label: { ko: "문의하기", en: "Contact Us", zh: "联系我们" },
      href: "mailto:creators@mongma-studio.com",
    },
    secondary: {
      label: { ko: "Discord 참여하기", en: "Join Discord", zh: "加入 Discord" },
      href: "https://discord.gg/Gz2CtFPYBK",
      external: true,
    },
  },
  {
    accent: "blue",
    num: { ko: "C · 업계", en: "C · Industry", zh: "C · 行业" },
    title: {
      ko: "퍼블리셔 / 투자 문의",
      en: "Publisher / investor inquiry",
      zh: "发行商 / 投资咨询",
    },
    description: {
      ko: "퍼블리싱 · 파트너십 · 투자 · 행사 협업 등은 비즈니스 채널로 문의해 주세요.",
      en: "For publishing, partnerships, investment, or event collaborations, please use the business channel.",
      zh: "发行、合作伙伴、投资、活动合作等，请通过商务渠道联系。",
    },
    primary: {
      label: { ko: "비즈니스 문의", en: "Contact Business", zh: "商务联系" },
      href: "mailto:business@mongma-studio.com",
    },
  },
  {
    accent: "green",
    num: { ko: "D · 함께", en: "D · Together", zh: "D · 一起" },
    title: { ko: "커뮤니티 응원", en: "Community support", zh: "社区支持" },
    description: {
      ko: "위시리스트, 디스코드 참여, 영상 공유처럼 돈이 들지 않는 응원도 큰 힘이 됩니다.",
      en: "Wishlisting, joining Discord, and sharing videos are free ways to support us that still mean a lot.",
      zh: "加入愿望单、加入 Discord、分享视频等不花钱的支持，也会带来很大力量。",
    },
    primary: {
      label: { ko: "Steam 위시리스트에 추가", en: "Wishlist on Steam", zh: "添加到 Steam 愿望单" },
      href: "https://store.steampowered.com/app/4617500/Revenant_Survivors/",
      external: true,
    },
    secondary: {
      label: { ko: "Discord 참여하기", en: "Join Discord", zh: "加入 Discord" },
      href: "https://discord.gg/Gz2CtFPYBK",
      external: true,
    },
  },
];
