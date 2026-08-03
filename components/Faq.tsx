"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Faq.css";

const TOGGLE_ICON =
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d32ef5f2c13b180466b3c8_FAQ%20Toggle%20Container.svg";

const FAQ_HEADING_BG = "/faq-heading-bg.png";

export type FaqItemData = {
  question: string;
  answer: string;
};

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;

    if (isOpen) {
      setMaxHeight(el.scrollHeight);
      return;
    }

    setMaxHeight(0);
  }, [isOpen, faq.answer]);

  useEffect(() => {
    const el = answerRef.current;
    if (!el || !isOpen) return;

    const syncHeight = () => setMaxHeight(el.scrollHeight);
    const observer = new ResizeObserver(syncHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div className={`faq_item-wrapper${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="faq_question"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span
          className="text-size-large-21 gradient-text-on-hover"
          data-text={faq.question}
        >
          {faq.question}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TOGGLE_ICON}
          loading="lazy"
          alt=""
          className="faq_icon-img"
        />
      </button>
      <div ref={answerRef} className="faq_answer" style={{ maxHeight }}>
        <div className="faq_answer-inner">
          <div className="faq_answer-wrapper">
            <div className="text-size-small-14">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq_line-wr" aria-hidden="true">
        <div className="faq_line-white" />
        <div className="faq_line-blue" />
      </div>
    </div>
  );
}

export function FaqSection({
  title,
  items,
  id,
  className = "",
  appearVisible = false,
}: {
  title: string;
  items: FaqItemData[];
  id?: string;
  className?: string;
  appearVisible?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id={id}
      className={`section bg-color-secondary faq-section${className ? ` ${className}` : ""}`}
    >
      <div className="section-padding top-5 bottom-5">
        <div
          className={`container anim-appear-on-scroll${appearVisible ? " is-visible" : ""}`}
        >
          <div className="left-padding">
            <div className="home_faq-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FAQ_HEADING_BG}
                loading="lazy"
                alt=""
                className="faq-title-bg-img"
                aria-hidden="true"
              />

              <div className="home_faq-title-wr">
                <h2 className="heading-style-48">{title}</h2>
              </div>

              <div className="faq-wr">
                {items.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <FaqItem
                      key={faq.question}
                      faq={faq}
                      isOpen={isOpen}
                      onToggle={() => setOpenIndex(isOpen ? null : index)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Faq() {
  const t = useTranslations();

  return <FaqSection title={t.faq.title} items={t.faq.items} />;
}
