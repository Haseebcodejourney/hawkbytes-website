"use client";

import { useState } from "react";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Faq.css";

const TOGGLE_ICON =
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d32ef5f2c13b180466b3c8_FAQ%20Toggle%20Container.svg";

const BG_IMG =
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd6e680b8ce16c28c99348_FAQ%20Image.svg";

export default function Faq() {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-color-secondary faq-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="home_faq-block">
              <div className="home_faq-title-wr">
                <h2 className="heading-style-48">{t.faq.title}</h2>
              </div>

              <div className="faq-wr">
                {t.faq.items.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={faq.question}
                      className={`faq_item-wrapper${isOpen ? " is-open" : ""}`}
                    >
                      <button
                        type="button"
                        className="faq_question"
                        aria-expanded={isOpen}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
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
                      <div className="faq_answer">
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
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BG_IMG} loading="lazy" alt="" className="faq-bg-img" />
    </section>
  );
}
