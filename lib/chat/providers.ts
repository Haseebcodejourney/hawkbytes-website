import type { ChatTurn } from "./types";

type Provider = {
  name: string;
  url: string;
  apiKey: string;
  model: string;
  headers?: Record<string, string>;
};

const REQUEST_TIMEOUT_MS = 20_000;

/** Free-tier AI providers, tried in order; any provider without an API key is skipped. */
function configuredProviders(): Provider[] {
  const env = process.env;
  const providers: (Omit<Provider, "apiKey"> & { apiKey?: string })[] = [
    {
      name: "groq",
      url: "https://api.groq.com/openai/v1/chat/completions",
      apiKey: env.GROQ_API_KEY,
      model: env.GROQ_MODEL || "llama-3.3-70b-versatile",
    },
    {
      name: "gemini",
      url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      apiKey: env.GEMINI_API_KEY,
      model: env.GEMINI_MODEL || "gemini-2.5-flash",
    },
    {
      name: "openrouter",
      url: "https://openrouter.ai/api/v1/chat/completions",
      apiKey: env.OPENROUTER_API_KEY,
      model: env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct:free",
      headers: {
        "HTTP-Referer": env.SITE_URL || "https://hawkbytes.cloud",
        "X-Title": "HawkBytes",
      },
    },
  ];

  return providers.filter((provider): provider is Provider => Boolean(provider.apiKey));
}

export function hasAiProvider() {
  return configuredProviders().length > 0;
}

export async function generateReply(
  systemPrompt: string,
  turns: ChatTurn[],
): Promise<{ text: string; provider: string } | null> {
  for (const provider of configuredProviders()) {
    try {
      const response = await fetch(provider.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${provider.apiKey}`,
          ...provider.headers,
        },
        body: JSON.stringify({
          model: provider.model,
          messages: [{ role: "system", content: systemPrompt }, ...turns],
          temperature: 0.3,
          max_tokens: 1024,
        }),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });

      if (!response.ok) {
        console.error(`[chat] ${provider.name} returned ${response.status}: ${(await response.text()).slice(0, 300)}`);
        continue;
      }

      const data = (await response.json()) as { choices?: { message?: { content?: string | null } }[] };
      const text = data.choices?.[0]?.message?.content?.trim();
      if (text) return { text, provider: provider.name };

      console.error(`[chat] ${provider.name} returned an empty reply`);
    } catch (error) {
      console.error(`[chat] ${provider.name} request failed:`, error);
    }
  }

  return null;
}
