import { useEffect, useState } from "react";

/**
 * Returns false on first render, then true shortly after the browser has had
 * a chance to paint. Used to keep below-the-fold sections out of the initial
 * synchronous render pass — React commits the whole tree in one go, so
 * mounting every section (each with its own scroll/viewport observers and
 * motion variants) up front delays when the above-the-fold content — and the
 * LCP image inside it — actually reaches the DOM and can start fetching.
 * Splitting the mount into two passes lets the critical content commit (and
 * its image requests fire) first, in a separate, smaller task.
 */
export function useDeferredMount(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: 500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(() => setReady(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  return ready;
}
