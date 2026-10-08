import { whyGainLine } from "../data/site";
import { PILLAR_ICONS } from "./Icons";
import { Container, Reveal, SectionHeading, Stat } from "./ui";

/**
 * The dark band is an inner element rather than the section itself, so the
 * three lime pillars can hang below it and straddle the boundary. The section
 * carries the same paper tone as the next one, which keeps that seam invisible.
 */
export default function WhyGainLine() {
  return (
    <section id="why" className="relative bg-paper">
      <div className="relative overflow-hidden bg-ink pt-20 pb-36 lg:pt-28 lg:pb-44">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${whyGainLine.background})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-ink/70 hatch" aria-hidden />

        <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={whyGainLine.image}
              alt=""
              className="h-80 w-full object-cover corner-kick lg:h-[30rem]"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={150}>
            <SectionHeading
              eyebrow={whyGainLine.eyebrow}
              title={whyGainLine.title}
              align="left"
              tone="light"
              className="mb-6"
            />
            <p className="mb-10 text-base leading-relaxed text-white/70">
              {whyGainLine.body}
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
              {whyGainLine.stats.map((stat) => (
                <Stat key={stat.label} {...stat} tone="light" />
              ))}
            </div>
          </Reveal>
        </Container>
      </div>

      {/* Pulled up so the cards sit half on the dark band, half on the paper */}
      <Container className="relative z-10 -mt-24 lg:-mt-28">
        <div className="grid gap-6 md:grid-cols-3">
          {whyGainLine.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[pillar.icon];
            return (
            <Reveal key={pillar.title} delay={i * 120}>
              <article className="group h-full bg-linear-to-b from-accent-deep to-accent p-8 text-center shadow-xl transition-colors duration-500 corner-kick lift hover:from-accent hover:to-accent-deep">
                <Icon className="mx-auto mb-5 size-14 text-ink transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mb-3 font-display text-lg font-bold text-ink">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/75">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
