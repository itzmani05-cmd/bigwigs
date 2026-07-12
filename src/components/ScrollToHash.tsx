import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the element matching the URL hash once its route has mounted —
 *  covers both in-app navigation (e.g. clicking "Learn more about us" from
 *  another page) and a hard reload/deep link landing directly on "/#about". */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
