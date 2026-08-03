export const LOCALES = ["en", "tr", "el", "ru", "fr", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_STORAGE_KEY = "hawkbytes-locale";

export const LOCALE_META: Record<
  Locale,
  { label: string; nativeLabel: string; short: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", nativeLabel: "English", short: "EN", dir: "ltr" },
  tr: { label: "Turkish", nativeLabel: "Türkçe", short: "TR", dir: "ltr" },
  el: { label: "Greek", nativeLabel: "Ελληνικά", short: "EL", dir: "ltr" },
  ru: { label: "Russian", nativeLabel: "Русский", short: "RU", dir: "ltr" },
  fr: { label: "French", nativeLabel: "Français", short: "FR", dir: "ltr" },
  es: { label: "Spanish", nativeLabel: "Español", short: "ES", dir: "ltr" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
