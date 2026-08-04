import { createHmac, timingSafeEqual } from "crypto";

const CAPTCHA_TTL_MS = 10 * 60 * 1000;

function getSecret(): string {
  return (
    process.env.CAPTCHA_SECRET ??
    process.env.RESEND_API_KEY ??
    "hawkbytes-dev-captcha-secret"
  );
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export type CaptchaChallenge = {
  question: string;
  token: string;
};

export function createCaptchaChallenge(): CaptchaChallenge {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 1;
  const answer = String(a + b);
  const expiresAt = Date.now() + CAPTCHA_TTL_MS;
  const payload = `${answer}.${expiresAt}`;
  const token = `${payload}.${sign(payload)}`;

  return {
    question: `${a} + ${b}`,
    token,
  };
}

export function verifyCaptchaChallenge(
  token: string,
  answer: string,
): boolean {
  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [expectedAnswer, expiresAtRaw, signature] = parts;
  const expiresAt = Number(expiresAtRaw);
  if (!expectedAnswer || !signature || !Number.isFinite(expiresAt)) {
    return false;
  }

  if (Date.now() > expiresAt) {
    return false;
  }

  const payload = `${expectedAnswer}.${expiresAtRaw}`;
  const expectedSignature = sign(payload);
  if (!safeEqual(signature, expectedSignature)) {
    return false;
  }

  return expectedAnswer === answer.trim();
}
