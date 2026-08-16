import { useCallback } from "react";
import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EXTERNAL_HREF = /^(https?:|mailto:|tel:)/i;

/**
 * Resolves an href for client-side routing and supplies a click handler that
 * navigates via react-router instead of falling through to a full page
 * reload. Bare hash hrefs like "#about" are treated as targeting the home
 * page's section when not already on "/". External links, new-tab clicks,
 * and modified clicks (ctrl/cmd/shift/middle-click) pass through untouched.
 */
export function useHashLink(href: string) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isExternal = EXTERNAL_HREF.test(href);
  const isHash = href.startsWith("#");
  const isHome = pathname === "/";
  const resolvedHref = isHash && !isHome ? `/${href}` : href;

  const onClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (
        isExternal ||
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      e.preventDefault();
      navigate(resolvedHref);
    },
    [isExternal, resolvedHref, navigate]
  );

  return { href: resolvedHref, onClick };
}
