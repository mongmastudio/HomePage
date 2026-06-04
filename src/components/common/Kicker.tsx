import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function Kicker({ children, style }: Props) {
  return (
    <span className="kicker" style={style}>
      {children}
    </span>
  );
}
