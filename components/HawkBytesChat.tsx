"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import HawkBytesChatText from "@/components/HawkBytesChatText";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { ChatReply, ChatResponse, ChatRole } from "@/lib/chat/types";
import "./HawkBytesChat.css";

type ChatMessage = ChatReply & {
  id: number;
  role: ChatRole;
};

const SUGGESTIONS = [
  "What does HawkBytes specialize in?",
  "Who is on the executive team?",
  "How can I contact HawkBytes?",
  "Are you hiring?",
];

const THINKING_MS = { min: 1000, perChar: 8, max: 2800 };

function thinkingTime(reply: string) {
  return Math.min(THINKING_MS.max, THINKING_MS.min + reply.length * THINKING_MS.perChar);
}

function currentTime() {
  return Date.now();
}

const FAILED_REPLY: ChatReply = {
  text: "Sorry, I couldn't reach the assistant just now. Please try again in a moment, or contact our team directly.",
  link: { href: "/contact-us", label: "Contact our team" },
};

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m21 3-7.2 18-3.4-7.4L3 10.2 21 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m10.4 13.6 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </svg>
  );
}

function HawkBytesMark() {
  return (
    <svg viewBox="0 0 32.22 32" fill="none" aria-hidden="true">
      <path
        d="M15.04 0.36V11.06H11.58L11.62 4.74C11.62 4.74 7.13 5.04 4.07 6.6C4.07 6.6 4.25 16.03 11.58 22.97V15.14H15.04V30.84C15.04 30.84 0 23.27 0 3.81C0 3.81 6.65 0.36 15.04 0.36Z"
        fill="currentColor"
      />
      <path
        d="M17.18 0.36V11.06H20.64L20.6 4.74C20.6 4.74 25.09 5.04 28.14 6.6C28.14 6.6 27.97 16.03 20.64 22.97V15.14H17.18V30.84C17.18 30.84 32.22 23.27 32.22 3.81C32.22 3.81 25.57 0.36 17.18 0.36Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function HawkBytesChat() {
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [pending, setPending] = useState(false);
  const nextMessageId = useRef(0);
  const conversationId = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [isOpen, messages, pending]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || pending) return;

    const conversation = conversationId.current;
    const history: ChatMessage[] = [...messages, { id: nextMessageId.current++, role: "user", text: trimmed }];
    setMessages(history);
    setInput("");
    setMenuOpen(false);
    setPending(true);

    const startedAt = currentTime();
    let reply = FAILED_REPLY;
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          messages: history.map((message) => ({ role: message.role, content: message.text })),
        }),
      });
      const data = (await response.json()) as Partial<ChatResponse>;
      if (data.text) reply = { text: data.text, link: data.link };
    } catch {
      /* keep FAILED_REPLY */
    }

    const remaining = thinkingTime(reply.text) - (currentTime() - startedAt);
    if (remaining > 0) await new Promise((resolve) => setTimeout(resolve, remaining));

    if (conversation !== conversationId.current) return;
    setMessages((current) => [...current, { id: nextMessageId.current++, role: "assistant", ...reply }]);
    setPending(false);
    inputRef.current?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  const startNewChat = () => {
    conversationId.current++;
    setMessages([]);
    setPending(false);
    setMenuOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="hawk-chat-widget">
      {isOpen ? (
        <section className="hawk-chat-panel" aria-label="HawkBytes chat">
          <header className="hawk-chat-header">
            <button
              type="button"
              className="hawk-chat-icon-button hawk-chat-back"
              onClick={startNewChat}
              aria-label="Start a new conversation"
              title="Start a new conversation"
            >
              <ArrowIcon />
            </button>
            <div className="hawk-chat-avatar">
              <HawkBytesMark />
            </div>
            <div className="hawk-chat-brand">
              <strong>HawkBytes</strong>
              <span>Here to help with your next big idea</span>
            </div>
            <div className="hawk-chat-actions">
              <div className="hawk-chat-menu-wrap">
                <button
                  type="button"
                  className="hawk-chat-icon-button"
                  aria-label="Chat options"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((open) => !open)}
                >
                  <MoreIcon />
                </button>
                {menuOpen && (
                  <div className="hawk-chat-menu">
                    <button type="button" onClick={startNewChat}>
                      Clear conversation
                    </button>
                  </div>
                )}
              </div>
              <button
                type="button"
                className="hawk-chat-icon-button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                title="Close chat"
              >
                <CloseIcon />
              </button>
            </div>
          </header>

          <div className="hawk-chat-content">
            {messages.length === 0 ? (
              <div className="hawk-chat-welcome">
                <h2>How can I help with HawkBytes?</h2>
                <p>
                  Ask about quantum research, AI products, software, or working
                  with our team.
                </p>
                <div className="hawk-chat-suggestions">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      type="button"
                      className="hawk-chat-suggestion"
                      key={suggestion}
                      onClick={() => sendMessage(suggestion)}
                    >
                      <span className="hawk-chat-sparkle">
                        <HawkBytesMark />
                      </span>
                      <span>{suggestion}</span>
                      <span className="hawk-chat-suggestion-arrow">
                        <ArrowIcon />
                      </span>
                    </button>
                  ))}
                </div>
                <a className="hawk-chat-contact-link" href="/contact-us">
                  Prefer to talk to a person? Contact our team
                </a>
              </div>
            ) : (
              <div className="hawk-chat-messages" aria-live="polite">
                {messages.map((message) => (
                  <div
                    className={`hawk-chat-message is-${message.role}`}
                    key={message.id}
                  >
                    {message.role === "assistant" && (
                      <span className="hawk-chat-message-avatar">
                        <HawkBytesMark />
                      </span>
                    )}
                    <div className="hawk-chat-bubble">
                      {message.role === "assistant" ? (
                        <HawkBytesChatText text={message.text} />
                      ) : (
                        <p>{message.text}</p>
                      )}
                      {message.link && (
                        <p>
                          <a href={message.link.href}>{message.link.label}</a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                {pending && (
                  <div className="hawk-chat-message is-assistant">
                    <span className="hawk-chat-message-avatar">
                      <HawkBytesMark />
                    </span>
                    <div className="hawk-chat-bubble hawk-chat-typing" role="status" aria-label="HawkBytes is typing">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <footer className="hawk-chat-footer">
            <form className="hawk-chat-composer" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your message..."
                aria-label="Type your message"
                autoComplete="off"
              />
              <button
                className="hawk-chat-send"
                type="submit"
                disabled={!input.trim() || pending}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </form>
            <p className="hawk-chat-note">
              HawkBytes assistant · For detailed help,{" "}
              <a href="/contact-us">contact our team</a>
            </p>
          </footer>
        </section>
      ) : (
        <button
          type="button"
          className="hawk-chat-launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open HawkBytes chat"
          aria-expanded={isOpen}
        >
          <span className="hawk-chat-launcher-badge">
            <HawkBytesMark />
          </span>
          <span>Chat with HawkBytes</span>
        </button>
      )}
    </div>
  );
}
