import type { Locale } from "../locales";
import type { Dictionary } from "../types";
import en from "./en";
import tr from "./tr";
import el from "./el";
import ru from "./ru";
import fr from "./fr";
import es from "./es";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  tr,
  el,
  ru,
  fr,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export { dictionaries };
