import Link from "next/link";
import type { Dict } from "@/content/types";
import { pagePath, site, type Lang, type PageKey } from "@/lib/site";

const TOKEN = /(\*\*[^*]+\*\*|\[\[[a-z-]+\]\]|\{email\})/g;

/**
 * Tiny inline formatter for the content files:
 *  **bold**, [[page-key]] (localized internal link), {email} (mailto link), {dev}, {pkg}.
 */
export default function Rich({ text, lang, d }: { text: string; lang: Lang; d: Dict }) {
  const labels: Record<PageKey, string> = {
    regles: d.nav.rules,
    conditions: d.nav.terms,
    privacy: d.nav.privacy,
    "delete-account": d.nav.deleteAccount,
  };
  const resolved = text.replaceAll("{dev}", site.developerName).replaceAll("{pkg}", site.packageId);
  const parts = resolved.split(TOKEN).filter((p) => p !== "");
  return (
    <>
      {parts.map((part, i) => {
        if (part === "{email}") {
          return (
            <a key={i} href={`mailto:${site.contactEmail}`} dir="ltr" className="inline-link">
              {site.contactEmail}
            </a>
          );
        }
        if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("[[")) {
          const key = part.slice(2, -2) as PageKey;
          if (key in labels) {
            return (
              <Link key={i} href={pagePath(lang, key)} className="inline-link">
                {labels[key]}
              </Link>
            );
          }
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
