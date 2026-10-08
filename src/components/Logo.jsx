import { brand } from "../data/site";

/**
 * GainLine identity.
 *
 *   wordmark — type only. Used in the navbar and mobile drawer.
 *   full     — the real stacked logo artwork. Used once, in the footer.
 *
 * The artwork is white + lime with the black keyed out, so it only reads on
 * dark surfaces. `onDark` flips the wordmark's colours for light backgrounds.
 */
export default function Logo({ variant = "wordmark", onDark = true, className = "" }) {
  if (variant === "full") {
    return (
      <img
        src="/images/gainline-logo.webp"
        alt={`${brand.name} ${brand.suffix}`}
        width={909}
        height={572}
        className={`h-auto w-auto ${className}`}
      />
    );
  }

  return (
    <span
      className={`flex items-baseline gap-1.5 leading-none ${className}`}
      aria-label={`${brand.name} ${brand.suffix}`}
    >
      <span
        className={`font-display text-xl font-bold tracking-tight uppercase italic sm:text-2xl ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {brand.name}
      </span>
      <span
        className={`font-display text-xl font-bold tracking-tight uppercase italic sm:text-2xl ${
          onDark ? "text-accent" : "text-accent-ink"
        }`}
      >
        {brand.suffix}
      </span>
    </span>
  );
}
