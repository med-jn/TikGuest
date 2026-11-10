import type { MetadataRoute } from "next";
import { LANGS, PAGES, pagePath, siteUrl, site, type PageKey } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const keys: (PageKey | undefined)[] = [undefined, ...PAGES];
  return keys.flatMap((page) =>
    LANGS.map((lang) => ({
      url: base + pagePath(lang, page),
      lastModified: site.updated,
      changeFrequency: "monthly" as const,
      priority: page ? 0.6 : 1,
      alternates: {
        languages: Object.fromEntries(LANGS.map((l) => [l, base + pagePath(l, page)])),
      },
    }))
  );
}
