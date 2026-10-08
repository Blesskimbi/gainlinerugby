import { socials } from "../data/site";
import { Social } from "./Icons";

/**
 * Renders the social row.
 *
 * Platforms whose `href` is still `null` in site.js render dimmed and
 * non-clickable rather than linking to `#` or to a guessed handle — a wrong
 * profile link is worse than a visibly unfinished one. Paste the real URL
 * into `socials` and the icon lights up and becomes a link.
 */
export default function SocialLinks({
  size = "md",
  variant = "plain",
  className = "",
}) {
  const box = size === "lg" ? "size-10" : "size-8";
  const glyph = size === "lg" ? "size-5" : "size-4";

  const skin = {
    plain: "text-white hover:text-accent",
    tile: "bg-white/10 text-white hover:bg-accent hover:text-ink corner-kick",
  }[variant];

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {socials.map((social) => {
        const live = Boolean(social.href);
        const shared = `flex ${box} items-center justify-center transition-colors`;

        return (
          <li key={social.label}>
            {live ? (
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className={`${shared} ${skin}`}
              >
                <Social name={social.icon} className={glyph} />
              </a>
            ) : (
              <span
                aria-hidden
                title={`${social.label} link not added yet`}
                className={`${shared} cursor-default text-white/20 ${
                  variant === "tile" ? "bg-white/5 corner-kick" : ""
                }`}
              >
                <Social name={social.icon} className={glyph} />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
