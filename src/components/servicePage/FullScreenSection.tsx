import type { ReactNode } from "react";

interface FullScreenSectionProps {
  children: ReactNode;
  className?: string;
}

/** Centers a section's content within a full viewport-height block, so each
 *  section on the page reads as its own "screen" rather than blending into
 *  a long scroll. */
export default function FullScreenSection({ children, className = "" }: FullScreenSectionProps) {
  return (
    <div className={`flex min-h-dvh w-full flex-col justify-center ${className}`}>
      {children}
    </div>
  );
}
