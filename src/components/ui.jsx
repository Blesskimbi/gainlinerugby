import { useEffect, useRef, useState } from "react";
import { ArrowRight, Ball } from "./Icons";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fires once when the element first scrolls into view. Used for the
 * count-up stats and the section reveals. Reports true straight away when
 * the visitor has asked for reduced motion, or where IntersectionObserver
 * is unavailable — content must never be left stuck invisible.
 */
export function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return [ref, inView];
}

/** Counts 0 → value over `duration` ms once scrolled into view. */
export function Counter({ value, duration = 2000, className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion()) {
      setShown(value);
      return;
    }

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutQuad, so it settles rather than stopping dead
      setShown(Math.round(value * (1 - (1 - progress) ** 2)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {shown.toLocaleString()}
    </span>
  );
}

/**
 * A stat block: big accent number + suffix, label above. `min-w-0` and the
 * tighter mobile label keep three of these inside a narrow phone viewport.
 *
 * A `null` value renders "TBC" instead of a number — these are claims about a
 * real business, so an unfilled stat must never read as a figure.
 */
export function Stat({ label, value, tone = "dark" }) {
  const unfilled = value === null || value === undefined;

  return (
    <div className="min-w-0 text-center">
      <p
        className={`mb-1 font-display text-[0.6rem] font-bold tracking-[0.1em] uppercase sm:text-sm sm:tracking-[0.2em] ${
          tone === "dark" ? "text-ink/70" : "text-white/80"
        }`}
      >
        {label}
      </p>
      {unfilled ? (
        <p
          className={`font-display text-2xl leading-none font-bold sm:text-3xl ${
            tone === "dark" ? "text-ink/25" : "text-white/30"
          }`}
          title="Add a real figure in src/data/site.js"
        >
          TBC
        </p>
      ) : (
        <p
          className={`flex items-start justify-center font-sans text-4xl leading-none font-bold sm:text-5xl lg:text-6xl ${
            tone === "dark" ? "text-accent-ink" : "text-accent"
          }`}
        >
          <Counter value={value} />
          <span className="text-2xl sm:text-3xl lg:text-4xl">+</span>
        </p>
      )}
    </div>
  );
}

/** Primary pill button — brand lime gradient, always black label. */
export function Button({
  as: Tag = "a",
  children,
  variant = "accent",
  showArrow = true,
  className = "",
  ...rest
}) {
  const variants = {
    accent: "btn-accent shadow-lg shadow-accent/25",
    dark: "bg-ink text-white hover:bg-accent hover:text-ink",
    white: "bg-white text-ink hover:bg-line",
    outline:
      "border border-white/40 text-white hover:border-white hover:bg-white hover:text-ink",
    ghost: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  };

  return (
    <Tag
      className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 corner-kick ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Tag>
  );
}

/**
 * Eyebrow + title block that opens every section, matching the template's
 * ball-icon / label / headline stack.
 */
export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "dark",
  className = "",
  children,
}) {
  const alignment = {
    center: "items-center text-center mx-auto",
    left: "items-start text-left",
  }[align];

  const titleTone = tone === "dark" ? "text-ink" : "text-line";
  // Lime fails contrast on light surfaces, so light sections use the
  // darkened variant. `tone="dark"` means dark text on a light background.
  const eyebrowTone = tone === "dark" ? "text-accent-ink" : "text-accent";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      <Ball className={`mb-4 size-7 ${eyebrowTone}`} />
      <p className={`eyebrow mb-3 ${eyebrowTone}`}>{eyebrow}</p>
      <h2
        className={`text-3xl font-bold sm:text-4xl lg:text-[3rem] ${titleTone}`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

/** Fades + lifts its children in on first scroll into view. */
export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Standard section shell: id anchor + the kit's generous vertical rhythm. */
export function Section({ id, className = "", children, ...rest }) {
  return (
    <section id={id} className={`relative py-20 lg:py-28 ${className}`} {...rest}>
      {children}
    </section>
  );
}

/** Centred max-width wrapper matching the template's 1200px content width. */
export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
