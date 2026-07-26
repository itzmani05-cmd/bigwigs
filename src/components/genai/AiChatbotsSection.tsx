import { MessagesSquare } from "lucide-react";
import Container from "@/components/ui/Container";
import ChipList from "@/components/servicePage/ChipList";
import IconGrid from "@/components/servicePage/IconGrid";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import { chatbotFeatures, chatbotChannels } from "./chatbotData";

export default function AiChatbotsSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[46%_54%] lg:gap-12">
          {/* LEFT — flat chat interface illustration */}
          <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-600">
                <MessagesSquare size={12} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-400">AI Assistant</span>
              <span className="ml-auto rounded bg-brand-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue-600">Online</span>
            </div>
            <div className="flex flex-col gap-2.5 bg-slate-50 p-5">
              <span className="w-3/4 rounded-lg bg-white px-3 py-2 text-[11px] text-slate-600 shadow-sm">
                How do I reset my password?
              </span>
              <span className="ml-auto w-4/5 rounded-lg bg-brand-blue-600 px-3 py-2 text-[11px] text-white">
                I can help — click &ldquo;Forgot Password&rdquo; on the login screen, or I can send a reset link now.
              </span>
              <span className="w-2/3 rounded-lg bg-white px-3 py-2 text-[11px] text-slate-600 shadow-sm">
                Send the link, thanks!
              </span>
            </div>
            <div className="border-t border-slate-100 px-4 py-3">
              <span className="text-[10px] font-medium text-slate-500">Resolved without human escalation</span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">
              AI Chatbots
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Conversations that resolve, not just respond
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
              Grounded in your knowledge base and deployed everywhere your customers already
              are — with a clean handoff to a human when it matters.
            </p>

            <ChipList items={chatbotChannels} tone="blue" className="mt-6" />
          </div>
        </div>

        <div className="mt-10">
          <IconGrid items={chatbotFeatures} columnsClassName="grid-cols-2 sm:grid-cols-3" align="center" />
        </div>
      </Container>
    </section>
  );
}
