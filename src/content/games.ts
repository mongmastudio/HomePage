import type { Localized } from "./i18n";
import { site } from "./site";

/** Brand/proper-noun or symbol identical in every locale. */
const same = (s: string): Localized => ({ ko: s, en: s, zh: s });

export type GameStatus = "in-development" | "coming-soon" | "released";

export type Game = {
  id: string;
  slug: string;
  number: string;
  title: Localized;
  titleItalic?: Localized;
  status: GameStatus;
  statusLabel: Localized;
  genre: Localized;
  platform: Localized;
  setting?: Localized;
  description: Localized;
  shortDescription: Localized;
  tagline?: Localized;
  keyVisual: string;
  icon?: string;
  steamUrl?: string;
  youtubeUrl?: string;
  youtubeEmbed?: string;
  tags: Localized[];
  features?: { num: Localized; title: Localized; description: Localized }[];
  languages?: Localized;
  price?: Localized;
  isPlaceholder?: boolean;
  placeholderLabel?: Localized;
};

export const games: Game[] = [
  {
    id: "revenant-survivors",
    slug: "revenant-survivors",
    number: "No.01",
    title: same("Revenant"),
    titleItalic: same("Survivors"),
    status: "in-development",
    statusLabel: {
      ko: "개발 중 · 출시 예정",
      en: "In Development · Coming Soon",
      zh: "开发中 · 即将推出",
    },
    genre: {
      ko: "액션 호드 서바이벌 로그라이트",
      en: "Action Horde Survival Roguelite",
      zh: "动作尸潮生存 Roguelite",
    },
    platform: same("PC · Steam"),
    setting: { ko: "다크 판타지", en: "Dark Fantasy", zh: "黑暗奇幻" },
    shortDescription: {
      ko: "보스의 힘을 빼앗고, 영혼을 흡수하며 성장하는 액션 호드 서바이벌 로그라이트입니다.",
      en: "An action horde survival roguelite where you steal boss powers, absorb souls, and grow stronger.",
      zh: "一款动作尸潮生存 Roguelite：夺取 Boss 力量，吸收灵魂，不断成长。",
    },
    description: {
      ko: "영혼을 흡수하고, 보스의 힘을 빼앗아 밤을 살아남으세요.",
      en: "Absorb souls, steal the power of bosses, and survive the night.",
      zh: "吸收灵魂，夺取 Boss 的力量，在黑夜中生存下来。",
    },
    tagline: {
      ko: "쓰러진 보스의 힘을 빼앗고, 영혼을 흡수하며, 밤을 살아남으세요.",
      en: "Steal the power of fallen bosses, absorb souls, and survive the night.",
      zh: "夺取倒下 Boss 的力量，吸收灵魂，在黑夜中生存。",
    },
    keyVisual: "/assets/revenant-survivors-key-visual.png",
    icon: "/assets/revenant-survivors-icon.png",
    steamUrl: site.social.steamRevenant,
    youtubeUrl: site.social.youtubeTrailer,
    youtubeEmbed: site.social.youtubeTrailerEmbed,
    tags: [
      { ko: "액션 로그라이트", en: "Action Roguelite", zh: "动作 Roguelite" },
      { ko: "서바이버즈라이크", en: "Survivors-like", zh: "类 Survivors" },
      { ko: "보스 능력", en: "Boss Powers", zh: "Boss 能力" },
      { ko: "스킬 시너지", en: "Skill Synergy", zh: "技能协同" },
      same("Steam"),
    ],
    features: [
      {
        num: { ko: "01 · 영혼", en: "01 · Soul", zh: "01 · 灵魂" },
        title: { ko: "영혼 흡수", en: "Soul Absorption", zh: "灵魂吸收" },
        description: {
          ko: "적을 처치할 때마다 영혼을 흡수해 점점 더 강해집니다.",
          en: "Absorb souls from defeated enemies and grow stronger over time.",
          zh: "击败敌人后吸收灵魂，逐渐变得更强。",
        },
      },
      {
        num: { ko: "02 · 보스", en: "02 · Boss", zh: "02 · Boss" },
        title: { ko: "보스 능력 시스템", en: "Boss Power System", zh: "Boss 能力系统" },
        description: {
          ko: "보스를 쓰러뜨리면 그들의 핵심 능력을 빼앗아 자신의 빌드에 더합니다.",
          en: "Defeat bosses to steal their signature powers and add them to your build.",
          zh: "击败 Boss，夺取其核心能力并加入自己的构筑。",
        },
      },
      {
        num: { ko: "03 · 시너지", en: "03 · Synergy", zh: "03 · 协同" },
        title: {
          ko: "폭발적인 스킬 시너지",
          en: "Explosive Skill Synergy",
          zh: "爆发式技能协同",
        },
        description: {
          ko: "속성과 스킬을 쌓아 폭발적인 연쇄 반응을 만들어냅니다.",
          en: "Stack elements and skills to trigger explosive chain reactions.",
          zh: "叠加属性与技能，触发爆发式连锁反应。",
        },
      },
      {
        num: { ko: "04 · 빌드", en: "04 · Build", zh: "04 · 构筑" },
        title: { ko: "끝없는 빌드 제작", en: "Endless Build Craft", zh: "无尽构筑打造" },
        description: {
          ko: "매 선택이 빌드를 흔듭니다. 정해진 정답 없이 매번 다른 길을 만듭니다.",
          en: "Every choice shifts your build. There is no single correct answer, only new paths each run.",
          zh: "每个选择都会改变构筑。没有唯一正确答案，只有每局不同的道路。",
        },
      },
    ],
    languages: {
      ko: "한국어 · English · 简体中文",
      en: "Korean · English · Simplified Chinese",
      zh: "韩语 · 英语 · 简体中文",
    },
    price: { ko: "추후 공개", en: "TBA", zh: "待公布" },
  },
  {
    id: "untitled-02",
    slug: "untitled-02",
    number: "No.02",
    title: { ko: "제목 미정 · 02", en: "Untitled · 02", zh: "未命名 · 02" },
    status: "coming-soon",
    statusLabel: {
      ko: "미래 · 준비 중",
      en: "Future · In Preparation",
      zh: "未来 · 筹备中",
    },
    genre: { ko: "추후 공개", en: "TBA", zh: "待公布" },
    platform: { ko: "추후 공개", en: "TBA", zh: "待公布" },
    shortDescription: {
      ko: "다음 프로젝트는 아직 비공개입니다. 더 많은 정보가 준비되면 공개됩니다.",
      en: "The next project is still under wraps. More information will be shared when ready.",
      zh: "下一个项目仍未公开。更多信息将在准备好后公布。",
    },
    description: {
      ko: "다음 프로젝트는 아직 비공개입니다. 더 많은 정보가 준비되면 공개됩니다.",
      en: "The next project is still under wraps. More information will be shared when ready.",
      zh: "下一个项目仍未公开。更多信息将在准备好后公布。",
    },
    keyVisual: "",
    tags: [
      { ko: "장르 · 추후 공개", en: "Genre · TBA", zh: "类型 · 待公布" },
      { ko: "플랫폼 · 추후 공개", en: "Platform · TBA", zh: "平台 · 待公布" },
    ],
    isPlaceholder: true,
    placeholderLabel: { ko: "향후 프로젝트", en: "Future Project", zh: "未来项目" },
  },
  {
    id: "prototype-archive",
    slug: "prototype-archive",
    number: "No.03",
    title: { ko: "프로토타입 아카이브", en: "Prototype Archive", zh: "原型档案" },
    status: "coming-soon",
    statusLabel: {
      ko: "실험실 · 내부 실험",
      en: "Lab · Internal",
      zh: "实验室 · 内部实验",
    },
    genre: { ko: "내부 · 실험실", en: "Internal · Lab", zh: "内部 · 实验室" },
    platform: same("—"),
    shortDescription: {
      ko: "스튜디오 내부의 짧은 실험들을 모아두는 선반입니다.",
      en: "A shelf for short experiments from inside the studio.",
      zh: "用来陈列工作室内部短小实验的架子。",
    },
    description: {
      ko: "스튜디오 내부의 짧은 실험들을 모아두는 선반입니다.",
      en: "A shelf for short experiments from inside the studio.",
      zh: "用来陈列工作室内部短小实验的架子。",
    },
    keyVisual: "",
    tags: [{ ko: "내부 · 실험실", en: "Internal · Lab", zh: "内部 · 实验室" }],
    isPlaceholder: true,
    placeholderLabel: {
      ko: "프로토타입 아카이브",
      en: "Prototype Archive",
      zh: "原型档案",
    },
  },
];

export const futureProjects: {
  id: string;
  accent: "violet" | "blue" | "green";
  stamp: Localized;
  label: Localized;
  title: Localized;
  description: Localized;
  footnote: Localized;
}[] = [
  {
    id: "future-project",
    accent: "violet",
    stamp: { ko: "No.02 · 미래", en: "No.02 · Future", zh: "No.02 · 未来" },
    label: { ko: "프로젝트 · 추후 공개", en: "Project · TBA", zh: "项目 · 待公布" },
    title: { ko: "향후 프로젝트", en: "Future Project", zh: "未来项目" },
    description: {
      ko: "아직 기록되지 않은 무언가가 천천히 다듬어지고 있습니다.",
      en: "Something unwritten is slowly being refined.",
      zh: "某个尚未被记录的东西，正在慢慢被打磨。",
    },
    footnote: {
      ko: "나중에 공개 · 준비 중",
      en: "Coming later · In preparation",
      zh: "稍后公开 · 筹备中",
    },
  },
  {
    id: "prototype-archive",
    accent: "blue",
    stamp: { ko: "No.03 · 실험실", en: "No.03 · Lab", zh: "No.03 · 实验室" },
    label: { ko: "프로토타입 아카이브", en: "Prototype Archive", zh: "原型档案" },
    title: { ko: "프로토타입 아카이브", en: "Prototype Archive", zh: "原型档案" },
    description: {
      ko: "스튜디오 내부의 짧은 실험들. 일부는 언젠가 하나의 게임이 될지도 모릅니다.",
      en: "Short experiments from inside the studio. Some may become games someday.",
      zh: "工作室内部的短小实验。其中一些也许有一天会成为游戏。",
    },
    footnote: { ko: "언젠가 공개", en: "Open someday", zh: "也许某天公开" },
  },
  {
    id: "new-experiment",
    accent: "green",
    stamp: { ko: "No.04 · 아이디어", en: "No.04 · Idea", zh: "No.04 · 想法" },
    label: { ko: "새로운 실험", en: "New Experiment", zh: "新实验" },
    title: { ko: "새로운 실험", en: "New Experiment", zh: "新实验" },
    description: {
      ko: "“만약 ____ 게임이 있다면 어떨까?”라는 질문에서 시작되는 작은 실험입니다.",
      en: "A small experiment that begins with the question, “What if there were a ____ game?”",
      zh: "一个从“如果有一款 ____ 游戏会怎样？”开始的小实验。",
    },
    footnote: { ko: "스케치 중", en: "Sketching", zh: "草图绘制中" },
  },
];
