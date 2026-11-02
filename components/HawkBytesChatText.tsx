import Link from "next/link";
import type { ReactNode } from "react";

const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
const LIST_ITEM = /^\s*([-*•]|\d+[.)])\s+/;
const ORDERED_ITEM = /^\s*\d+[.)]\s+/;

function safeHref(href: string) {
  return /^(\/(?!\/)|https?:\/\/|mailto:|tel:)/i.test(href) ? href : null;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let index = 0;

  for (const match of text.matchAll(INLINE)) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    const key = `${keyPrefix}-${index++}`;

    if (match[3] !== undefined) {
      nodes.push(<strong key={key}>{match[3]}</strong>);
    } else {
      const href = safeHref(match[2]);
      if (!href) {
        nodes.push(match[1]);
      } else if (href.startsWith("/")) {
        nodes.push(
          <Link key={key} href={href}>
            {match[1]}
          </Link>,
        );
      } else {
        nodes.push(
          <a key={key} href={href} target="_blank" rel="noopener noreferrer">
            {match[1]}
          </a>,
        );
      }
    }

    last = start + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

type Block = { list: boolean; ordered: boolean; lines: string[] };

/** Renders the small markdown subset the assistant uses: paragraphs, lists, **bold** and [links](/path). */
export default function HawkBytesChatText({ text }: { text: string }) {
  const blocks: Block[] = [];
  let current: Block | null = null;

  for (const line of text.trim().split("\n")) {
    if (!line.trim()) {
      current = null;
      continue;
    }
    const isItem = LIST_ITEM.test(line);
    if (!current || current.list !== isItem) {
      current = { list: isItem, ordered: ORDERED_ITEM.test(line), lines: [] };
      blocks.push(current);
    }
    current.lines.push(isItem ? line.replace(LIST_ITEM, "") : line);
  }

  return (
    <>
      {blocks.map((block, b) => {
        if (!block.list) {
          return <p key={b}>{renderInline(block.lines.join("\n"), `${b}`)}</p>;
        }
        const items = block.lines.map((line, i) => <li key={i}>{renderInline(line, `${b}-${i}`)}</li>);
        return block.ordered ? (
          <ol key={b}>{items}</ol>
        ) : (
          <ul key={b}>{items}</ul>
        );
      })}
    </>
  );
}
