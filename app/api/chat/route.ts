import { NextResponse } from "next/server";
import { generateReply, hasAiProvider } from "@/lib/chat/providers";
import { answerFromSite, rankChunks, type ScoredChunk } from "@/lib/chat/search";
import { buildCompanySummary, buildSiteKnowledge, SITE_PAGES, type KnowledgeChunk } from "@/lib/chat/site-knowledge";
import type { ChatResponse, ChatTurn } from "@/lib/chat/types";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE, isLocale, LOCALE_META, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/types";

export const runtime = "nodejs";

const MAX_TURNS = 10;
const MAX_MESSAGE_CHARS = 1000;
const CONTEXT_CHUNKS = 8;
const RATE_LIMIT = { windowMs: 60_000, maxRequests: 20 };

const knowledgeByLocale = new Map<Locale, KnowledgeChunk[]>();
const requestLog = new Map<string, number[]>();

type ChatRequestBody = {
  locale?: unknown;
  messages?: { role?: unknown; content?: unknown }[];
};

function getKnowledge(locale: Locale, t: Dictionary) {
  let knowledge = knowledgeByLocale.get(locale);
  if (!knowledge) {
    knowledge = buildSiteKnowledge(t);
    knowledgeByLocale.set(locale, knowledge);
  }
  return knowledge;
}

function isRateLimited(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT.windowMs);
  recent.push(now);
  requestLog.set(ip, recent);

  if (requestLog.size > 5000) {
    for (const [key, times] of requestLog) {
      if (times.every((time) => now - time >= RATE_LIMIT.windowMs)) requestLog.delete(key);
    }
  }

  return recent.length > RATE_LIMIT.maxRequests;
}

function parseTurns(messages: ChatRequestBody["messages"]): ChatTurn[] {
  const turns = (Array.isArray(messages) ? messages : [])
    .filter(
      (message): message is ChatTurn =>
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        message.content.trim().length > 0,
    )
    .slice(-MAX_TURNS)
    .map((message) => ({ role: message.role, content: message.content.trim().slice(0, MAX_MESSAGE_CHARS) }));

  while (turns[0]?.role === "assistant") turns.shift();
  return turns;
}

function buildSystemPrompt(t: Dictionary, locale: Locale, context: ScoredChunk[]) {
  return [
    "You are the HawkBytes website assistant, chatting with visitors on the HawkBytes website.",
    "Answer using ONLY the site information below. If the answer is not there, say you don't have that detail and suggest contacting the team via [Contact Us](/contact-us) or email. Never invent prices, timelines, clients, people, products, or contact details.",
    `Reply in the same language the visitor writes in. The site is currently displayed in ${LOCALE_META[locale].label}.`,
    "Keep replies short and friendly: 1-4 sentences, or a short bullet list when listing several things. Use plain text; you may use **bold** and markdown links to the page paths listed below, e.g. [Careers](/careers). No headings or tables.",
    "If the visitor asks about something unrelated to HawkBytes, briefly say you can only help with HawkBytes topics.",
    "",
    "SITE PAGES:",
    ...SITE_PAGES.map((page) => `- ${page.href}: ${page.label}`),
    "",
    "COMPANY SUMMARY:",
    buildCompanySummary(t),
    "",
    "SITE INFORMATION (most relevant to the conversation first):",
    ...context.map((item) => `- ${item.title} (${item.href}): ${item.text.slice(0, 900)}`),
  ].join("\n");
}

export async function POST(request: Request) {
  let body: ChatRequestBody;
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const turns = parseTurns(body.messages);
  const question = turns.findLast((turn) => turn.role === "user")?.content;
  if (!question) {
    return NextResponse.json({ error: "A message is required." }, { status: 400 });
  }

  if (isRateLimited(request)) {
    return NextResponse.json<ChatResponse>(
      { text: "You're sending messages quickly — please wait a moment and try again.", source: "rate-limit" },
      { status: 429 },
    );
  }

  const locale = typeof body.locale === "string" && isLocale(body.locale) ? body.locale : DEFAULT_LOCALE;
  const t = getDictionary(locale);
  const knowledge = getKnowledge(locale, t);

  if (hasAiProvider()) {
    const recentQuestions = turns
      .filter((turn) => turn.role === "user")
      .slice(-2)
      .map((turn) => turn.content)
      .join(" ");
    const context = rankChunks(recentQuestions, knowledge, CONTEXT_CHUNKS);
    const ai = await generateReply(buildSystemPrompt(t, locale, context), turns);
    if (ai) {
      return NextResponse.json<ChatResponse>({ text: ai.text, source: ai.provider });
    }
  }

  return NextResponse.json<ChatResponse>({ ...answerFromSite(question, knowledge, t), source: "site" });
}
