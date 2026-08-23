import type { ReactNode } from "react";

interface FullScreenSectionProps {
  children: ReactNode;
  className?: string;
}

/** Thin pass-through wrapper — section height now follows its content's
 *  natural size instead of being stretched to fill a full viewport. */
export default function FullScreenSection({ children, className = "" }: FullScreenSectionProps) {
  return <div className={`w-full ${className}`}>{children}</div>;
}
