import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function Sticker({ children, style }: Props) {
  return (
    <span className="sticker" style={style}>
      {children}
    </span>
  );
}
