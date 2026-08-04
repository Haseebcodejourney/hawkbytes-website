"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./ContactPage.css";

const ASSETS = {
  quoteIcon:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d30286ee799620b5c1f98f_quote-icon-2.avif",
  author:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd22ca92544c02c6b8f41b_Testimonial-1.avif",
  formBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd2e291d68da2f669eb042_form-bg.avif",
  back1:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd2e2808eccbb311a4ef6a_form-bg-item1.svg",
  back2:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd2e28d5ab3c72e5412fd3_form-bg-item2.svg",
  ctaLogo:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d3f10ee963dc26bf5c0f3e_Logo%20cta.avif",
  bgFrame:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cedbf13a28462cd45fdff0_C-Frame.svg",
  bgFrameMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dc28c077abf78bbedfd5a8_Frame-mob-2.svg",
  check:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e1699a7740550bb5d8e75d_fa-solid_check.svg",
};

function ChevronIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactPage() {
  const t = useTranslations();
  const contact = t.contact;
  const form = contact.form;
  const [hearAbout, setHearAbout] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [error, setError] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  useEffect(() => {
    if (!successOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [successOpen]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    if (!form.checkValidity() || !agreed || !captchaChecked) {
      setError(true);
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSuccessOpen(true);
      form.reset();
      setHearAbout("");
      setAgreed(true);
      setCaptchaChecked(false);
    }, 600);
  };

  return (
    <>
      <section className="section overflow-hidden contact-page-section">
        <div className="nav-placeholder" />
        <div className="section-padding contact-section-padding">
          <div className="container is-relative">
            <div className="contact_hero">
              <div className="contact_hero-content">
                <div className="home_hero-tagline-wr">
                  <div className="home_hero-tagline-line" />
                  <div>{contact.tagline}</div>
                  <div className="home_hero-tagline-line is-2" />
                </div>

                <h1 className="heading-style-48 is-contact-page">{contact.title}</h1>

                <div className="max-width-580">
                  <div className="text-color-light-grey">
                    <p className="text-size-regular-16">{contact.body}</p>
                  </div>
                </div>

                <div className="contact_hero-contacts-item">
                  <div className="text-color-light-grey">
                    <p className="text-size-small-14-rm">{contact.callLabel}</p>
                  </div>
                  <a href="tel:+923000000000" className="contact_hero-link">
                    +92 300 000 0000
                  </a>
                </div>

                <div className="contact_hero-contacts-item">
                  <div className="text-color-light-grey">
                    <p className="text-size-small-14-rm">{contact.emailLabel}</p>
                  </div>
                  <a
                    href="mailto:info@hawkbytes.cloud"
                    className="contact_hero-link"
                  >
                    info@hawkbytes.cloud
                  </a>
                </div>

                <div className="contact_hero-quote hide-on-mobile">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ASSETS.quoteIcon}
                    loading="lazy"
                    width={40}
                    alt=""
                    className="contact_testimonials-icon"
                  />
                  <div className="spacer-medium-10" />
                  <div className="text-color-light-grey">
                    <p className="text-size-small-14">{contact.quote.text}</p>
                  </div>
                  <div className="spacer-medium-20" />
                  <div className="contact_quote-author-wr">
                    <div className="home_quote-author-img-wr">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={ASSETS.author}
                        loading="lazy"
                        width={40}
                        alt=""
                        className="home_quote-author-img"
                      />
                    </div>
                    <div className="home_quote-author-info">
                      <div className="text-weight-medium">
                        <p className="text-size-small-14">{contact.quote.name}</p>
                      </div>
                      <div className="hide-on-mobile">
                        <p className="text-color-light-grey">—</p>
                      </div>
                      <div className="text-font-rm text-color-light-grey">
                        <p className="text-size-small-14">{contact.quote.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_hero-form">
                <div className="contact_form-stroke">
                  <div className="contact_form-wr">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.formBg}
                      loading="eager"
                      alt=""
                      className="contact_form-bg"
                    />

                    <div id="ContactUsForm" className="form_component">
                      <form className="form" onSubmit={onSubmit} noValidate>
                        <div className="form-inputs-wr">
                          <div className="form-input-2col">
                            <div className="form-field-wr">
                              <p className="form-label">{form.firstName}</p>
                              <input
                                className="form_input"
                                name="First-Name"
                                placeholder={form.placeholders.firstName}
                                type="text"
                                required
                              />
                            </div>
                            <div className="form-field-wr">
                              <p className="form-label">{form.lastName}</p>
                              <input
                                className="form_input"
                                name="Last-Name"
                                placeholder={form.placeholders.lastName}
                                type="text"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-input-2col">
                            <div className="form-field-wr">
                              <p className="form-label">{form.email}</p>
                              <input
                                className="form_input"
                                name="Email"
                                placeholder={form.placeholders.email}
                                type="email"
                                required
                              />
                            </div>
                            <div className="form-field-wr">
                              <p className="form-label">{form.phone}</p>
                              <input
                                className="form_input"
                                name="Phone-number"
                                placeholder={form.placeholders.phone}
                                type="tel"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-field-wr">
                            <p className="form-label">{form.company}</p>
                            <input
                              className="form_input"
                              name="Company"
                              placeholder={form.placeholders.company}
                              type="text"
                              required
                            />
                          </div>

                          <div className="form-field-wr">
                            <p className="form-label">{form.message}</p>
                            <textarea
                              className="form_input is-text-area"
                              name="Message"
                              placeholder={form.placeholders.message}
                              rows={4}
                            />
                          </div>

                          <div className="form-field-wr" ref={dropdownRef}>
                            <label className="form-label" htmlFor="HowYouHearAboutUs">
                              {form.hearAbout}
                            </label>
                            <div
                              className={`dropdown_component${dropdownOpen ? " is-open" : ""}`}
                            >
                              <button
                                type="button"
                                id="HowYouHearAboutUs"
                                className="dropdown_toggle"
                                aria-expanded={dropdownOpen}
                                onClick={() => setDropdownOpen((v) => !v)}
                              >
                                <div>{hearAbout || form.placeholders.hearSelect}</div>
                                <div className="dropdown-chevron">
                                  <ChevronIcon />
                                </div>
                              </button>
                              <div
                                className={`dropdown_dropdown-list is-right${
                                  dropdownOpen ? " is-open" : ""
                                }`}
                                role="listbox"
                              >
                                {form.hearOptions.map((opt) => (
                                  <button
                                    key={opt}
                                    type="button"
                                    className="dropdown_dropdown-link"
                                    role="option"
                                    aria-selected={hearAbout === opt}
                                    onClick={() => {
                                      setHearAbout(opt);
                                      setDropdownOpen(false);
                                    }}
                                  >
                                    {opt}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <input type="hidden" name="HowYouHearAboutUs" value={hearAbout} />
                          </div>

                          <div className="recaptcha-wr">
                            <button
                              type="button"
                              className={`contact-recaptcha${
                                captchaChecked ? " is-checked" : ""
                              }`}
                              onClick={() => setCaptchaChecked((v) => !v)}
                              aria-pressed={captchaChecked}
                            >
                              <span className="contact-recaptcha-box" aria-hidden="true">
                                {captchaChecked ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img src={ASSETS.check} alt="" width={14} height={14} />
                                ) : null}
                              </span>
                              <span className="contact-recaptcha-label">
                                {form.recaptcha}
                              </span>
                              <span className="contact-recaptcha-brand" aria-hidden="true">
                                <span className="contact-recaptcha-logo">reCAPTCHA</span>
                                <span className="contact-recaptcha-links">
                                  Privacy - Terms
                                </span>
                              </span>
                            </button>
                          </div>

                          <div className="form-check-btn-wr">
                            <label className="form_checkbox">
                              <span
                                className={`form_checkbox-icon${
                                  agreed ? " is-checked" : ""
                                }`}
                                aria-hidden="true"
                              />
                              <input
                                type="checkbox"
                                name="Checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                required
                              />
                              <span className="form_checkbox-label">
                                {form.consentBefore}
                                <a
                                  href="/privacy-policy"
                                  className="span-link-orange"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {form.privacyLink}
                                </a>
                                {form.consentAfter}
                              </span>
                            </label>

                            <button
                              type="submit"
                              className="button is-form-submit"
                              disabled={submitting}
                            >
                              {submitting ? form.submitting : form.submit}
                            </button>
                          </div>
                        </div>
                      </form>

                      {error ? (
                        <div className="form_message-error" role="alert">
                          <div>{form.error}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="contact-back-bg" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.back1}
                      loading="eager"
                      width={676}
                      alt=""
                      className="contact-back-bg-img1"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.back2}
                      loading="eager"
                      width={676}
                      alt=""
                      className="contact-back-bg-img2"
                    />
                  </div>
                </div>

                <div className="cta-logo-wr" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ASSETS.ctaLogo}
                    loading="eager"
                    width={89}
                    alt=""
                    className="cta-logo-img"
                  />
                </div>
              </div>

              <div className="hide-on-desktop">
                <div className="contact_mob-quote-wr">
                  <div className="contact_hero-quote is-mobile-bottom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.quoteIcon}
                      loading="lazy"
                      width={40}
                      alt=""
                      className="contact_testimonials-icon"
                    />
                    <div className="spacer-medium-10" />
                    <div className="text-color-light-grey">
                      <p className="text-size-small-14">{contact.quote.text}</p>
                    </div>
                    <div className="spacer-medium-20" />
                    <div className="contact_quote-author-wr">
                      <div className="home_quote-author-img-wr">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={ASSETS.author}
                          loading="lazy"
                          width={40}
                          alt=""
                          className="home_quote-author-img"
                        />
                      </div>
                      <div className="home_quote-author-info">
                        <div className="text-weight-medium">
                          <p className="text-size-small-14">{contact.quote.name}</p>
                        </div>
                        <div className="text-color-light-grey">
                          <p className="text-size-small-14">—</p>
                        </div>
                        <div className="text-font-rm text-color-light-grey">
                          <p className="text-size-small-14">{contact.quote.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-bg" aria-hidden="true">
          <div className="home_hero-media-wr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.bgFrameMob}
              loading="eager"
              alt=""
              className="home_hero-bg-img-mob"
            />
            <div className="hide-on-mobile">
              <div className="container is-for-bg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ASSETS.bgFrame}
                  loading="lazy"
                  alt=""
                  className="home_hero-bg-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {successOpen ? (
        <div className="contact_success-popup is-open" role="dialog" aria-modal="true">
          <div className="contact_popup-wr">
            <div className="contact_popup-stroke">
              <div className="contact_popup-inner-wr">
                <p className="text-size-large-21">{contact.success.title}</p>
                <div className="text-color-light-grey">
                  <p className="text-size-small-14-rm">{contact.success.body}</p>
                </div>
                <button
                  type="button"
                  className="button"
                  onClick={() => setSuccessOpen(false)}
                >
                  <div className="button-text-wr">
                    <div>{contact.success.close}</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="cta-logo-wr" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.ctaLogo}
                loading="eager"
                width={89}
                alt=""
                className="cta-logo-img"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
