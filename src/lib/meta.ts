import type { Metadata } from "next";
import { getDict, plain } from "./dict";
import { LANGS, pagePath, type Lang, type PageKey } from "./site";

export function buildMetadata(lang: Lang, page: PageKey | undefined, title: string, description: string): Metadata {
  const d = getDict(lang);
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l] = pagePath(l, page);
  languages["x-default"] = pagePath("ar", page);
  const ogLocale = { ar: "ar_AR", fr: "fr_FR", en: "en_US" }[lang];
  return {
    title: plain(title),
    description: plain(description),
    alternates: { canonical: pagePath(lang, page), languages },
    openGraph: {
      type: "website",
      siteName: "TikGuest",
      title: plain(title),
      description: plain(description),
      url: pagePath(lang, page),
      locale: ogLocale,
      images: [{ url: "/og.png", width: 1024, height: 500, alt: "TikGuest" }],
    },
    twitter: { card: "summary_large_image", title: plain(title), description: plain(description), images: ["/og.png"] },
    robots: { index: true, follow: true },
    other: { "content-language": d.locale },
  };
}
