import { useChat } from "@/Hooks/useChat";

export function ChatWidget({ onClose }: { onClose: () => void }) {
  const { messages, input, setInput, sending, sendMessage } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="w-[320px] overflow-hidden rounded-md border-b-[3px] border-brand-red bg-white shadow-2xl ring-1 ring-black/10 sm:w-[360px]">
      <div className="flex items-center justify-between bg-navy-950 px-4 py-3 text-white">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.15em]">
            Zamsam Chat
          </p>
          <p className="text-[10px] uppercase tracking-widest text-navy-500">
            AI assistant — for urgent issues use WhatsApp
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-white/70 hover:text-white"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

      <div className="flex h-64 flex-col gap-2 overflow-y-auto bg-ice px-4 py-4 text-sm">
        {messages.map((m: { role: "bot" | "user"; text: string }, i: number) => (
          <div
            key={i}
            className={
              m.role === "bot"
                ? "mr-auto max-w-[80%] rounded-md bg-white px-3 py-2 text-navy-950 ring-1 ring-black/5"
                : "ml-auto max-w-[80%] rounded-md bg-navy-900 px-3 py-2 text-white"
            }
          >
            {m.text}
          </div>
        ))}
        {sending && (
          <div className="mr-auto max-w-[80%] rounded-md bg-white px-3 py-2 text-navy-950/50 ring-1 ring-black/5">
            Typing…
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-black/5 bg-white p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, 1000))}
          placeholder="Type a message…"
          maxLength={1000}
          disabled={sending}
          className="flex-1 rounded-sm bg-ice px-3 py-2 text-sm outline-none placeholder:text-navy-950/40 focus:ring-2 focus:ring-brand-red disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={sending || !input.trim()}
          className="bg-brand-red px-3 py-2 text-xs font-bold uppercase tracking-widest text-white hover:bg-brand-red-dark disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}