"use client";

import { useState } from "react";
import "./Faq.css";

const TOGGLE_ICON =
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d32ef5f2c13b180466b3c8_FAQ%20Toggle%20Container.svg";

const BG_IMG =
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd6e680b8ce16c28c99348_FAQ%20Image.svg";

const FAQS = [
  {
    question: "What is HawkBytes primarily focused on?",
    answer:
      "Products and research. Our main focus is quantum computing research, followed by AI products and software platforms. We also provide web, mobile, and QA services.",
  },
  {
    question: "Do you only do quantum research?",
    answer:
      "Quantum computing research is our deepest priority, but we also build AI products and software, and deliver websites, apps, and testing when clients need a full build partner.",
  },
  {
    question: "Can HawkBytes build my website or mobile app?",
    answer:
      "Yes. Engineering services — websites, mobile apps, QA, design, and DevOps — are part of what we offer alongside our product and research work.",
  },
  {
    question: "Do you collaborate on research projects?",
    answer:
      "Yes. We work with teams who want applied quantum and AI research, prototypes, and productization paths from experiment to production.",
  },
  {
    question: "Are you a services agency or a product company?",
    answer:
      "A product and research company first. Services support delivery — they are not the center of our identity.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Startups, research partners, and established businesses that want serious technology work — from quantum/AI R&D to shipping software products.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through Contact Us. Share whether you need research collaboration, a product build, or digital delivery — we will respond with a clear next step.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-color-secondary faq-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="home_faq-block">
              <div className="home_faq-title-wr">
                <h2 className="heading-style-48">Frequently asked questions</h2>
              </div>

              <div className="faq-wr">
                {FAQS.map((faq, index) => {
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
