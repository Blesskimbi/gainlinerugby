import { camps } from "../data/site";
import { Pin } from "./Icons";
import { Button, Container, Reveal, Section, SectionHeading } from "./ui";

export default function UpcomingCamps() {
  const hasDates = camps.items.length > 0;

  return (
    <Section id="camps" className="overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${camps.background})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-ink/75 hatch" aria-hidden />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={camps.eyebrow}
              title={camps.title}
              align="left"
              tone="light"
              className="mb-5"
            />
            <p className="mb-8 text-base leading-relaxed text-white/70">
              {camps.blurb}
            </p>
            <Button href={camps.cta.href} variant="accent">
              {camps.cta.label}
            </Button>

            <img
              src={camps.photo}
              alt=""
              className="mt-10 hidden aspect-[4/3] w-full max-w-sm object-cover corner-kick lg:block"
              loading="lazy"
            />
          </Reveal>

          <div className="flex flex-col gap-5">
            {hasDates ? (
              camps.items.map((camp, i) => (
                <Reveal key={`${camp.name}-${i}`} delay={i * 130}>
                  <CampCard {...camp} />
                </Reveal>
              ))
            ) : (
              <Reveal>
                <p className="bg-white/10 p-8 text-center text-sm text-white/70 corner-kick">
                  No dates announced yet — follow along on Instagram and
                  we&rsquo;ll post the next block as soon as it&rsquo;s live.
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CampCard({ name, date, time, venue, ageGroup, spaces }) {
  return (
    <article className="flex flex-col gap-5 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 corner-kick lift hover:bg-white/15 sm:flex-row sm:items-center sm:gap-6">
      {/* Date block */}
      <div className="flex shrink-0 flex-col items-center justify-center bg-accent px-5 py-3 text-center text-ink corner-kick sm:w-28">
        <span className="font-display text-sm font-bold">{date}</span>
        <span className="text-xs text-ink/70">{time}</span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="mb-1.5 font-display text-lg font-bold text-white">
          {name}
        </h3>
        <p className="flex items-center gap-1.5 text-sm text-white/70">
          <Pin className="size-4 shrink-0 text-accent" />
          {venue}
        </p>
      </div>

      <div className="flex shrink-0 gap-6 sm:flex-col sm:gap-1.5 sm:text-right">
        <Meta label="Age group" value={ageGroup} />
        <Meta label="Spaces" value={spaces} />
      </div>
    </article>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-[0.6rem] font-bold tracking-widest text-white/50 uppercase">
        {label}
      </p>
      <p className="text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
