import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="fixed bottom-14 right-4 z-[9999] w-[calc(100vw-2rem)] max-w-sm sm:right-6 sm:bottom-18"
          >
            <ChatWindow onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-4 z-[9999] flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-500 text-white shadow-[0_12px_30px_-8px_rgba(37,99,235,0.6)] transition-colors duration-300 hover:bg-brand-blue-600 hover:shadow-[0_16px_40px_-8px_rgba(37,99,235,0.75)] sm:right-6"
      >
        {!isOpen && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-brand-blue-400"
            animate={{ opacity: [0, 0.45, 0], scale: [1, 1.35, 1.35] }}
            transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
          />
        )}
        <span className="relative">
          {isOpen ? <X size={16} strokeWidth={2} /> : <MessageCircle size={16} strokeWidth={2} />}
        </span>
      </motion.button>
    </>
  );
}
