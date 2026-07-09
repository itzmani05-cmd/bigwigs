import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-[15px] ${className}`}>
      {children}
    </div>
  );
}
