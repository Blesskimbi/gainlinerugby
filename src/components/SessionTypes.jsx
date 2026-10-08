import { sessionTypes } from "../data/site";
import { Check } from "./Icons";
import { Button, Container, Reveal, Section, SectionHeading } from "./ui";

export default function SessionTypes() {
  return (
    <Section id="sessions" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow={sessionTypes.eyebrow}
          title={sessionTypes.title}
          className="mb-4"
        />
        <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-relaxed text-muted">
          {sessionTypes.blurb}
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {sessionTypes.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 110} className="h-full">
              <SessionCard {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SessionCard({ name, summary, bestFor, duration, price, featured }) {
  return (
    <article
      className={`relative flex h-full flex-col p-8 corner-kick lift ${
        featured
          ? "bg-ink text-white shadow-2xl"
          : "bg-paper text-body hover:shadow-xl"
      }`}
    >
      {featured && (
        <span className="absolute top-0 right-0 bg-accent px-4 py-1.5 text-[0.65rem] font-bold tracking-widest text-ink uppercase">
          Most Popular
        </span>
      )}

      <h3
        className={`mb-3 font-display text-2xl font-bold ${
          featured ? "text-white" : "text-ink"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mb-6 flex-1 text-sm leading-relaxed ${
          featured ? "text-white/70" : "text-muted"
        }`}
      >
        {summary}
      </p>

      <dl
        className={`mb-7 space-y-2.5 border-t pt-6 text-sm ${
          featured ? "border-white/15" : "border-ink/10"
        }`}
      >
        <Row label="Best for" value={bestFor} featured={featured} />
        <Row label="Duration" value={duration} featured={featured} />
        <Row label="Price" value={price} featured={featured} />
      </dl>

      <Button
        href="#contact"
        variant={featured ? "accent" : "ghost"}
        className="w-full justify-center"
      >
        Enquire
      </Button>
    </article>
  );
}

function Row({ label, value, featured }) {
  return (
    <div className="flex gap-2.5">
      <Check
        className={`mt-0.5 size-4 shrink-0 ${
          featured ? "text-accent" : "text-accent-ink"
        }`}
      />
      <div className="min-w-0">
        <dt className="sr-only">{label}</dt>
        <dd className={featured ? "text-white/80" : "text-body"}>{value}</dd>
      </div>
    </div>
  );
}
