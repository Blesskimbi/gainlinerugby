import { partners } from "../data/site";
import { Ball } from "./Icons";
import { Container, Reveal, Section, SectionHeading } from "./ui";

/**
 * Rendered as typeset names rather than logo images on purpose: a club crest
 * is their trademark, so none goes on this page until GainLine has written
 * permission. Swap a name for an <img> once permission is in hand.
 */
export default function Partners() {
  if (partners.items.length === 0) return null;

  // Doubled so the marquee can loop seamlessly.
  const track = [...partners.items, ...partners.items];

  return (
    <Section id="partners" className="bg-paper py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={partners.eyebrow}
          title={partners.title}
          className="mb-12"
        />

        <Reveal>
          <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <ul className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
              {track.map((item, i) => (
                <li
                  key={i}
                  aria-hidden={i >= partners.items.length}
                  className="flex shrink-0 items-center gap-3"
                >
                  <Ball className="size-6 shrink-0 text-accent-ink/40" />
                  <span className="whitespace-nowrap">
                    <span className="block font-display text-lg font-bold text-ink/70">
                      {item.name}
                    </span>
                    <span className="block text-[0.65rem] font-bold tracking-widest text-muted uppercase">
                      {item.kind}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
