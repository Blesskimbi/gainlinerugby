import { process } from "../data/site";
import { Container, Reveal, Section, SectionHeading } from "./ui";

export default function Process() {
  return (
    <Section id="process" className="bg-paper">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          className="mb-4"
        />
        <p className="mx-auto mb-16 max-w-2xl text-center text-base text-muted">
          {process.blurb}
        </p>

        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connecting rule behind the step numbers, desktop only */}
          <li
            aria-hidden
            className="absolute top-7 right-0 left-0 hidden border-t border-dashed border-ink/15 lg:block"
          />

          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 110} className="relative">
              <div className="flex h-full flex-col">
                <span className="mb-6 flex size-14 items-center justify-center bg-ink font-display text-lg font-bold text-accent corner-kick">
                  {step.n}
                </span>
                <h3 className="mb-2.5 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
