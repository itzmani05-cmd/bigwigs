import { useEffect, useState } from "react";

const EVENT_NAME = "bigwigs-cookie-consent-visibility";

export function announceCookieConsentVisibility(visible: boolean) {
  window.dispatchEvent(new CustomEvent<boolean>(EVENT_NAME, { detail: visible }));
}

export function useCookieConsentVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => setVisible((event as CustomEvent<boolean>).detail);
    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
  }, []);

  return visible;
}
