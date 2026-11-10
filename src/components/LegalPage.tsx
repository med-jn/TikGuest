import Link from "next/link";
import { formatDate, getDict } from "@/lib/dict";
import { pagePath, site, type Lang, type PageKey } from "@/lib/site";
import Rich from "./Rich";
import Shell from "./Shell";

export default function LegalPage({ lang, page }: { lang: Lang; page: PageKey }) {
  const d = getDict(lang);
  const doc = d.pages[page];
  return (
    <Shell lang={lang} page={page}>
      <div className="wrap legal">
        <header className="legal-head">
          <Link href={pagePath(lang)} className="back">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="flip-rtl">
              <path d="M15 6l-6 6 6 6" />
            </svg>
            {d.common.backHome}
          </Link>
          <h1>{doc.h1}</h1>
          <p className="muted small">
            {d.common.updated}: <time dateTime={site.updated}>{formatDate(lang, site.updated)}</time>
          </p>
          <p className="lead">
            <Rich text={doc.intro} lang={lang} d={d} />
          </p>
        </header>

        <div className="legal-grid">
          <aside className="toc" aria-label={d.common.toc}>
            <p className="toc-title">{d.common.toc}</p>
            <ol>
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title.replace(/^\d+\.\s*/, "")}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="prose">
            {doc.sections.map((s) => (
              <section key={s.id} id={s.id}>
                <h2>{s.title}</h2>
                {s.p?.map((t, i) => (
                  <p key={i}>
                    <Rich text={t} lang={lang} d={d} />
                  </p>
                ))}
                {s.ul && (
                  <ul>
                    {s.ul.map((t, i) => (
                      <li key={i}>
                        <Rich text={t} lang={lang} d={d} />
                      </li>
                    ))}
                  </ul>
                )}
                {s.after?.map((t, i) => (
                  <p key={`a${i}`}>
                    <Rich text={t} lang={lang} d={d} />
                  </p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </Shell>
  );
}
