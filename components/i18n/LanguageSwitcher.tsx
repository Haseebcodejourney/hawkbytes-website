"use client";

import { useEffect, useId, useRef, useState } from "react";
import { LOCALES, LOCALE_META, type Locale } from "@/lib/i18n/locales";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import "./LanguageSwitcher.css";

function ChevronDown() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = LOCALE_META[locale];

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selectLocale = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div className={`lang-switcher${open ? " is-open" : ""}`} ref={rootRef}>
      <span className="lang-switcher-label">{t.language.label}</span>
      <button
        type="button"
        className="lang-switcher-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={t.language.changeLanguage}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="lang-switcher-current">
          <span className="lang-switcher-short">{current.short}</span>
          <span className="lang-switcher-native">{current.nativeLabel}</span>
        </span>
        <span className="lang-switcher-chevron" aria-hidden="true">
          <ChevronDown />
        </span>
      </button>

      <ul
        id={listId}
        className="lang-switcher-menu"
        role="listbox"
        aria-label={t.language.changeLanguage}
        hidden={!open}
      >
        {LOCALES.map((code) => {
          const meta = LOCALE_META[code];
          const selected = code === locale;
          return (
            <li key={code} role="option" aria-selected={selected}>
              <button
                type="button"
                className={`lang-switcher-option${selected ? " is-selected" : ""}`}
                onClick={() => selectLocale(code)}
              >
                <span className="lang-switcher-short">{meta.short}</span>
                <span className="lang-switcher-native">{meta.nativeLabel}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
