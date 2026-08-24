import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useCookieConsentVisible } from "@/hooks/useCookieConsentVisible";

const SCROLL_THRESHOLD = 300;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const cookieBannerVisible = useCookieConsentVisible();

  useEffect(() => {
    const handleScroll = () => {
      setVisible((prev) => {
        const shouldShow = window.scrollY > SCROLL_THRESHOLD;
        return prev === shouldShow ? prev : shouldShow;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && !cookieBannerVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: -60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -60, scale: 0.8 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group fixed right-4 bottom-5 z-[9998] flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-500 text-white shadow-[0_12px_30px_-8px_rgba(37,99,235,0.6)] transition-colors duration-300 hover:bg-brand-blue-600 hover:shadow-[0_16px_40px_-8px_rgba(37,99,235,0.75)] sm:right-6"
        >
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-brand-blue-400"
            animate={{ opacity: [0, 0.45, 0], scale: [1, 1.35, 1.35] }}
            transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
          />
          <ArrowUp size={15} strokeWidth={2.25} className="relative" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
