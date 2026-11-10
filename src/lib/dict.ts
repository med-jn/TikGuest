import ar from "@/content/ar";
import fr from "@/content/fr";
import en from "@/content/en";
import type { Dict } from "@/content/types";
import type { Lang } from "./site";
import { site } from "./site";

const dicts: Record<Lang, Dict> = { ar, fr, en };

export const getDict = (lang: Lang): Dict => dicts[lang];

export function formatDate(lang: Lang, iso: string): string {
  const locale = lang === "ar" ? "ar-u-nu-latn" : lang;
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));
}

/** Text with {dev} / {pkg} placeholders resolved (used in metadata & plain strings). */
export const plain = (s: string) =>
  s.replaceAll("{dev}", site.developerName).replaceAll("{pkg}", site.packageId).replaceAll("{email}", site.contactEmail);
