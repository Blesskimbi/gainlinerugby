import { bookCta } from "../data/site";
import { Ball, Social } from "./Icons";
import { Button, Container, Reveal } from "./ui";

export default function BookCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bookCta.background})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-ink/80 hatch" aria-hidden />

      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <Ball className="mb-4 size-9 text-accent" />
          <p className="eyebrow mb-4 text-accent">{bookCta.eyebrow}</p>
          <h2 className="mb-5 max-w-3xl text-3xl font-bold text-line sm:text-4xl lg:text-[3rem]">
            {bookCta.title}
          </h2>
          <p className="mb-9 max-w-xl text-base leading-relaxed text-line/70">
            {bookCta.blurb}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
              href={bookCta.primaryCta.href}
              target="_blank"
              rel="noreferrer noopener"
              variant="accent"
              showArrow={false}
            >
              <Social name="instagram" className="size-4" />
              {bookCta.primaryCta.label}
            </Button>
            <Button href={bookCta.secondaryCta.href} variant="outline">
              {bookCta.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
