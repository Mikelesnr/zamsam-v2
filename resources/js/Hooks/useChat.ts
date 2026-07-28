import { useState } from "react";

export type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

const INITIAL_MESSAGE: ChatMessage = {
  role: "bot",
  text: "Hi! I'm the Zamsam assistant. Ask me about our services, or reach us on WhatsApp for anything urgent.",
};

const FALLBACK_ERROR =
  "Sorry, something went wrong. Please try again, or reach us directly on WhatsApp.";

const getErrorMessage = (error: unknown): string => {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as { response?: unknown }).response === "object" &&
    (error as { response?: unknown }).response !== null
  ) {
    const response = (error as { response?: { data?: unknown } }).response;
    if (
      response &&
      "data" in response &&
      typeof response.data === "object" &&
      response.data !== null &&
      "message" in response.data &&
      typeof response.data.message === "string"
    ) {
      return response.data.message;
    }
  }

  return FALLBACK_ERROR;
};

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || sending) return;

    const history = messages.map((m) => ({ role: m.role, text: m.text }));
    const nextMessages: ChatMessage[] = [...messages, { role: "user", text: trimmed }];

    setMessages(nextMessages);
    setInput("");
    setSending(true);
    setError(null);

    try {
      const { data } = await window.axios.post("/chat", {
        message: trimmed,
        history,
      });

      if (!data?.success || typeof data.reply !== "string") {
        throw new Error(data?.message || FALLBACK_ERROR);
      }

      setMessages((m) => [...m, { role: "bot", text: data.reply }]);
    } catch (err: unknown) {
      const message = getErrorMessage(err);
      setError(message);
      setMessages((m) => [...m, { role: "bot", text: message }]);
    } finally {
      setSending(false);
    }
  };

  return { messages, input, setInput, sending, error, sendMessage };
}