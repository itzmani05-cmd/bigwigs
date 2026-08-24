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
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] sm:inset-auto sm:right-6 sm:bottom-24 sm:w-[400px]"
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
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-4 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue-500 text-white shadow-[0_14px_34px_-8px_rgba(37,99,235,0.6)] transition-colors duration-300 hover:bg-brand-blue-600 hover:shadow-[0_18px_44px_-8px_rgba(37,99,235,0.75)] sm:right-6"
      >
        {!isOpen && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-brand-blue-400"
            animate={{ opacity: [0, 0.4, 0], scale: [1, 1.3, 1.3] }}
            transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
          />
        )}
        <motion.span
          key={isOpen ? "close" : "open"}
          initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {isOpen ? <X size={20} strokeWidth={2} /> : <MessageCircle size={20} strokeWidth={2} />}
        </motion.span>
      </motion.button>
    </>
  );
}
