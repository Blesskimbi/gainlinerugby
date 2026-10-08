import { hero } from "../data/site";
import { Ball } from "./Icons";
import { Button, Container, Stat } from "./ui";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.background})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-ink/80" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-ink to-transparent"
        aria-hidden
      />

      <Container className="relative pt-36 pb-0 lg:pt-52">
        <div className="flex flex-col items-center text-center">
          <Ball className="mb-5 size-9 text-accent" />
          <p className="eyebrow mb-5 text-accent">{hero.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold text-line sm:text-5xl lg:text-[5rem] lg:leading-[1.05]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-line/75 sm:text-lg">
            {hero.blurb}
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <Button href={hero.primaryCta.href} variant="accent">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              showArrow={false}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-14">
          <img
            src={hero.action}
            alt="A GainLine coaching session in progress"
            className="mx-auto aspect-[16/9] w-full max-w-4xl object-cover shadow-2xl corner-kick"
            loading="eager"
          />
        </div>
      </Container>

      <Container className="relative -mt-8 pb-16 lg:-mt-12">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 bg-white px-6 py-8 shadow-2xl corner-kick sm:gap-8 sm:px-10">
          {hero.stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
