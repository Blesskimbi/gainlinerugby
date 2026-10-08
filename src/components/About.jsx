import { about } from "../data/site";
import { Quote } from "./Icons";
import { Button, Container, Counter, Reveal, Section, SectionHeading } from "./ui";

export default function About() {
  const statUnfilled = about.stat.value === null || about.stat.value === undefined;

  return (
    <Section id="about" className="bg-paper">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            align="left"
            className="mb-6"
          />

          <p className="mb-6 text-base leading-relaxed text-muted">
            {about.body}
          </p>

          <figure className="mb-8 border-l-4 border-accent-ink bg-white p-6 corner-kick">
            <Quote className="mb-3 size-7 text-accent-ink/30" />
            <blockquote className="text-base leading-relaxed text-ink italic">
              {about.quote}
            </blockquote>
            <figcaption className="mt-5">
              <p className="font-display text-base font-bold text-ink">
                {about.coach.name}
              </p>
              <p className="text-sm text-accent-ink">{about.coach.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {about.coach.bio}
              </p>
            </figcaption>
          </figure>

          <Button href={about.cta.href} variant="accent">
            {about.cta.label}
          </Button>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={about.coach.portrait}
              alt=""
              className="col-span-2 h-72 w-full object-cover corner-kick sm:h-96"
              loading="lazy"
            />
            {about.gallery.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-40 w-full object-cover corner-kick sm:h-48"
                loading="lazy"
              />
            ))}
          </div>

          <div className="absolute -top-6 -right-2 flex flex-col items-center bg-ink px-7 py-5 text-center shadow-2xl corner-kick sm:-right-6">
            {statUnfilled ? (
              <p
                className="font-display text-2xl leading-none font-bold text-white/30"
                title="Add a real figure in src/data/site.js"
              >
                TBC
              </p>
            ) : (
              <p className="flex items-start font-sans text-4xl leading-none font-bold text-accent">
                <Counter value={about.stat.value} />
                <span className="text-2xl">+</span>
              </p>
            )}
            <p className="eyebrow mt-1 text-[0.65rem] text-white/80">
              {about.stat.label}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
