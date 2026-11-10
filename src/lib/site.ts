// Central place for everything you may want to change. Values come from environment variables
// (Vercel -> Settings -> Environment Variables) so you never need to edit code to publish.

export const LANGS = ["ar", "fr", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "ar";

export const PAGES = ["regles", "conditions", "privacy", "delete-account"] as const;
export type PageKey = (typeof PAGES)[number];

const clean = (v?: string) => (v ?? "").trim();

export const site = {
  name: "TikGuest",
  packageId: "com.tikguest",
  tagline: "Your voice. Any live.",
  contactEmail: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL) || "contact@example.com",
  developerName: clean(process.env.NEXT_PUBLIC_DEVELOPER_NAME) || "TikGuest",
  playUrl: clean(process.env.NEXT_PUBLIC_PLAY_URL),
  // Date of the last substantive change to the legal texts (ISO). Update it when you edit them.
  updated: "2026-11-10",
};

export function siteUrl(): string {
  const explicit = clean(process.env.NEXT_PUBLIC_SITE_URL);
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = clean(process.env.VERCEL_PROJECT_PRODUCTION_URL) || clean(process.env.VERCEL_URL);
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

/** Public path of a page in a language. Arabic (default) has no prefix. */
export function pagePath(lang: Lang, page?: PageKey | ""): string {
  const tail = page ? `/${page}` : "";
  if (lang === DEFAULT_LANG) return tail || "/";
  return `/${lang}${tail}`;
}

export function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}
