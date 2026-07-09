import { useState } from "react";
import { COMPANY, waLink } from "@/Lib/contact";

/**
 * Floating action stack: WhatsApp deep-link + chat bubble placeholder.
 * The chat panel UI is wired up so the user can drop their backend in later
 * — replace the onSubmit handler and messages state with real transport.
 */
export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Hi! I'm the Zamsam assistant. How can we help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    // TODO(backend): forward this message to your chat backend and stream the reply.
    setMessages((m) => [
      ...m,
      { from: "user", text: trimmed },
      { from: "bot", text: "Thanks — a technician will reply shortly. For urgent issues please use WhatsApp." },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[320px] overflow-hidden rounded-md border-b-[3px] border-brand-red bg-white shadow-2xl ring-1 ring-black/10 sm:w-[360px]">
          <div className="flex items-center justify-between bg-navy-950 px-4 py-3 text-white">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.15em]">
                Zamsam Chat
              </p>
              <p className="text-[10px] uppercase tracking-widest text-navy-500">
                We usually reply in minutes
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="flex h-64 flex-col gap-2 overflow-y-auto bg-ice px-4 py-4 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "bot"
                    ? "mr-auto max-w-[80%] rounded-md bg-white px-3 py-2 text-navy-950 ring-1 ring-black/5"
                    : "ml-auto max-w-[80%] rounded-md bg-navy-900 px-3 py-2 text-white"
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-black/5 bg-white p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, 500))}
              placeholder="Type a message…"
              maxLength={500}
              className="flex-1 rounded-sm bg-ice px-3 py-2 text-sm outline-none placeholder:text-navy-950/40 focus:ring-2 focus:ring-brand-red"
            />
            <button
              type="submit"
              className="bg-brand-red px-3 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-brand-red-dark"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <div className="flex flex-col items-end gap-3">
        <a
          href={waLink(COMPANY.contact.operations.phoneRaw)}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg ring-2 ring-white transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 32 32" className="size-7" fill="currentColor" aria-hidden="true">
            <path d="M19.11 17.24c-.29-.15-1.71-.85-1.98-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.51-.17-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.03.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34zM16.04 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.34L5 26.67l5.44-1.42a10.68 10.68 0 0 0 5.6 1.58h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.63 10.63 0 0 0-7.58-3.13zm0 19.53h-.01c-1.76 0-3.48-.47-4.99-1.36l-.36-.21-3.23.84.86-3.15-.23-.37a8.86 8.86 0 0 1-1.36-4.72c0-4.9 3.99-8.89 8.9-8.89 2.38 0 4.61.93 6.29 2.61a8.83 8.83 0 0 1 2.61 6.29c0 4.91-4 8.89-8.89 8.96z" />
          </svg>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open live chat"
          className="grid size-14 place-items-center rounded-full bg-brand-red text-white shadow-lg ring-2 ring-white transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
