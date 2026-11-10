import Image from "next/image";
import Link from "next/link";
import { getDict } from "@/lib/dict";
import { pagePath, site, siteUrl, type Lang } from "@/lib/site";
import Rich from "./Rich";
import Shell from "./Shell";

const ICONS = [
  "M2 12h2M6 8v8M10 4v16M14 8v8M18 6v12M22 12h-2", // voice
  "M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-5.5A8 8 0 1 1 21 12z", // conversation
  "M4 19.5V5a2 2 0 0 1 2-2h14v14H6a2 2 0 0 0-2 2.5zM8 7h8M8 11h6", // knowledge
  "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4", // rules
  "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6", // memory
  "M5 21V4M5 4h11l-2 4 2 4H5", // report
];

function PlayButton({ lang, big }: { lang: Lang; big?: boolean }) {
  const d = getDict(lang);
  const cls = `btn btn-primary${big ? " btn-lg" : ""}`;
  const icon = (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className="fill">
      <path d="M6 3.5v17a1 1 0 0 0 1.5.86l14-8.5a1 1 0 0 0 0-1.72l-14-8.5A1 1 0 0 0 6 3.5z" />
    </svg>
  );
  if (site.playUrl) {
    return (
      <a href={site.playUrl} className={cls} rel="noopener">
        {icon}
        {d.home.ctaPlay}
      </a>
    );
  }
  return (
    <span className={`${cls} btn-soon`} role="note">
      {icon}
      {d.home.ctaSoon}
    </span>
  );
}

export default function Home({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const h = d.home;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: site.name,
    operatingSystem: "ANDROID 10+",
    applicationCategory: "EntertainmentApplication",
    description: h.metaDesc,
    inLanguage: lang,
    url: siteUrl() + pagePath(lang),
    image: siteUrl() + "/icon-512.png",
    ...(site.playUrl ? { installUrl: site.playUrl } : {}),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <Shell lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-copy">
            <p className="pill">{h.badge}</p>
            <h1>
              {h.title} <span className="glitch" data-text={h.titleAccent}>{h.titleAccent}</span>
            </h1>
            <p className="lead">{h.sub}</p>
            <div className="cta-row">
              <PlayButton lang={lang} big />
              <a href="#how" className="btn btn-ghost btn-lg">{h.ctaHow}</a>
            </div>
            <p className="tagline" dir="ltr">{site.tagline}</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="glow" />
            <Image src="/logo-mark.png" alt={h.micAlt} width={198} height={280} priority className="hero-mic" />
            <div className="bars">
              {Array.from({ length: 21 }).map((_, i) => (
                <i key={i} style={{ ["--i" as string]: i }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section">
        <div className="wrap">
          <h2 className="h2">{h.stepsTitle}</h2>
          <ol className="steps">
            {h.steps.map((s, i) => (
              <li key={i} className="card step">
                <span className="num" aria-hidden="true">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section alt">
        <div className="wrap">
          <h2 className="h2">{h.featuresTitle}</h2>
          <ul className="features">
            {h.features.map((f, i) => (
              <li key={i} className="card feature">
                <span className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path d={ICONS[i]} />
                  </svg>
                </span>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRUST */}
      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="h2">{h.trustTitle}</h2>
            <p className="muted">{h.trustIntro}</p>
            <ul className="ticks">
              {h.trust.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <p className="note">
              <Rich text={h.trustNote} lang={lang} d={d} />
            </p>
          </div>
          <div>
            <h2 className="h2">{h.permTitle}</h2>
            <p className="muted">{h.permIntro}</p>
            <dl className="perms">
              {h.perms.map((p, i) => (
                <div key={i}>
                  <dt>{p.t}</dt>
                  <dd>{p.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section alt">
        <div className="wrap narrow">
          <h2 className="h2">{h.faqTitle}</h2>
          <div className="faq">
            {h.faq.map((f, i) => (
              <details key={i}>
                <summary>{f.q}</summary>
                <p>
                  <Rich text={f.a} lang={lang} d={d} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + LEGAL */}
      <section className="section">
        <div className="wrap">
          <div className="final card">
            <h2>{h.finalTitle}</h2>
            <p className="muted">{h.finalSub}</p>
            <PlayButton lang={lang} big />
          </div>

          <h2 className="h2 legal-h">{h.legalTitle}</h2>
          <ul className="legal-cards">
            {h.legalLinks.map((l) => (
              <li key={l.key}>
                <Link href={pagePath(lang, l.key)} className="card legal-card">
                  <strong>{navLabel(d, l.key)}</strong>
                  <span className="muted small">{l.d}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}

function navLabel(d: ReturnType<typeof getDict>, k: string) {
  switch (k) {
    case "regles": return d.nav.rules;
    case "conditions": return d.nav.terms;
    case "privacy": return d.nav.privacy;
    default: return d.nav.deleteAccount;
  }
}
