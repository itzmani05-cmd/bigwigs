import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Send, X } from "lucide-react";
import { API_BASE } from "@/config/api";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm the Bigwigs AI assistant. Ask me anything about our services.",
};

function extractErrorMessage(data: unknown): string {
  const message = (data as { message?: string | string[] } | null)?.message;
  if (Array.isArray(message)) return message.join(" ");
  if (typeof message === "string") return message;
  return "Something went wrong. Please try again.";
}

interface ChatWindowProps {
  onClose: () => void;
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "user", content: trimmed }]);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(extractErrorMessage(data));
      }

      const answer = typeof data?.answer === "string" ? data.answer : "";
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: answer || "I couldn't find the information. Please try asking in a different way.",
        },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't reach our servers. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-[70vh] max-h-[560px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-16px_rgba(15,23,42,0.25)]">
      <div className="flex items-center gap-3 border-b border-slate-100 bg-brand-blue-500 px-5 py-3.5">
        <span className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-white px-2 py-1.5 shadow-sm">
          <img src="/assets/Logo.png" alt="" aria-hidden="true" className="h-full w-auto object-contain" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-white">Bigwigs AI Assistant</p>
          <p className="flex items-center gap-1.5 truncate text-xs font-medium text-white/75">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            Online
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors duration-200 hover:bg-white/15 hover:text-white"
        >
          <X size={16} strokeWidth={2} />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-slate-50/60 px-4 py-5">
        {messages.map((message) => (
          <MessageBubble key={message.id} role={message.role} content={message.content} />
        ))}
        {isLoading && <TypingIndicator />}
        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-medium text-rose-600">
            {error}
          </div>
        )}
      </div>

      <div className="border-t border-slate-100 bg-white px-3 pt-3 pb-2.5">
        <div className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition-colors duration-200 focus-within:border-brand-blue-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-blue-100">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Bigwigs..."
            className="max-h-24 flex-1 resize-none bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue-500 text-white transition-colors duration-200 hover:bg-brand-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send size={15} strokeWidth={2} />
          </button>
        </div>
        <p className="mt-1.5 text-center text-[11px] text-slate-400">
          AI-generated from Bigwigs documentation.
        </p>
      </div>
    </div>
  );
}
