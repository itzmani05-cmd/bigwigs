import type { CSSProperties, ReactNode } from "react";

export default function Container({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
