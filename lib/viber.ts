import { createHmac, timingSafeEqual } from "node:crypto";

const VIBER_API = "https://chatapi.viber.com/pa";
const BRAND_TEAL = "#16a085";

export type ViberUser = {
  id: string;
  name?: string;
  language?: string;
};

export type ViberCallback =
  | { event: "webhook" }
  | { event: "conversation_started"; user: ViberUser; subscribed?: boolean }
  | {
      event: "message";
      sender: ViberUser;
      message: { type: string; text?: string };
    }
  | { event: "failed"; user_id: string; desc?: string }
  | { event: "subscribed" | "unsubscribed" | "delivered" | "seen" };

type ViberKeyboardButton = {
  Columns: number;
  Rows: number;
  ActionType: "reply" | "open-url";
  ActionBody: string;
  Text: string;
  BgColor: string;
  TextSize: "small" | "regular" | "large";
  Silent?: boolean;
};

export type ViberKeyboard = {
  Type: "keyboard";
  DefaultHeight: boolean;
  BgColor: string;
  Buttons: ViberKeyboardButton[];
};

export function verifyViberSignature(
  rawBody: string,
  signature: string | null,
  authToken: string,
): boolean {
  if (!signature || !/^[0-9a-f]{64}$/i.test(signature)) return false;
  const expected = createHmac("sha256", authToken).update(rawBody).digest();
  return timingSafeEqual(Buffer.from(signature, "hex"), expected);
}

export function buildKeyboard(suggestions: string[], contactUrl: string): ViberKeyboard {
  const buttons: ViberKeyboardButton[] = suggestions.map((suggestion) => ({
    Columns: 6,
    Rows: 1,
    ActionType: "reply",
    ActionBody: suggestion,
    Text: `<font color="#ffffff">${suggestion}</font>`,
    BgColor: BRAND_TEAL,
    TextSize: "regular",
  }));

  buttons.push({
    Columns: 6,
    Rows: 1,
    ActionType: "open-url",
    ActionBody: contactUrl,
    Text: `<font color="${BRAND_TEAL}"><b>Contact our team</b></font>`,
    BgColor: "#ffffff",
    TextSize: "regular",
    Silent: true,
  });

  return {
    Type: "keyboard",
    DefaultHeight: false,
    BgColor: "#f5f8fc",
    Buttons: buttons,
  };
}

export async function sendViberText(options: {
  authToken: string;
  receiver: string;
  text: string;
  senderName: string;
  senderAvatar?: string;
  keyboard?: ViberKeyboard;
}) {
  const { authToken, receiver, text, senderName, senderAvatar, keyboard } = options;

  const response = await fetch(`${VIBER_API}/send_message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Viber-Auth-Token": authToken,
    },
    body: JSON.stringify({
      receiver,
      type: "text",
      text,
      min_api_version: 1,
      sender: {
        name: senderName.slice(0, 28),
        ...(senderAvatar ? { avatar: senderAvatar } : {}),
      },
      ...(keyboard ? { keyboard } : {}),
    }),
  });

  const result = (await response.json().catch(() => null)) as {
    status?: number;
    status_message?: string;
  } | null;

  if (!response.ok || result?.status !== 0) {
    throw new Error(
      `Viber send_message failed: HTTP ${response.status}, ${result?.status_message ?? "no response body"}`,
    );
  }
}
