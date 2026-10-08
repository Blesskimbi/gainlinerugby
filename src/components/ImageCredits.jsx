import credits from "../data/image-credits.json";

/**
 * Attribution for the placeholder photography.
 *
 * The CC BY images legally REQUIRE this credit while they are on the site.
 * Replacing them with GainLine's own session photos removes the obligation —
 * delete this component and its data file at that point.
 */
const LICENSE_URL = {
  cc0: "https://creativecommons.org/publicdomain/zero/1.0/",
  pdm: "https://creativecommons.org/publicdomain/mark/1.0/",
  by: "https://creativecommons.org/licenses/by/2.0/",
  "by-sa": "https://creativecommons.org/licenses/by-sa/2.0/",
};

export default function ImageCredits() {
  // One entry per source photo — several slots reuse the same image.
  const unique = [...new Map(credits.map((c) => [c.source, c])).values()];
  const needsAttribution = unique.filter((c) => c.license !== "cc0" && c.license !== "pdm");

  if (unique.length === 0) return null;

  return (
    <details className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
      <summary className="cursor-pointer list-none text-white/60 transition-colors hover:text-accent">
        Photography credits ({unique.length}) — placeholder imagery
        <span className="ml-1 text-white/30">▸</span>
      </summary>

      <p className="mt-4 max-w-3xl leading-relaxed">
        All photography on this site is placeholder stock, not GainLine
        sessions.{" "}
        {needsAttribution.length > 0 && (
          <>
            {needsAttribution.length} of these images are Creative Commons
            Attribution licensed and must be credited for as long as they
            appear here.
          </>
        )}{" "}
        Replacing them with GainLine&rsquo;s own photos removes this notice
        entirely.
      </p>

      <ul className="mt-4 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {unique.map((c) => (
          <li key={c.source} className="leading-snug">
            <a
              href={c.source}
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-2 transition-colors hover:text-accent hover:underline"
            >
              {c.title || "Untitled"}
            </a>
            {c.creator && <> &middot; {c.creator}</>}{" "}
            <a
              href={LICENSE_URL[c.license] ?? LICENSE_URL.by}
              target="_blank"
              rel="noreferrer noopener license"
              className="whitespace-nowrap text-white/35 underline-offset-2 hover:text-accent hover:underline"
            >
              ({c.license === "cc0" ? "CC0" : `CC ${c.license.toUpperCase()} ${c.version}`})
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
