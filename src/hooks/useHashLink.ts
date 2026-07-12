import { useCallback } from "react";
import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Section anchors like "#about" only work when already on "/" — from any
 * other route a plain <a href="#about"> just edits the current URL's hash
 * with nothing on the page to scroll to. This resolves the href and supplies
 * a click handler that navigates home first when needed.
 */
export function useHashLink(href: string) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isHash = href.startsWith("#");
  const isHome = pathname === "/";
  const resolvedHref = isHash && !isHome ? `/${href}` : href;

  const onClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (e.defaultPrevented || !isHash || isHome) return;
      e.preventDefault();
      navigate(`/${href}`);
    },
    [href, isHash, isHome, navigate]
  );

  return { href: resolvedHref, onClick };
}
