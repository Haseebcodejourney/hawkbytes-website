"use client";

import { useState } from "react";
import GlowButton from "@/components/GlowButton";
import StickyNav, { type StickyNavLink } from "@/components/StickyNav";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import "@/components/Faq.css";
import "./ResearchPage.css";

const NAV_LINKS: StickyNavLink[] = [
  { href: "#methodology", num: "01", label: "METHODOLOGY" },
  { href: "#services", num: "02", label: "SERVICES" },
  { href: "#how-we-help", num: "03", label: "HOW WE HELP" },
  { href: "#why-us", num: "04", label: "WHY HAWKBYTES" },
  { href: "#testimonials", num: "05", label: "TESTIMONIALS" },
  { href: "#about", num: "06", label: "ABOUT RESEARCH" },
  { href: "#related", num: "07", label: "RELATED" },
  { href: "#faq", num: "08", label: "FAQ" },
];

const ASSETS = {
  badge:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67f635806136378181058a6e_dev.svg",
  heroBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e55077f030ad874c0384cc_blog-post-bg-Group.avif",
  heroBgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e672e7a7611321fad71b29_blogpost-bg-mob.avif",
  ctaBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf4b4595b9051b25a974e_cta-bg-2.avif",
  ctaBgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf6ffe3db08bb29c8d22c_CTA-bg-mob.avif",
  effects1:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d047789b98be40b43d8cca_effects-1.avif",
  effects2:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d0484cb7b7d01086714bdc_effects-2.avif",
  faqToggle:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d32ef5f2c13b180466b3c8_FAQ%20Toggle%20Container.svg",
  faqBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd6e680b8ce16c28c99348_FAQ%20Image.svg",
  arrow:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d0103df322d59181373f53_arrow-c.svg",
};

const SERVICE_CARDS = [
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a69f3282b5428d8c1_about-icon-1.svg",
    title: "Quantum Algorithm Research",
    text: "We explore quantum algorithms for optimization, simulation, and machine learning — documenting gaps, opportunities, and a clear path from theory to prototype.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a19f4bf8d2f046242_about-icon-2.svg",
    title: "Hybrid Classical–Quantum Systems",
    text: "HawkBytes designs hybrid workflows that combine classical infrastructure with quantum backends — practical architectures you can experiment with today.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530adc8771031a5185f8_about-icon-3.svg",
    title: "Applied Prototypes & Validation",
    text: "We build research prototypes, run simulations, and validate results so your team can decide what deserves deeper investment — and what does not.",
  },
];

const HELP_ITEMS = [
  {
    title: "Problem Framing & Feasibility",
    text: "We clarify which parts of your challenge are quantum-ready, which stay classical, and where research effort creates real leverage.",
  },
  {
    title: "Algorithm Design & Simulation",
    text: "Our researchers design and simulate candidate approaches, stress-testing ideas before expensive hardware or long build cycles.",
  },
  {
    title: "Prototype Engineering",
    text: "We turn promising directions into working prototypes — notebooks, pipelines, and hybrid demos your stakeholders can evaluate.",
  },
  {
    title: "Path to Productization",
    text: "When research succeeds, we map the next steps into AI products, software platforms, or production systems with clear ownership.",
  },
];

const WHY_ITEMS = [
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a67a7c58456e85002_about-icon-4.svg",
    title: "Ready to Start",
    text: "Research teams that take months to staff slow you down. HawkBytes is structured to begin discovery and experimentation quickly.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a69f3282b5428d8c1_about-icon-1.svg",
    title: "Research-First Partnership",
    text: "We put scientific rigor and your outcomes first — prioritizing the work that matters without sacrificing depth or quality.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a19f4bf8d2f046242_about-icon-2.svg",
    title: "Technology Enabled",
    text: "We use modern simulation stacks, experiment tooling, and engineering practices to accelerate research without losing clarity.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530adc8771031a5185f8_about-icon-3.svg",
    title: "Hands-On Delivery",
    text: "We roll up our sleeves — from literature review and modeling to prototypes and documentation your team can own.",
  },
];

const RELATED = [
  {
    name: "AI Products",
    text: "Turn research insights into intelligent software — ML, generative AI, and product platforms built for real users.",
    href: "/#services",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd7ed98ebf2dd2121c7524_Logo%20Container-3-new.avif",
  },
  {
    name: "Software Platforms",
    text: "Engineer SaaS and enterprise platforms with modern architecture when research is ready to scale.",
    href: "/#services",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e22c48af42dc2383423_Logo-5.avif",
  },
  {
    name: "Web, Mobile & QA",
    text: "Ship websites, apps, and quality-assured software alongside research — one partner from experiment to release.",
    href: "/#solutions",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e229a276642ebe302c2_Logo-7.avif",
  },
];

const FAQS = [
  {
    question: "What research does HawkBytes focus on?",
    answer:
      "Quantum computing research is our primary focus — algorithms, hybrid classical–quantum systems, and applied prototypes. We also connect research outcomes to AI products and software when the path is clear.",
  },
  {
    question: "Do you only do theoretical research?",
    answer:
      "No. We balance rigorous research with applied prototypes and validation so partners can evaluate feasibility and decide what to productize next.",
  },
  {
    question: "Who is this engagement for?",
    answer:
      "Startups, labs, and enterprises that need serious quantum or applied research collaboration — from exploratory studies to prototype-backed roadmaps.",
  },
  {
    question: "How does HawkBytes support research projects?",
    answer:
      "We provide discovery, algorithm and simulation work, prototype engineering, documentation, and a clear path toward product or platform delivery when results warrant it.",
  },
  {
    question: "Is research a one-time project?",
    answer:
      "Some engagements are scoped studies. Others are ongoing partnerships with iterative experiments. We match the cadence to your goals and readiness.",
  },
  {
    question: "Can you also build the product after research?",
    answer:
      "Yes. When research succeeds, our product and engineering teams can continue into AI products, software platforms, websites, apps, and QA.",
  },
  {
    question: "How long does a typical research engagement take?",
    answer:
      "Timelines vary with scope and maturity — from focused multi-week explorations to multi-month programs. We define milestones up front so progress stays visible.",
  },
  {
    question: "How do we get started?",
    answer:
      "Contact us with your problem space, constraints, and goals. We will propose a clear discovery plan and next step.",
  },
];

const CHEVRON = (
  <svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" aria-hidden="true">
    <path
      d="M8.1083 14.5302L7.05005 13.4697L11.0168 9.49998L7.05005 5.53023L8.1113 4.46973L12.075 8.43948C12.3562 8.72077 12.5142 9.10223 12.5142 9.49998C12.5142 9.89772 12.3562 10.2792 12.075 10.5605L8.1083 14.5302Z"
      fill="currentColor"
    />
  </svg>
);

function ArrowIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 19 18" fill="none" aria-hidden="true">
      <path
        d="M8.60903 14.0302L7.55078 12.9697L11.5175 8.99998L7.55078 5.03023L8.61203 3.96973L12.5758 7.93948C12.857 8.22077 13.015 8.60223 13.015 8.99998C13.015 9.39772 12.857 9.77918 12.5758 10.0605L8.60903 14.0302Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ResearchPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="section research-hero-section">
        <div className="nav-placeholder" />
        <div className="section-padding top-5 bottom-5">
          <div className="container">
            <div className="research_hero">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ASSETS.badge} alt="" className="research_hero-badge" width={72} height={72} />
              <div className="spacer-small-16" />
              <div className="research_hero-title-wr">
                <h1 className="heading-style-60">
                  Quantum Computing Research Services
                </h1>
              </div>
              <div className="spacer-small-16" />
              <div className="max-width-820">
                <div className="text-color-light-grey">
                  <p className="text-size-small-14">
                    HawkBytes provides specialized quantum computing research
                    designed to clarify hard problems, reduce uncertainty, and
                    help your organization move from frontier ideas to
                    validated prototypes — confidently and effectively.
                  </p>
                </div>
              </div>
              <div className="spacer-large-40" />
              <div className="research_hero-btn-row">
                <GlowButton href="/contact-us">Talk to an expert</GlowButton>
                <a href="#methodology" className="button is-text">
                  <div className="button-text-wr">
                    <div>READ MORE</div>
                    <div className="btn-icon-embed is-arrow-right">
                      <ArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-bg" aria-hidden="true">
          <div className="container is-for-bg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ASSETS.heroBg} loading="lazy" alt="" className="research_hero-bg-img" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.heroBgMob}
              loading="lazy"
              alt=""
              className="research_hero-bg-img-mob"
            />
          </div>
        </div>
      </section>

      <div className="home_sticky-box">
        <StickyNav links={NAV_LINKS} noBottomPadding />
        <div className="home_sections-wr">
          <Methodology
            tagline="YOUR STEPS TO RESEARCH"
            title="Quantum Research Methodology"
            description="We've developed a clear 4-step methodology to take you from research discovery all the way to validated prototypes and delivery."
          />

          <section id="services" className="section research-services-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="research_services-head">
                    <h2 className="heading-style-48">
                      Our Quantum Research Services
                    </h2>
                    <div className="text-color-light-grey">
                      <p className="text-size-small-14">
                        As a dedicated research partner, HawkBytes delivers
                        personalized advisory and hands-on research tailored to
                        your goals. We support ongoing exploration with clear
                        recommendations as your problem space evolves.
                      </p>
                    </div>
                  </div>
                  <div className="spacer-medium-32" />
                  <div className="research_service-grid">
                    {SERVICE_CARDS.map((card) => (
                      <div key={card.title} className="research_service-card">
                        <div className="research_service-card-stroke" />
                        <div className="research_service-card-inner">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={card.icon}
                            alt=""
                            className="research_service-icon"
                            loading="lazy"
                          />
                          <h3 className="text-size-large-21">{card.title}</h3>
                          <p className="text-size-small-14 text-color-light-grey">
                            {card.text}
                          </p>
                          <div className="research_service-arrow" aria-hidden="true">
                            {CHEVRON}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="how-we-help" className="section research-help-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="align-left">
                    <h2 className="heading-style-48">
                      How HawkBytes Helps You Advance Research
                    </h2>
                    <div className="spacer-medium-30" />
                    <div className="research_help-grid">
                      {HELP_ITEMS.map((item) => (
                        <div key={item.title} className="research_help-item">
                          <h3 className="text-size-large-21">{item.title}</h3>
                          <div className="spacer-xxsmall-4" />
                          <p className="text-size-small-14 text-color-light-grey">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section research-mid-cta-section">
            <div className="section-padding top-5 bottom-5">
              <div className="research-mid-cta-wr anim-appear-on-scroll is-visible">
                <div className="research-mid-cta-stroke">
                  <div className="research-mid-cta-content">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ASSETS.ctaBg} alt="" className="research-mid-cta-bg" loading="lazy" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.ctaBgMob}
                      alt=""
                      className="research-mid-cta-bg is-mob"
                      loading="lazy"
                    />
                    <div className="max-width-940">
                      <h2 className="heading-style-48">
                        Partner with HawkBytes for Your Research Needs
                      </h2>
                    </div>
                    <div className="spacer-medium-30" />
                    <div className="max-width-700">
                      <p className="text-size-regular-16 text-color-light-grey">
                        Confirm that your research direction is sound before you
                        scale. HawkBytes specialists offer clear guidance and
                        dedicated support — minimizing risk and empowering your
                        team with evidence-backed next steps.
                      </p>
                    </div>
                    <div className="spacer-medium-36" />
                    <GlowButton href="/contact-us">Talk to an expert</GlowButton>
                  </div>
                </div>
                <div className="research-mid-cta-fx" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ASSETS.effects1} alt="" className="research-mid-cta-fx-1" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ASSETS.effects2} alt="" className="research-mid-cta-fx-2" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          <section id="why-us" className="section bg-color-secondary research-why-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="research_why-head">
                    <h2 className="heading-style-48">Why Choose HawkBytes?</h2>
                    <div className="text-color-grey">
                      <p className="text-size-small-14">
                        With deep expertise in quantum research and product
                        engineering, HawkBytes is positioned to guide your
                        organization through complex technical questions — while
                        keeping a clear path to usable outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="spacer-medium-32" />
                  <div className="research_why-grid">
                    {WHY_ITEMS.map((item) => (
                      <div key={item.title} className="research_why-item">
                        <div className="research_why-top">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.icon}
                            alt=""
                            className="research_why-icon"
                            loading="lazy"
                          />
                          <h3 className="text-size-large-21">{item.title}</h3>
                        </div>
                        <p className="text-size-small-14 text-color-grey">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Testimonials />

          <section id="about" className="section research-about-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="research_about-block">
                    <h2 className="heading-style-48">About Quantum Research</h2>
                    <div className="research_about-content">
                      <p className="text-size-small-14 text-color-light-grey">
                        Quantum computing research explores how quantum
                        information processing can solve problems that challenge
                        classical systems — from optimization and materials
                        simulation to new approaches in machine learning.
                        Organizations that invest early build clearer roadmaps,
                        stronger technical judgment, and options for future
                        advantage.
                      </p>
                      <div className="spacer-medium-30" />
                      <h3 className="text-size-large-21">Where HawkBytes focuses</h3>
                      <div className="spacer-medium-10" />
                      <ul className="research_about-list">
                        <li>Quantum algorithms for optimization and simulation</li>
                        <li>Hybrid classical–quantum system design</li>
                        <li>Applied prototypes and experimental validation</li>
                        <li>Research documentation and stakeholder communication</li>
                        <li>Paths from research outcomes into AI and software products</li>
                      </ul>
                      <div className="spacer-medium-30" />
                      <h3 className="text-size-large-21">Engagement outcomes</h3>
                      <div className="spacer-medium-10" />
                      <ul className="research_about-list">
                        <li>Feasibility clarity on quantum vs classical approaches</li>
                        <li>Working prototypes your team can evaluate</li>
                        <li>Risk reduction before larger R&amp;D investment</li>
                        <li>A practical roadmap toward productization when ready</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="related" className="section research-related-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <p className="tagline-text-blue-gradient">RELATED SERVICES</p>
                  <div className="research_related-head">
                    <h2 className="heading-style-48">Beyond Research</h2>
                    <div className="text-color-light-grey">
                      <p className="text-size-small-14">
                        Looking for more than research collaboration? HawkBytes
                        also builds AI products, software platforms, and digital
                        delivery — so you can move from experiment to ship with
                        one partner.
                      </p>
                    </div>
                  </div>
                  <div className="spacer-medium-32" />
                  <div className="research_related-grid">
                    {RELATED.map((item) => (
                      <a key={item.name} href={item.href} className="research_related-card">
                        <div className="research_related-card-stroke" />
                        <div className="research_related-card-inner">
                          <div className="research_related-top">
                            <p className="text-size-small-14-rm">{item.name}</p>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={ASSETS.arrow} alt="" className="research_related-arrow" />
                          </div>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.logo} alt="" className="research_related-logo" loading="lazy" />
                          <p className="text-size-small-14 text-color-light-grey">{item.text}</p>
                          <span className="research_related-learn">
                            learn more
                            <span className="research_related-learn-icon">{CHEVRON}</span>
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="section bg-color-secondary faq-section research-faq-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="home_faq-block">
                    <div className="home_faq-title-wr">
                      <h2 className="heading-style-48">Frequently asked questions</h2>
                    </div>
                    <div className="faq-wr">
                      {FAQS.map((faq, index) => {
                        const isOpen = openFaq === index;
                        return (
                          <div
                            key={faq.question}
                            className={`faq_item-wrapper${isOpen ? " is-open" : ""}`}
                          >
                            <button
                              type="button"
                              className="faq_question"
                              aria-expanded={isOpen}
                              onClick={() => setOpenFaq(isOpen ? null : index)}
                            >
                              <span
                                className="text-size-large-21 gradient-text-on-hover"
                                data-text={faq.question}
                              >
                                {faq.question}
                              </span>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={ASSETS.faqToggle}
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
            <img src={ASSETS.faqBg} loading="lazy" alt="" className="faq-bg-img" />
          </section>

          <Cta />
        </div>
      </div>
    </>
  );
}
