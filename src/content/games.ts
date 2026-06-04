import { site } from "./site";

export type GameStatus = "in-development" | "coming-soon" | "released";

export type Game = {
  id: string;
  slug: string;
  number: string;
  title: string;
  titleItalic?: string;
  status: GameStatus;
  statusLabel: string;
  genre: string;
  platform: string;
  setting?: string;
  description: string;
  shortDescription: string;
  tagline?: string;
  keyVisual: string;
  icon?: string;
  steamUrl?: string;
  youtubeUrl?: string;
  youtubeEmbed?: string;
  tags: string[];
  features?: { num: string; title: string; description: string }[];
  languages?: string;
  price?: string;
  isPlaceholder?: boolean;
  placeholderLabel?: string;
};

export const games: Game[] = [
  {
    id: "revenant-survivors",
    slug: "revenant-survivors",
    number: "No.01",
    title: "Revenant",
    titleItalic: "Survivors",
    status: "in-development",
    statusLabel: "In Development · Coming Soon",
    genre: "Action Horde Survival Roguelite",
    platform: "PC · Steam",
    setting: "Dark Fantasy",
    shortDescription:
      "보스의 힘을 빼앗고, 영혼을 흡수하며 성장하는 액션 호드 서바이벌 로그라이트.",
    description:
      "Absorb souls, steal the power of bosses, and survive through waves of darkness. 보스의 힘을 빼앗고, 영혼을 흡수하며 성장하는 액션 호드 서바이벌 로그라이트.",
    tagline:
      "Steal the power of fallen bosses. Grow through souls. Survive the revenant night. — 보스의 힘을 빼앗고, 영혼을 흡수하며, 끝나지 않는 어둠 속에서 살아남으세요.",
    keyVisual: "/assets/revenant-survivors-key-visual.png",
    icon: "/assets/revenant-survivors-icon.png",
    steamUrl: site.social.steamRevenant,
    youtubeUrl: site.social.youtubeTrailer,
    youtubeEmbed: site.social.youtubeTrailerEmbed,
    tags: [
      "Action Roguelite",
      "Survivors-like",
      "Boss Powers",
      "Skill Synergy",
      "Steam",
    ],
    features: [
      {
        num: "01 · Soul",
        title: "Soul Absorption",
        description:
          "적을 처치할 때마다 영혼을 흡수해 점점 더 강해집니다. 모든 죽음이 다음 한 발의 거름이 됩니다.",
      },
      {
        num: "02 · Boss",
        title: "Boss Power System",
        description:
          "보스를 쓰러뜨리면 그들의 핵심 능력을 빼앗아 사용할 수 있습니다. 매 런마다 다른 손, 다른 검.",
      },
      {
        num: "03 · Synergy",
        title: "Explosive Skill Synergy",
        description:
          "속성과 스킬을 쌓아 폭발적인 연쇄 반응을 일으키세요. 화면이 무너질 때 비로소 시작입니다.",
      },
      {
        num: "04 · Build",
        title: "Endless Build Craft",
        description:
          "매 선택이 빌드를 흔듭니다. 정해진 정답 없이, 매번 새로 손에 익는 캐릭터를 만드세요.",
      },
    ],
    languages: "한국어 · English · 简体中文",
    price: "TBA",
  },
  {
    id: "untitled-02",
    slug: "untitled-02",
    number: "No.02",
    title: "Untitled · 02",
    status: "coming-soon",
    statusLabel: "Future · 준비 중",
    genre: "TBA",
    platform: "TBA",
    shortDescription:
      "다음 프로젝트는 아직 비공개입니다. 더 많은 정보가 곧 이 자리에 추가됩니다.",
    description:
      "다음 프로젝트는 아직 비공개입니다. 더 많은 정보가 곧 이 자리에 추가됩니다.",
    keyVisual: "",
    tags: ["Genre · TBA", "Platform · TBA"],
    isPlaceholder: true,
    placeholderLabel: "Future Project",
  },
  {
    id: "prototype-archive",
    slug: "prototype-archive",
    number: "No.03",
    title: "Prototype Archive",
    status: "coming-soon",
    statusLabel: "Lab · 내부 실험",
    genre: "Internal · Lab",
    platform: "—",
    shortDescription:
      "스튜디오 내부의 짧은 실험들을 모아두는 선반. 언젠가 일부가 공개될 수 있습니다.",
    description:
      "스튜디오 내부의 짧은 실험들을 모아두는 선반. 언젠가 일부가 공개될 수 있습니다.",
    keyVisual: "",
    tags: ["Internal · Lab"],
    isPlaceholder: true,
    placeholderLabel: "Prototype Archive",
  },
];

export const futureProjects = [
  {
    id: "future-project",
    accent: "violet" as const,
    stamp: "No.02 · Future",
    label: "Project · TBA",
    title: "Future Project",
    description:
      "기록되지 않은 무언가가 천천히 다듬어지고 있습니다. 장르와 톤은 아직 비공개.",
    footnote: "Coming later · 준비 중",
  },
  {
    id: "prototype-archive",
    accent: "blue" as const,
    stamp: "No.03 · Lab",
    label: "Prototype Archive",
    title: "Prototype Archive",
    description:
      "스튜디오 내부의 짧은 실험들. 일부는 새로운 게임의 씨앗이 되기도 합니다.",
    footnote: "Open someday",
  },
  {
    id: "new-experiment",
    accent: "green" as const,
    stamp: "No.04 · Idea",
    label: "New Experiment",
    title: "New Experiment",
    description:
      "“만약 ____ 게임이 있다면 어떨까?” 라는 가벼운 질문에서 시작되는 작업들.",
    footnote: "Sketching",
  },
];
