export type ChatRole = "user" | "assistant";

export type ChatTurn = {
  role: ChatRole;
  content: string;
};

export type ChatReply = {
  text: string;
  link?: {
    href: string;
    label: string;
  };
};

export type ChatResponse = ChatReply & {
  source: string;
};
