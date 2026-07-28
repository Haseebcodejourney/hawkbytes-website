"use client";

import { useState } from "react";
import "./Faq.css";

const TOGGLE_ICON =
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d32ef5f2c13b180466b3c8_FAQ%20Toggle%20Container.svg";

const BG_IMG =
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd6e680b8ce16c28c99348_FAQ%20Image.svg";

const FAQS = [
  {
    question: "Can you advise on which compliance frameworks apply to my business?",
    answer:
      "Absolutely. We assess your industry, applicable regulatory requirements and data handling mechanisms to advise on the required compliance attestations and certifications.",
  },
  {
    question:
      "Do you provide one-time assessments or ongoing compliance monitoring?",
    answer:
      "We offer both one-time assessments and ongoing services, although the majority of our clients benefit from recurring engagements.",
  },
  {
    question: "How soon can I obtain my compliance attestation report?",
    answer:
      "Timelines may vary based on your current security measures and compliance frameworks in question. We’ll work with you to expedite the process and help you obtain the certification(s) as soon as possible.",
  },
  {
    question: "Do you assist with drafting compliance documentation?",
    answer:
      "Yes, our consultants can help you draft, refine and implement security policies, procedures and internal documentation required.",
  },
  {
    question: "What happens if I fail an audit?",
    answer:
      "CyberCrest is committed to take you all the way to success, with every audit and certification process precluded by thorough security gap assessment and remediation support. This makes audit failure unlikely given our proven methodology.",
  },
  {
    question: "Can you work as an extension to our team?",
    answer:
      "Yes, we offer team augmentation and virtual CISO among our cooperation models.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes, we are happy to work with organizations of all sizes, adjusting our approach and strategies to their particular goals in each case. Whether you’re a startup or a global Fortune 500 organization, CyberCrest has the experience and capabilities to deliver.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-color-secondary faq-section">
      <div className="section-padding top-0">
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
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
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

                      {index < FAQS.length - 1 ? (
                        <div className="faq_line-wr" aria-hidden="true">
                          <div className="faq_line-white" />
                          <div className="faq_line-blue" />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BG_IMG}
                loading="lazy"
                alt=""
                className="faq-bg-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
