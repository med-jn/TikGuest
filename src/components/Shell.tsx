import Image from "next/image";
import Link from "next/link";
import { getDict } from "@/lib/dict";
import { LANGS, pagePath, site, type Lang, type PageKey } from "@/lib/site";

type Props = { lang: Lang; page?: PageKey; children: React.ReactNode };

export default function Shell({ lang, page, children }: Props) {
  const d = getDict(lang);
  const year = new Date().getFullYear();
  const nav: { key: PageKey | ""; label: string }[] = [
    { key: "", label: d.nav.home },
    { key: "regles", label: d.nav.rules },
    { key: "conditions", label: d.nav.terms },
    { key: "privacy", label: d.nav.privacy },
  ];
  return (
    <>
      <a href="#main" className="skip">
        {d.common.skip}
      </a>
      <header className="header">
        <div className="wrap header-in">
          <Link href={pagePath(lang)} className="brand" aria-label={`${site.name} — ${d.nav.home}`}>
            <Image src="/logo-mark.png" alt="" width={20} height={28} priority className="brand-mark" />
            <span>Tik<b>Guest</b></span>
          </Link>

          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.key || "home"}
                href={pagePath(lang, n.key)}
                aria-current={(page ?? "") === n.key ? "page" : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="header-end">
            <details className="lang">
              <summary aria-label={d.common.languages}>
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
                </svg>
                {d.langName}
              </summary>
              <ul>
                {LANGS.map((l) => (
                  <li key={l}>
                    <Link href={pagePath(l, page)} hrefLang={l} lang={l} aria-current={l === lang ? "true" : undefined}>
                      {getDict(l).langName}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <details className="burger">
              <summary aria-label={d.nav.menu}>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </summary>
              <div className="burger-menu">
                {nav.map((n) => (
                  <Link key={n.key || "home"} href={pagePath(lang, n.key)}>
                    {n.label}
                  </Link>
                ))}
                <Link href={pagePath(lang, "delete-account")}>{d.nav.deleteAccount}</Link>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="brand brand-foot">
                <Image src="/logo-mark.png" alt="" width={18} height={25} className="brand-mark" />
                <span>Tik<b>Guest</b></span>
              </div>
              <p className="muted small">{site.tagline}</p>
            </div>
            <ul className="footer-links">
              <li><Link href={pagePath(lang, "regles")}>{d.nav.rules}</Link></li>
              <li><Link href={pagePath(lang, "conditions")}>{d.nav.terms}</Link></li>
              <li><Link href={pagePath(lang, "privacy")}>{d.nav.privacy}</Link></li>
              <li><Link href={pagePath(lang, "delete-account")}>{d.nav.deleteAccount}</Link></li>
              <li>
                <a href={`mailto:${site.contactEmail}`} dir="ltr">{site.contactEmail}</a>
              </li>
            </ul>
          </div>
          <p className="muted tiny disclaimer">{d.common.notAffiliated}</p>
          <p className="muted tiny">© {year} {site.name}. {d.common.rights}</p>
        </div>
      </footer>
    </>
  );
}
