import { useEffect, useState } from "react";

const QUERY = "(max-width: 639px)";

/** True below the `sm` breakpoint. Used to trim movement/stagger on phones
 * without every call site hand-rolling a matchMedia listener. */
export function useIsCompactViewport() {
  const [isCompact, setIsCompact] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const update = () => setIsCompact(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isCompact;
}
