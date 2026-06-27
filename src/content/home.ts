import type { Localized } from "./i18n";

export const heroStickers: { label: Localized; accent?: "yellow" }[] = [
  { label: { ko: "인디 게임 스튜디오", en: "Indie Game Studio", zh: "独立游戏工作室" } },
  { label: { ko: "2026 설립 · 서울", en: "Est. 2026 · Seoul", zh: "2026 年创立 · 首尔" } },
  {
    label: { ko: "개발 중", en: "In Development", zh: "开发中" },
    accent: "yellow",
  },
];

export const heroCopy = {
  headlineLine1: { ko: "작은 스튜디오.", en: "Small studio.", zh: "小小工作室。" },
  headlineLine2Italic: {
    ko: "낯선 아이디어.",
    en: "Strange ideas.",
    zh: "奇妙想法。",
  },
  headlineLine3: {
    ko: "장난스러운 세계.",
    en: "Playful worlds.",
    zh: "充满玩心的世界。",
  },
  lede: {
    ko: "몽마 스튜디오는 독특한 세계와 오래 남는 플레이를 만듭니다.",
    en: "Mongma Studio creates distinctive worlds and gameplay that lingers.",
    zh: "Mongma Studio 打造独特的世界，以及令人久久记得的玩法。",
  },
  noteLabel: { ko: "현장 기록 003", en: "Field note 003", zh: "现场笔记 003" },
  noteBody: {
    ko: "“달이 부서진 자리에서, 새로운 세계를 줍는다.”",
    en: "“Where the moon shattered, we gather new worlds.”",
    zh: "“在月亮破碎之处，我们拾起新的世界。”",
  },
} satisfies Record<string, Localized>;

export const studioIntro = {
  kicker: {
    ko: "/ 스튜디오 · 스튜디오 소개",
    en: "/ studio · studio intro",
    zh: "/ 工作室 · 工作室介绍",
  },
  headline: { ko: "우리는 게임을 만듭니다", en: "We make games", zh: "我们制作游戏" },
  headlineItalic: {
    ko: "개성 있게.",
    en: "with personality.",
    zh: "带着鲜明个性。",
  },
  bigtextLine1: {
    ko: "한 명의 손으로 시작해, 몇 번이고 다시 그리는 작은 팀.",
    en: "A small team that began with one pair of hands, redrawing again and again.",
    zh: "一个从一双手开始、反复打磨重绘的小团队。",
  },
  bigtextLine2: {
    ko: "우리가 만드는 건 기능이 아니라 ",
    en: "What we make is not just features, but ",
    zh: "我们创造的不是功能，而是 ",
  },
  bigtextLine2Em: {
    ko: "오래 기억되는 순간",
    en: "moments that stay with you",
    zh: "令人长久记住的瞬间",
  },
  bigtextLine2End: { ko: "입니다.", en: ".", zh: "。" },
  cards: [
    {
      num: { ko: "01 · 세계", en: "01 · World", zh: "01 · 世界" },
      title: { ko: "독창적인 세계", en: "Original Worlds", zh: "原创世界" },
      description: {
        ko: "장르의 클리셰에 기대지 않고, 우리만의 분위기와 규칙으로 세계를 만듭니다.",
        en: "We build worlds with our own mood and rules, not borrowed genre clichés.",
        zh: "我们不借用类型套路，而是以自己的氛围与规则构筑世界。",
      },
    },
    {
      num: { ko: "02 · 시스템", en: "02 · System", zh: "02 · 系统" },
      title: { ko: "기억에 남는 시스템", en: "Memorable Systems", zh: "令人难忘的系统" },
      description: {
        ko: "한 번 플레이하고도 손에 남는 시스템을 고민합니다.",
        en: "We design systems that remain in your hands after a single play.",
        zh: "我们设计一次游玩后仍留在手中的系统。",
      },
    },
    {
      num: { ko: "03 · 플레이", en: "03 · Play", zh: "03 · 游玩" },
      title: { ko: "장난스러운 실험", en: "Playful Experiments", zh: "充满玩心的实验" },
      description: {
        ko: "실패해도 즐거운 작은 실험들. 프로토타입을 빠르게 만들고 다듬습니다.",
        en: "Small experiments that are fun even when they fail. We prototype and refine quickly.",
        zh: "即使失败也有趣的小实验。我们快速制作原型并不断打磨。",
      },
    },
    {
      num: { ko: "04 · 정신", en: "04 · Spirit", zh: "04 · 精神" },
      title: { ko: "인디 정신", en: "Indie Spirit", zh: "独立精神" },
      description: {
        ko: "유행보다는 취향. 공식보다는 직감. 작게 시작해 오래 다듬습니다.",
        en: "Taste over trends. Instinct over formulas. We start small and refine for a long time.",
        zh: "比起潮流更重视品味，比起公式更相信直觉。小步开始，长期打磨。",
      },
    },
  ],
};

export const newsItems: {
  date: Localized;
  title: Localized;
  body: Localized;
  more: Localized;
  accent?: "yellow" | "blue";
}[] = [
  {
    date: { ko: "2026 · 04 · 22", en: "2026 · 04 · 22", zh: "2026 · 04 · 22" },
    title: { ko: "Steam 페이지 공개", en: "Steam page is live", zh: "Steam 页面已上线" },
    body: {
      ko: "Revenant Survivors의 Steam 페이지가 공식 오픈했습니다.",
      en: "The Steam page for Revenant Survivors is officially live.",
      zh: "Revenant Survivors 的 Steam 页面已正式上线。",
    },
    more: { ko: "기록 읽기 →", en: "Read note →", zh: "阅读笔记 →" },
  },
  {
    date: { ko: "2026 · 04 · 22", en: "2026 · 04 · 22", zh: "2026 · 04 · 22" },
    title: {
      ko: "첫 트레일러 공개",
      en: "First trailer released",
      zh: "首支预告片已发布",
    },
    body: {
      ko: "게임의 분위기와 핵심 루프를 담은 첫 번째 트레일러를 공개했습니다.",
      en: "We released the first trailer, showing the mood and core loop of the game.",
      zh: "我们发布了首支预告片，展示游戏氛围与核心循环。",
    },
    more: {
      ko: "YouTube에서 보기 →",
      en: "Watch on YouTube →",
      zh: "在 YouTube 观看 →",
    },
    accent: "yellow",
  },
  {
    date: { ko: "2026 · 추후 공개", en: "2026 · TBA", zh: "2026 · 待公布" },
    title: { ko: "데모 공개 안내", en: "Demo announcement", zh: "试玩版公告" },
    body: {
      ko: "플레이 가능한 데모 빌드의 일정과 범위를 곧 안내할 예정입니다.",
      en: "Details on the playable demo build and its scope will be announced soon.",
      zh: "可游玩试玩版的时间与范围将很快公布。",
    },
    more: { ko: "추후 공개", en: "Coming later", zh: "稍后公开" },
  },
  {
    date: { ko: "개발일지 · 001", en: "Devlog · 001", zh: "开发日志 · 001" },
    title: {
      ko: "영혼이 시스템이 되기까지",
      en: "How souls became a system",
      zh: "灵魂如何成为一个系统",
    },
    body: {
      ko: "“보스의 힘을 빼앗는다”는 한 문장이 어떻게 시스템이 되었는지 정리합니다.",
      en: "How one sentence, “steal the power of bosses,” became a system.",
      zh: "记录“夺取 Boss 的力量”这一句话如何变成系统。",
    },
    more: { ko: "개발일지 읽기 →", en: "Read devlog →", zh: "阅读开发日志 →" },
    accent: "blue",
  },
];

export const homeContactCta = {
  kicker: { ko: "/ 문의 · 문의", en: "/ inquiries · contact", zh: "/ 咨询 · 联系" },
  headline: {
    ko: "프레스 · 크리에이터 · 비즈니스 —",
    en: "Press · creator · business —",
    zh: "媒体 · 创作者 · 商务 —",
  },
  headlineItalic: {
    ko: "편하게 인사해 주세요.",
    en: "say hello.",
    zh: "来打个招呼吧。",
  },
} satisfies Record<string, Localized>;
