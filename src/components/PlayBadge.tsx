import { getDict } from "@/lib/dict";
import { site, type Lang } from "@/lib/site";

/** The four-colour Play triangle, drawn as vector shapes so it stays sharp at any size. */
function PlayMark() {
  return (
    <svg viewBox="0 0 230 248" width="26" height="28" aria-hidden="true" className="store-mark">
      <polygon points="0,0 0,248 132,123" fill="#32c5ff" />
      <polygon points="0,0 170,91 132,123" fill="#4dff4a" />
      <polygon points="0,248 170,157 132,123" fill="#ff3a44" />
      <polygon points="170,91 230,123 170,157 132,123" fill="#ffd400" />
    </svg>
  );
}

/**
 * Store button in the TikGuest identity: dark glass, a cyan/red edge taken from the logo's glitch effect.
 * Live when NEXT_PUBLIC_PLAY_URL is set, otherwise a quiet "coming soon" state.
 */
export default function PlayBadge({ lang, big }: { lang: Lang; big?: boolean }) {
  const h = getDict(lang).home;
  const cls = `store-btn${big ? " store-lg" : ""}`;
  const body = (
    <>
      <PlayMark />
      <span className="store-text">
        <span className="store-kicker">{site.playUrl ? h.playKicker : h.soonKicker}</span>
        <span className="store-name" dir="ltr">Google Play</span>
      </span>
    </>
  );
  if (site.playUrl) {
    return (
      <a href={site.playUrl} className={cls} rel="noopener" aria-label={`${h.ctaPlay}`}>
        {body}
      </a>
    );
  }
  return (
    <span className={`${cls} store-soon`} role="note" aria-label={h.ctaSoon}>
      {body}
    </span>
  );
}
