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
            className="fixed bottom-24 right-4 z-[9999] w-[calc(100vw-2rem)] max-w-sm sm:right-6 sm:bottom-28"
          >
            <ChatWindow onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className="fixed bottom-5 right-4 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue-500 text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 sm:right-6"
      >
        {isOpen ? <X size={22} strokeWidth={2} /> : <MessageCircle size={22} strokeWidth={2} />}
      </button>
    </>
  );
}
