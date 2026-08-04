"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import {
  hasContactErrors,
  type ContactFieldErrors,
  validateContactForm,
} from "@/lib/contact-validation";
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
};

const EMPTY_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
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

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="form-field-error" role="alert">
      {message}
    </p>
  );
}

export default function ContactPage() {
  const t = useTranslations();
  const contact = t.contact;
  const form = contact.form;
  const [values, setValues] = useState(EMPTY_VALUES);
  const [hearAbout, setHearAbout] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [error, setError] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const loadCaptcha = useCallback(async () => {
    try {
      const res = await fetch("/api/captcha", { cache: "no-store" });
      if (!res.ok) return;
      const data = (await res.json()) as { question?: string; token?: string };
      setCaptchaQuestion(data.question ?? "");
      setCaptchaToken(data.token ?? "");
      setCaptchaAnswer("");
    } catch {
      setCaptchaQuestion("");
      setCaptchaToken("");
    }
  }, []);

  useEffect(() => {
    void loadCaptcha();
  }, [loadCaptcha]);

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

  const updateField = (name: keyof typeof EMPTY_VALUES, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setError(false);
  };

  const resetForm = () => {
    setValues(EMPTY_VALUES);
    setHearAbout("");
    setAgreed(false);
    setCaptchaAnswer("");
    setFieldErrors({});
    void loadCaptcha();
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const errors = validateContactForm(
      {
        ...values,
        hearAbout,
        captchaToken,
        captchaAnswer,
        agreed,
      },
      form.validation,
    );

    setFieldErrors(errors);
    if (hasContactErrors(errors)) {
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          company: values.company,
          message: values.message,
          hearAbout,
          captchaToken,
          captchaAnswer,
          agreed,
        }),
      });

      if (!res.ok) {
        setError(true);
        void loadCaptcha();
        return;
      }

      setSuccessOpen(true);
      resetForm();
    } catch {
      setError(true);
      void loadCaptcha();
    } finally {
      setSubmitting(false);
    }
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
                              <label className="form-label" htmlFor="First-Name">
                                {form.firstName}
                              </label>
                              <input
                                id="First-Name"
                                className={`form_input${fieldErrors.firstName ? " is-invalid" : ""}`}
                                name="First-Name"
                                placeholder={form.placeholders.firstName}
                                type="text"
                                autoComplete="given-name"
                                value={values.firstName}
                                onChange={(e) =>
                                  updateField("firstName", e.target.value)
                                }
                                aria-invalid={Boolean(fieldErrors.firstName)}
                                required
                              />
                              <FieldError message={fieldErrors.firstName} />
                            </div>
                            <div className="form-field-wr">
                              <label className="form-label" htmlFor="Last-Name">
                                {form.lastName}
                              </label>
                              <input
                                id="Last-Name"
                                className={`form_input${fieldErrors.lastName ? " is-invalid" : ""}`}
                                name="Last-Name"
                                placeholder={form.placeholders.lastName}
                                type="text"
                                autoComplete="family-name"
                                value={values.lastName}
                                onChange={(e) =>
                                  updateField("lastName", e.target.value)
                                }
                                aria-invalid={Boolean(fieldErrors.lastName)}
                                required
                              />
                              <FieldError message={fieldErrors.lastName} />
                            </div>
                          </div>

                          <div className="form-input-2col">
                            <div className="form-field-wr">
                              <label className="form-label" htmlFor="Email">
                                {form.email}
                              </label>
                              <input
                                id="Email"
                                className={`form_input${fieldErrors.email ? " is-invalid" : ""}`}
                                name="Email"
                                placeholder={form.placeholders.email}
                                type="email"
                                autoComplete="email"
                                value={values.email}
                                onChange={(e) =>
                                  updateField("email", e.target.value)
                                }
                                aria-invalid={Boolean(fieldErrors.email)}
                                required
                              />
                              <FieldError message={fieldErrors.email} />
                            </div>
                            <div className="form-field-wr">
                              <label className="form-label" htmlFor="Phone-number">
                                {form.phone}
                              </label>
                              <input
                                id="Phone-number"
                                className={`form_input${fieldErrors.phone ? " is-invalid" : ""}`}
                                name="Phone-number"
                                placeholder={form.placeholders.phone}
                                type="tel"
                                autoComplete="tel"
                                value={values.phone}
                                onChange={(e) =>
                                  updateField("phone", e.target.value)
                                }
                                aria-invalid={Boolean(fieldErrors.phone)}
                                required
                              />
                              <FieldError message={fieldErrors.phone} />
                            </div>
                          </div>

                          <div className="form-field-wr">
                            <label className="form-label" htmlFor="Company">
                              {form.company}
                            </label>
                            <input
                              id="Company"
                              className={`form_input${fieldErrors.company ? " is-invalid" : ""}`}
                              name="Company"
                              placeholder={form.placeholders.company}
                              type="text"
                              autoComplete="organization"
                              value={values.company}
                              onChange={(e) =>
                                updateField("company", e.target.value)
                              }
                              aria-invalid={Boolean(fieldErrors.company)}
                              required
                            />
                            <FieldError message={fieldErrors.company} />
                          </div>

                          <div className="form-field-wr">
                            <label className="form-label" htmlFor="Message">
                              {form.message}
                            </label>
                            <textarea
                              id="Message"
                              className={`form_input is-text-area${fieldErrors.message ? " is-invalid" : ""}`}
                              name="Message"
                              placeholder={form.placeholders.message}
                              rows={4}
                              maxLength={2000}
                              value={values.message}
                              onChange={(e) =>
                                updateField("message", e.target.value)
                              }
                              aria-invalid={Boolean(fieldErrors.message)}
                            />
                            <FieldError message={fieldErrors.message} />
                          </div>

                          <div className="form-field-wr" ref={dropdownRef}>
                            <label className="form-label" htmlFor="HowYouHearAboutUs">
                              {form.hearAbout}
                            </label>
                            <div
                              className={`dropdown_component${dropdownOpen ? " is-open" : ""}${
                                fieldErrors.hearAbout ? " is-invalid" : ""
                              }`}
                            >
                              <button
                                type="button"
                                id="HowYouHearAboutUs"
                                className={`dropdown_toggle${fieldErrors.hearAbout ? " is-invalid" : ""}`}
                                aria-expanded={dropdownOpen}
                                aria-invalid={Boolean(fieldErrors.hearAbout)}
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
                                      setFieldErrors((prev) => {
                                        if (!prev.hearAbout) return prev;
                                        const next = { ...prev };
                                        delete next.hearAbout;
                                        return next;
                                      });
                                      setError(false);
                                    }}
                                  >
                                    {opt}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <input type="hidden" name="HowYouHearAboutUs" value={hearAbout} />
                            <FieldError message={fieldErrors.hearAbout} />
                          </div>

                          <div className="form-field-wr captcha-field-wr">
                            <label className="form-label" htmlFor="Captcha-Answer">
                              {form.captchaLabel}
                            </label>
                            <div className="captcha-row">
                              <div className="captcha-question" aria-hidden="true">
                                {captchaQuestion || "…"}
                              </div>
                              <input
                                id="Captcha-Answer"
                                className={`form_input captcha-input${fieldErrors.captcha ? " is-invalid" : ""}`}
                                name="Captcha-Answer"
                                placeholder={form.captchaPlaceholder}
                                type="text"
                                inputMode="numeric"
                                autoComplete="off"
                                value={captchaAnswer}
                                onChange={(e) => {
                                  setCaptchaAnswer(e.target.value);
                                  setFieldErrors((prev) => {
                                    if (!prev.captcha) return prev;
                                    const next = { ...prev };
                                    delete next.captcha;
                                    return next;
                                  });
                                  setError(false);
                                }}
                                aria-invalid={Boolean(fieldErrors.captcha)}
                                required
                              />
                              <button
                                type="button"
                                className="captcha-refresh"
                                onClick={() => void loadCaptcha()}
                              >
                                {form.captchaRefresh}
                              </button>
                            </div>
                            <FieldError message={fieldErrors.captcha} />
                          </div>

                          <div className="form-check-btn-wr">
                            <div className="form-consent-wr">
                              <label
                                className={`form_checkbox${fieldErrors.consent ? " is-invalid" : ""}`}
                              >
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
                                  onChange={(e) => {
                                    setAgreed(e.target.checked);
                                    setFieldErrors((prev) => {
                                      if (!prev.consent) return prev;
                                      const next = { ...prev };
                                      delete next.consent;
                                      return next;
                                    });
                                    setError(false);
                                  }}
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
                              <FieldError message={fieldErrors.consent} />
                            </div>

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
