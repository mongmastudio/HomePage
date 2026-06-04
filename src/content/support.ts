export const supportWhy = [
  {
    num: "01 · Studio",
    title: "Small independent studio",
    description:
      "외부 자본에 휘둘리지 않고, 한 작품 한 작품 우리 손으로 마무리할 수 있습니다.",
  },
  {
    num: "02 · Originality",
    title: "Original game development",
    description:
      "유행 추격이 아닌, 우리만의 세계와 시스템을 만들 시간을 확보합니다.",
  },
  {
    num: "03 · Community",
    title: "Community-driven feedback",
    description:
      "여러분의 피드백이 다음 빌드의 방향과 디테일을 함께 결정합니다.",
  },
  {
    num: "04 · Future",
    title: "Future demos & devlogs",
    description:
      "플레이 가능한 데모, 개발 노트, 비공개 빌드 등을 더 적극적으로 공유할 수 있습니다.",
  },
];

export const supportOptions = [
  {
    accent: "violet" as const,
    num: "A · Personal",
    title: "One-time support",
    description:
      "한 번의 응원으로 다음 작품의 한 챕터를 함께 만들어 주세요. 후원자 명단(선택)도 곧 준비됩니다.",
    primary: { label: "Coming Soon", disabled: true },
    secondary: {
      label: "Contact Us",
      href: "mailto:contact@mongma-studio.com",
    },
  },
  {
    accent: "yellow" as const,
    num: "B · Creator",
    title: "Creator support",
    description:
      "스트리머 / 영상 크리에이터를 위한 게임 키, 자료 패키지, 협업 안내를 준비하고 있습니다.",
    primary: {
      label: "Contact Us",
      href: "mailto:creators@mongma-studio.com",
    },
    secondary: {
      label: "Join Discord",
      href: "https://discord.gg/Gz2CtFPYBK",
      external: true,
    },
  },
  {
    accent: "blue" as const,
    num: "C · Industry",
    title: "Publisher / investor inquiry",
    description:
      "퍼블리싱 · 파트너십 · 투자 · 행사 협업 등은 비즈니스 메일로 연락 주시면 빠르게 검토하겠습니다.",
    primary: {
      label: "Contact Business",
      href: "mailto:business@mongma-studio.com",
    },
  },
  {
    accent: "green" as const,
    num: "D · Together",
    title: "Community support",
    description:
      "위시리스트, 디스코드, 영상 공유. 돈이 들지 않는 응원도 같은 무게로 큰 힘이 됩니다.",
    primary: {
      label: "Wishlist on Steam",
      href: "https://store.steampowered.com/app/4617500/Revenant_Survivors/",
      external: true,
    },
    secondary: {
      label: "Join Discord",
      href: "https://discord.gg/Gz2CtFPYBK",
      external: true,
    },
  },
];
