import type { Dictionary } from "@/lib/i18n/types";
import type { KnowledgeChunk } from "./site-knowledge";
import type { ChatReply } from "./types";

export type ScoredChunk = KnowledgeChunk & {
  score: number;
  /** Share of the visitor's own search words (directly or via synonyms) found in this chunk. */
  coverage: number;
};

const STOPWORDS = new Set(
  (
    "the a an and or of to in on for with at by from is are was were be been am do does did " +
    "can could would should will shall may might must i me my we our you your he she it its they them " +
    "their this that these those what which who whom whose how why when where there here about tell " +
    "please give show know want need like any some more most also just than then so if as into over " +
    "us hawkbytes hawk bytes today now time thing things get got make made really much many " +
    "ok okay yes no sure hi hello hey"
  ).split(" "),
);

/** Visitor wording mapped to the words the site copy actually uses. */
const EXPANSIONS: Record<string, string[]> = {
  email: ["contact", "email"],
  mail: ["contact", "email"],
  phone: ["contact", "phone", "call"],
  call: ["contact", "phone"],
  number: ["phone", "contact"],
  reach: ["contact"],
  where: ["location", "globally", "lahore"],
  located: ["location", "lahore"],
  location: ["lahore", "globally"],
  address: ["location", "lahore", "contact"],
  office: ["location", "lahore"],
  country: ["location", "lahore", "pakistan"],
  price: ["contact", "started"],
  pricing: ["contact", "started"],
  cost: ["contact", "started"],
  budget: ["contact", "started"],
  quote: ["contact", "started"],
  hire: ["careers", "hiring", "contact"],
  hiring: ["careers", "engineer"],
  job: ["careers", "engineer", "hire"],
  career: ["careers", "engineer"],
  vacancy: ["careers", "engineer"],
  apply: ["careers", "engineer"],
  intern: ["careers"],
  internship: ["careers"],
  ceo: ["founder", "ceo", "executive", "team"],
  founder: ["founder", "ceo", "executive", "team"],
  owner: ["founder", "ceo"],
  boss: ["founder", "ceo"],
  leader: ["executive", "team", "lead"],
  leadership: ["executive", "team"],
  staff: ["team", "executive"],
  people: ["team", "executive"],
  ai: ["ai", "artificial", "intelligence", "machine", "learning", "generative"],
  ml: ["machine", "learning"],
  llm: ["generative", "ai"],
  chatbot: ["ai", "generative"],
  app: ["mobile", "apps"],
  website: ["website", "web"],
  fix: ["qa", "testing", "reliable", "website", "engineering"],
  repair: ["qa", "testing", "reliable", "engineering"],
  bug: ["qa", "testing", "regression", "reliable"],
  maintain: ["maintainability", "reliable", "qa"],
  support: ["delivery", "support", "hands"],
  testing: ["qa", "testing"],
  test: ["qa", "testing"],
  cloud: ["devops", "cloud"],
  design: ["ui", "ux", "design"],
  privacy: ["privacy", "personal", "data"],
  cookie: ["cookies"],
  blog: ["blog", "articles", "insights"],
  article: ["blog", "articles"],
  client: ["testimonials", "clients"],
  review: ["testimonials", "clients"],
  product: ["products", "evefrine", "hawklens", "atondafleet", "leadhunter", "pixenect"],
  start: ["started", "contact"],
  begin: ["started", "contact"],
  process: ["methodology", "steps"],
  approach: ["methodology"],
  long: ["timelines", "weeks"],
  timeline: ["timelines", "weeks"],
  specialize: ["focus", "core", "primary"],
  specialise: ["focus", "core", "primary"],
  specialty: ["focus", "core", "primary"],
};

const MIN_SCORE = 1;
const MIN_COVERAGE = 0.5;
const BLOG_WEIGHT = 0.85;

type Intent = {
  pattern: RegExp;
  answer: (t: Dictionary) => ChatReply;
};

/** Common questions answered with a composed reply instead of a single matched passage. */
const INTENTS: Intent[] = [
  {
    pattern:
      /\b(ceo|founders?|co-?founders?|owners?|boss|leadership|executives?|management|team|staff|employees|who (runs|leads|owns|founded|started|works))\b/i,
    answer: (t) => ({
      text: `${t.about.team.title}:\n${t.about.team.members.map((m) => `- **${m.name}** — ${m.role}`).join("\n")}`,
      link: { href: "/about-us#team", label: t.about.team.title },
    }),
  },
  {
    pattern: /\b(hiring|jobs?|careers?|vacanc(y|ies)|internships?|openings?|positions|work (for|at|with) (you|hawkbytes)|join (you|the team|your team|hawkbytes))\b/i,
    answer: (t) => ({
      text: `${t.careers.body}\n\n${t.careers.openingsTitle}:\n${t.careers.roles.map((r) => `- **${r.title}** — ${r.text}`).join("\n")}`,
      link: { href: "/careers", label: t.careers.title },
    }),
  },
  {
    pattern: /\b(prices?|pricing|costs?|budget|rates?|how much|quotes?|fees?|charge)\b/i,
    answer: (t) => ({
      text: `Pricing depends on the scope of your project, so we don't list fixed prices on the site. Tell us what you need through the contact form or at ${t.footer.email}, and our team will reply within 24 hours with a clear next step.`,
      link: { href: "/contact-us", label: t.footer.contactSection },
    }),
  },
  {
    pattern: /\b(e-?mail|phone|call|contact|reach|whatsapp|telephone|number)\b/i,
    answer: (t) => ({
      text: `You can reach HawkBytes by email at ${t.footer.email}, by phone at ${t.footer.phone}, or through the contact form. We reply within 24 hours.`,
      link: { href: "/contact-us", label: t.footer.contactSection },
    }),
  },
  {
    pattern:
      /\b(where (are|is) (you|hawkbytes|your (office|company|team|hq))|located|location|address|offices?|based in|headquarters?|hq|which (country|city))\b/i,
    answer: (t) => ({
      text: `HawkBytes is based in ${t.footer.location}. ${t.about.location.body}`,
      link: { href: "/about-us#location", label: t.about.location.title },
    }),
  },
  {
    pattern:
      /\b(speciali[sz]\w*|specialty|main focus|focus(ed)? on|what (do|does) (you|hawkbytes) do|what is hawkbytes|who are you|about (you|hawkbytes|the company|your company))\b/i,
    answer: (t) => ({
      text: t.hero.body,
      link: { href: "/about-us", label: t.about.tagline.charAt(0) + t.about.tagline.slice(1).toLowerCase() },
    }),
  },
];

const GREETING = /^\s*(hi|hello|hey|hiya|good (morning|afternoon|evening)|salam|assalam[ou] ?alaikum|merhaba|selam|hola|bonjour|salut|privet|привет|здравствуйте|γεια|γειά)[\s!.,]*$/i;
const THANKS = /^\s*(thanks|thank you|thx|cheers|ok(ay)? thanks|teşekkürler|merci|gracias|спасибо|ευχαριστώ)[\s!.,]*$/i;

function stem(word: string) {
  if (word.length > 4 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
}

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length > 1 && !STOPWORDS.has(word))
    .map(stem);
}

type IndexedChunk = {
  chunk: KnowledgeChunk;
  title: string[];
  body: string[];
};

const indexCache = new WeakMap<KnowledgeChunk[], { docs: IndexedChunk[]; df: Map<string, number> }>();

function getIndex(chunks: KnowledgeChunk[]) {
  const cached = indexCache.get(chunks);
  if (cached) return cached;

  const docs = chunks.map((chunk) => ({ chunk, title: tokenize(chunk.title), body: tokenize(chunk.text) }));
  const df = new Map<string, number>();
  for (const doc of docs) {
    for (const token of new Set([...doc.title, ...doc.body])) {
      df.set(token, (df.get(token) ?? 0) + 1);
    }
  }

  const index = { docs, df };
  indexCache.set(chunks, index);
  return index;
}

function matches(token: string, term: string) {
  return token === term || (term.length >= 4 && token.startsWith(term)) || (token.length >= 4 && term.startsWith(token));
}

export function rankChunks(query: string, chunks: KnowledgeChunk[], limit: number): ScoredChunk[] {
  const queryTerms = [...new Set(tokenize(query))];
  const terms = new Map<string, { weight: number; origin: string }>();
  for (const term of queryTerms) {
    terms.set(term, { weight: 1, origin: term });
    for (const extra of EXPANSIONS[term] ?? []) {
      if (!terms.has(extra)) terms.set(extra, { weight: 0.6, origin: term });
    }
  }
  if (terms.size === 0) return [];

  const { docs, df } = getIndex(chunks);
  const total = docs.length;

  return docs
    .map(({ chunk, title, body }) => {
      let score = 0;
      const matchedOrigins = new Set<string>();
      for (const [term, { weight, origin }] of terms) {
        const inTitle = title.some((token) => matches(token, term));
        const count = body.filter((token) => matches(token, term)).length;
        if (!inTitle && count === 0) continue;

        matchedOrigins.add(origin);
        const idf = Math.log(1 + total / (1 + (df.get(term) ?? 0)));
        const tf = count / (count + 1.2);
        score += weight * idf * (tf + (inTitle ? 1.5 : 0));
      }
      if (chunk.href.startsWith("/blog/")) score *= BLOG_WEIGHT;
      return { ...chunk, score, coverage: matchedOrigins.size / queryTerms.length };
    })
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function clip(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const sentenceEnd = cut.lastIndexOf(". ");
  return sentenceEnd > max * 0.5 ? cut.slice(0, sentenceEnd + 1) : `${cut.trimEnd()}…`;
}

/** Answers straight from the site copy, used when no AI provider is configured or reachable. */
export function answerFromSite(question: string, chunks: KnowledgeChunk[], t: Dictionary): ChatReply {
  if (GREETING.test(question)) {
    return {
      text: "Hi! I'm the HawkBytes assistant. Ask me anything about our quantum research, AI products, services, team, careers, or how to get in touch.",
    };
  }

  if (THANKS.test(question)) {
    return { text: "You're welcome! Is there anything else you'd like to know about HawkBytes?" };
  }

  const intent = INTENTS.find(({ pattern }) => pattern.test(question));
  if (intent) return intent.answer(t);

  const [best] = rankChunks(question, chunks, 1);
  if (!best || best.score < MIN_SCORE || best.coverage < MIN_COVERAGE) {
    return {
      text: `I couldn't find that on our site. Our team can help directly — email ${t.footer.email} or send us a message.`,
      link: { href: "/contact-us", label: t.footer.contactSection },
    };
  }

  const learnMore = t.common.learnMore.charAt(0).toUpperCase() + t.common.learnMore.slice(1);
  return {
    text: clip(best.text, 520),
    link: { href: best.href, label: learnMore },
  };
}
